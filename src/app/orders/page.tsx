"use client";

import { OrderType } from "@/types/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

const OrdersPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  const { isLoading, data } = useQuery<OrderType[]>({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/api/orders");
      if (!res.ok) {
        throw new Error("Siparişler alınamadı!");
      }
      return res.json();
    },
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ id, status }: { id: string; status: string }) => {
      return fetch(`http://localhost:3000/api/orders/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(status),
      });
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>, id: string) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement;
    const status = input.value;

    mutation.mutate({ id, status });
    toast.success("Sipariş durumu değiştirildi!");
  };

  if (isLoading || status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-4 lg:px-20 xl:px-40 min-h-screen">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Sipariş Kimliği</th>
            <th>Tarih</th>
            <th>Fiyat</th>
            <th className="hidden md:block">Ürünler</th>
            <th>Durum</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr
              className={`${item.status !== "delivered" && "bg-red-50"}`}
              key={item.id}
            >
              <td className="hidden md:block py-6 px-1">{item.id}</td>
              <td className="py-6 px-1">
                {" "}
                {item.createdAt.toString().slice(0, 10)}{" "}
              </td>
              <td className="py-6 px-1">{item.price} ₺</td>
              <td className="hidden md:block py-6 px-1">
                {item.products[0].title}
              </td>
              {session?.user.isAdmin ? (
                <td>
                  <form
                    className="flex items-center justify-center gap-4"
                    onSubmit={(e) => handleUpdate(e, item.id)}
                  >
                    <input
                      placeholder={item.status}
                      className="p-2 ring-1 ring-red-100 rounded-md"
                    />
                    <button className="bg-red-400 p-2 rounded-full">
                      <Image src="/edit.png" alt="" width={20} height={20} />
                    </button>
                  </form>
                </td>
              ) : (
                <td className="py-6 px-1"> {item.status} </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;

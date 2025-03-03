"use client";

import { useCartStore } from "@/utils/store";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const CartPage = () => {
  const { products, totalItems, totalPrice, removeFromCart } = useCartStore();
  const { clearCart } = useCartStore();
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  const handleCheckout = async () => {
    if (!session) {
      router.push("/login");
    } else {
      try {
        const res = await fetch("http://localhost:3000/api/orders", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            price: totalPrice,
            products,
            status: "Not Paid!",
            userEmail: session.user.email,
          }),
        });
        const data = await res.json();
        router.push(`/pay/${data.id}`);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col lg:flex-row text-red-500">
      <div className="overflow-y-auto lg:w-2/3 p-4 flex flex-col gap-4 md:h-full lg:h-auto">
        {products.map((item) => (
          <div
            className="flex items-center justify-between bg-white p-4 rounded-md shadow-lg"
            key={item.id}
          >
            {item.img && (
              <Image src={item.img} alt="" width={100} height={100} />
            )}
            <div>
              <h1 className="uppercase text-xl font-bold">{item.title}</h1>
              <p> {item.quantity} adet</p>
              <span>{item.optionTitle}</span>
            </div>
            <h2 className="font-bold">{item.price} ₺</h2>
            <span
              className="cursor-pointer text-red-500"
              onClick={() => removeFromCart(item)}
            >
              X
            </span>
          </div>
        ))}
      </div>
      <div className="lg:w-1/3 p-4 bg-fuchsia-50 flex flex-col gap-4 md:h-full lg:h-auto">
        <div className="flex justify-between bg-white p-4 rounded-md shadow-lg">
          <span className="">Toplam ({totalItems} öğe)</span>
          <span className="">{totalPrice} ₺</span>
        </div>
        <div className="flex justify-between bg-white p-4 rounded-md shadow-lg">
          <span className="">Teslimat Ücreti</span>
          <span className="">0.00 ₺</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between bg-white p-4 rounded-md shadow-lg">
          <span className="">TOPLAM(KDV DAHİL)</span>
          <span className="font-bold">{totalPrice} ₺</span>
        </div>
        <div className="flex flex-col xs:flex-col lg:flex-row items-center justify-center gap-4">
          <button
            onClick={clearCart}
            className="bg-red-500 text-white p-2 rounded-md w-full  self-center lg:self-end mt-4"
          >
            SEPETİ TEMİZLE
          </button>
          <button
            className="bg-red-500 text-white p-2 rounded-md w-full  self-center lg:self-end mt-4"
            onClick={handleCheckout}
          >
            ÖDEME
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

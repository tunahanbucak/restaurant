"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";

type Inputs = {
  title: string;
  desc: string;
  price: number;
  catSlug: string;
};

type Option = {
  title: string;
  additionalPrice: number;
};

const AddPage = () => {
  const { data: session, status } = useSession();

  const [inputs, setInputs] = useState<Inputs>({
    title: "",
    desc: "",
    price: 0,
    catSlug: "",
  });

  const [option, setOption] = useState<Option>({
    title: "",
    additionalPrice: 0,
  });

  const [options, setOptions] = useState<Option[]>([]);
  const [file, setFile] = useState<File>();
  const router = useRouter();

  if (status === "loading") return <p>Yükleniyor...</p>;

  if (status === "unauthenticated" || !session?.user.isAdmin) {
    router.push("/");
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const changeOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOption((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  //   const target = e.target as HTMLInputElement;
  //   if (target.files && target.files.length > 0) {
  //     setFile(target.files[0]);
  //   }
  // };

  // const uploadImage = async () => {
  //   const data = new FormData();
  //   data.append("file", file!);
  //   data.append("upload_preset", "restaurant");

  //   const res = await fetch(
  //     "https://api.cloudinary.com/v1_1/drw5srglqe/image",
  //     {
  //       method: "POST",
  //       body: data,
  //     }
  //   );
  //   const resData = await res.json();
  //   return resData.url;
  // };

  const handleChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const item = (target.files as FileList)[0];
    setFile(item);
  };

  const upload = async () => {
    const data = new FormData();
    data.append("file", file!);
    data.append("upload_preset", "restaurant");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/drw5srglqe/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const resData = await res.json();
    return resData.url;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const url = await upload();
      const res = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          img: url,
          ...inputs,
          options,
        }),
      });

      const data = await res.json();
      router.push(`/product/${data.id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-lg"
      >
        <h1 className="text-2xl font-semibold text-gray-800">Yeni Ürün Ekle</h1>
        <div className="w-full flex felex-col gap-2">
          <label
            className="text-sm cursor-pointer flex gap-4 items-center"
            htmlFor="file"
          >
            <Image src="/upload.png" alt="" width={30} height={20} />
            <span> Resim Yükle</span>
            <input
              type="file"
              onChange={handleChangeImg}
              className="border p-2 rounded"
            />
          </label>
        </div>
        <label className="text-sm font-medium text-gray-600">Başlık</label>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <label className="text-sm font-medium text-gray-600">Açıklama</label>
        <textarea
          name="desc"
          onChange={handleChange}
          rows={3}
          className="border p-2 rounded"
        />
        <label className="text-sm font-medium text-gray-600">Fiyat</label>
        <input
          type="number"
          name="price"
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <label className="text-sm font-medium text-gray-600">Kategori</label>
        <input
          type="text"
          name="catSlug"
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <label className="text-sm font-medium text-gray-600">
          Seçenekler(Boyut)
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            name="title"
            placeholder="Başlık"
            onChange={changeOption}
            className="border p-2 rounded flex-1"
          />
          <input
            type="number"
            name="additionalPrice"
            placeholder="Ekstra Fiyat"
            onChange={changeOption}
            className="border p-2 rounded flex-1"
          />
          <button
            type="button"
            className="bg-blue-500 text-white px-3 py-2 rounded"
            onClick={() => setOptions((prev) => [...prev, option])}
          >
            Ekle
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {options.map((opt) => (
            <div
              key={opt.title}
              className="p-2  rounded-md cursor-pointer bg-gray-200 text-gray-400"
              onClick={() =>
                setOptions((prev) =>
                  prev.filter((item) => item.title !== opt.title)
                )
              }
            >
              <span>{opt.title}</span>
              <span className="text-xs"> (+ ${opt.additionalPrice})</span>
            </div>
          ))}
        </div>
        <button type="submit" className="bg-green-500 text-white py-2 rounded">
          Ürünü Ekle
        </button>
      </form>
    </div>
  );
};

export default AddPage;

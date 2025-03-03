"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

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
  const router = useRouter();

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
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (status === "loading") return <p>Yükleniyor...</p>;

  if (status === "unauthenticated" || !session?.user.isAdmin) {
    router.push("/");
    return null;
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOption((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      setFile(target.files[0]);
    }
  };

  const uploadImage = async () => {
    if (!file) {
      setError("Lütfen bir resim yükleyin.");
      return null;
    }

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "restaurant");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/lamadev/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      if (!res.ok) {
        throw new Error("Resim yükleme hatası");
      }

      const resData = await res.json();
      return resData.url;
    } catch (err) {
      console.log(err);
      setError("Resim yüklenirken hata oluştu.");
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const imageUrl = await uploadImage();
    if (!imageUrl) return;

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ img: imageUrl, ...inputs, options }),
      });

      if (!res.ok) {
        throw new Error("Ürün eklenirken hata oluştu");
      }

      const data = await res.json();
      router.push(`/product/${data.id}`);
    } catch (err) {
      console.log(err);
      setError("Ürün eklenirken hata oluştu.");
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-lg"
      >
        <h1 className="text-2xl font-semibold text-gray-800">Yeni Ürün Ekle</h1>
        {error && <p className="text-red-500">{error}</p>}
        <label className="text-sm font-medium text-gray-600">Resim Yükle</label>
        <input
          type="file"
          onChange={handleFileChange}
          className="border p-2 rounded"
        />
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
            onChange={handleOptionChange}
            className="border p-2 rounded flex-1"
          />
          <input
            type="number"
            name="additionalPrice"
            placeholder="Ekstra Fiyat"
            onChange={handleOptionChange}
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
          {options.map((opt, index) => (
            <span key={index} className="bg-gray-200 px-2 py-1 rounded text-sm">
              {opt.title} (+{opt.additionalPrice}₺)
            </span>
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

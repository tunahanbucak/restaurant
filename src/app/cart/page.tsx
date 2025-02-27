import Image from "next/image";
import React from "react";

const CartPage = () => {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col lg:flex-row text-red-500">
      <div className="overflow-y-auto lg:w-2/3 p-4 flex flex-col gap-4 md:h-full lg:h-auto">
        <div className="flex items-center justify-between bg-white p-4 rounded-md shadow-lg">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div>
            <h1 className="uppercase text-xl font-bold">SİCİLİAN</h1>
            <span>Büyük</span>
          </div>
          <h2 className="font-bold">79.90 ₺</h2>
          <span className="cursor-pointer text-red-500">X</span>
        </div>
        <div className="flex items-center justify-between bg-white p-4 rounded-md shadow-lg">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div>
            <h1 className="uppercase text-xl font-bold">SİCİLİAN</h1>
            <span>Büyük</span>
          </div>
          <h2 className="font-bold">79.90 ₺</h2>
          <span className="cursor-pointer text-red-500">X</span>
        </div>
      </div>
      <div className="lg:w-1/3 p-4 bg-fuchsia-50 flex flex-col gap-4 md:h-full lg:h-auto">
        <div className="flex justify-between bg-white p-4 rounded-md shadow-lg">
          <span className="">Toplam (3 öğe)</span>
          <span className="">159.80 ₺</span>
        </div>
        <div className="flex justify-between bg-white p-4 rounded-md shadow-lg">
          <span className="">Teslimat Ücreti</span>
          <span className="">0.00 ₺</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between bg-white p-4 rounded-md shadow-lg">
          <span className="">TOPLAM(KDV DAHİL)</span>
          <span className="font-bold">159.80 ₺</span>
        </div>
        <button className="bg-red-500 text-white p-3 rounded-md w-full  self-center lg:self-end mt-4">
          ÖDEME
        </button>
      </div>
    </div>
  );
};

export default CartPage;

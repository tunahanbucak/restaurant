import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";
import Link from "next/link";

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">
          Lezzetli Burger & Altın Patates Kızartması
        </h1>
        <p className="text-white xl:text-xl">
          Bu fırsat sadece bugün geçerli! Damak çatlatan burger ve çıtır patates
          kızartması seni bekliyor!
        </p>
        <CountDown />
        <Link href="/menu">
          <button className="bg-red-500 text-white rounded-md py-3 px-6">
            Sipariş Ver
          </button>
        </Link>
      </div>
      <div className="flex-1 w-full relative md:h-full">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;

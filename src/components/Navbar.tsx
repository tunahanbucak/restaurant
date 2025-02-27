import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import CartIcon from "./CartIcon";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">ANASAYFA</Link>
        <Link href="/menu">MENÜ</Link>
        <Link href="/contact">İLETİŞİM</Link>
      </div>
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">MASSIMO</Link>
      </div>
      <div className="md:hidden">
        <Menu />
      </div>
      <div className="hidden md:flex gap-4 items-center justify-end flex-1 ">
        {/* <div className="flex items-center gap-2 cursor-pointer bg-red-300 px-1 rounded-md md:absolute top-3 r-2 lg:static">
          <Image src="/phone.png" alt="Phone" width={20} height={20} />
          <span>0 (212) 123 45 67</span>
        </div> */}
        {!user ? (
          <Link href="/login">GİRİŞ YAP</Link>
        ) : (
          <Link href="/orders">SİPARİŞLER</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;

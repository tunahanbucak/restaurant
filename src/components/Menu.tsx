"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Anasayfa", url: "/" },
  { id: 2, title: "Menü", url: "/menu" },
  { id: 3, title: "CALIŞMA SAATLERİ ", url: "/" },
  { id: 4, title: "İLETİŞİM", url: "/contact" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);
  const user = false;
  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt="Menu"
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt="Menu"
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <div className="bg-red-500 text-white absolute left-0 top-24 h-[calc(100vh-6rem)] flex items-center justify-center text-3xl flex-col gap-8 w-full z-10">
          {links.map((item) => (
            <Link key={item.id} href={item.url} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
          {!user ? (
            <Link href="/login" onClick={() => setOpen(false)}>
              GİRİŞ YAP
            </Link>
          ) : (
            <Link href="/orders" onClick={() => setOpen(false)}>
              Siparişler
            </Link>
          )}
          <Link href="/cart" onClick={() => setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;

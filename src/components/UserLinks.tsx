"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const UserLinks = () => {
  const { status } = useSession();
  return (
    <div>
      {status === "authenticated" ? (
        <div>
          <Link href="/orders">SİPARİŞLER</Link>
          <span className="ml-4 cursor-pointer" onClick={() => signOut()}>
            Çıkış yap
          </span>
        </div>
      ) : (
        <Link href="/login">GİRİŞ YAP</Link>
      )}
    </div>
  );
};

export default UserLinks;

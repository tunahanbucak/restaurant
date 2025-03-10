"use client";

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginPage = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">
      <div className=" h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2">
        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
          <Image src="/loginBg.png" alt="" fill className="object-cover" />
        </div>
        <div className="p-10 flex flex-col gap-8 md:w-1/2">
          <h1 className="font-bold text-xl xl:text-3xl">Hoşgeldiniz</h1>
          <p>Hesabınıza giriş yapın veya yeni bir tane oluşturun</p>
          <button
            className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md"
            onClick={() => signIn("google")}
          >
            <Image
              src="/google.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Google ile giriş yap</span>
          </button>
          <button
            className="flex gap-4 p-4 ring-1 ring-blue-100 rounded-md"
            onClick={() => signIn("github")}
          >
            <Image
              src="/github.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Github ile giriş yap</span>
          </button>
          <p className="text-sm">
            Bir sorun mu var?
            <Link className="underline" href="/contact">
              {" "}
              Bizimle iletişime geçin
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const SuccessPageContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const payment_intent = searchParams.get("payment_intent");

  useEffect(() => {
    const makeRequest = async () => {
      try {
        await fetch(`http://localhost:3000/api/confirm/${payment_intent}`, {
          method: "PUT",
        });
        setTimeout(() => {
          router.push("/orders");
        }, 5000);
      } catch (err) {
        console.log(err);
      }
    };

    if (payment_intent) {
      makeRequest();
    }
  }, [payment_intent, router]);

  return (
    <div className="min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-15rem)] flex items-center justify-center text-center text-2xl text-green-700">
      <p className="max-w-[600px]">
        Ödeme başarılı. Siparişler sayfasına yönlendiriliyorsunuz. Lütfen
        sayfayı kapatmayın.
      </p>
    </div>
  );
};

export default SuccessPageContent;

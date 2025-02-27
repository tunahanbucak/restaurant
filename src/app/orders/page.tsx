import React from "react";

const OrdersPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Sipariş Kimliği</th>
            <th>Tarih</th>
            <th>Fiyat</th>
            <th className="hidden md:block">Ürünler</th>
            <th>Durum</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-sm md:text-base bg-red-50">
            <td className="hidden md:block py-6 px-1">1237861238721</td>
            <td className="py-6 px-1">19.07.2023</td>
            <td className="py-6 px-1">89.90</td>
            <td className="hidden md:block py-6 px-1">
              Big Burger Menü (2), Sebzeli Pizza (2), Coca Cola 1L (2)
            </td>
            <td className="py-6 px-1">Yolda (yaklaşık. 10 dakika)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">1237861238721</td>
            <td className="py-6 px-1">19.07.2023</td>
            <td className="py-6 px-1">89.90</td>
            <td className="hidden md:block py-6 px-1">
              Big Burger Menü (2), Sebzeli Pizza (2), Coca Cola 1L (2)
            </td>
            <td className="py-6 px-1">Yolda (yaklaşık. 10 dakika)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">1237861238721</td>
            <td className="py-6 px-1">19.07.2023</td>
            <td className="py-6 px-1">89.90</td>
            <td className="hidden md:block py-6 px-1">
              Big Burger Menü (2), Sebzeli Pizza (2), Coca Cola 1L (2)
            </td>
            <td className="py-6 px-1">Yolda (yaklaşık. 10 dakika)...</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;

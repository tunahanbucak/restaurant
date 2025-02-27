import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-red-500  flex items-center justify-between">
      <Link href="/" className="font-bold text-xl">
        MASSIMO
      </Link>
      {/* <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-red-500 px-1 rounded-md text-white">
        <Image src="/phone.png" alt="" width={20} height={20} />
        <span>123 456 78</span>
      </div> */}
      <p>&copy; TÜM HAKLARI SAKLIDIR.</p>
    </div>
  );
};

export default Footer;

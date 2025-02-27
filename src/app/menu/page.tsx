import { menu } from "@/data";
import Link from "next/link";
import React from "react";

const MenuPage = () => {
  return (
    <div className="flex flex-col min-h-screen pt-8">
      <div className="p-4 lg:px-20 xl:px-40 flex-grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menu.map((category) => (
          <Link
            href={`/menu/${category.slug}`}
            key={category.id}
            className="relative w-full h-72 md:h-96 bg-cover rounded-lg overflow-hidden flex items-center justify-center group"
            style={{
              backgroundImage: `url(${category.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-6 flex flex-col items-start justify-end">
              <div className={`text-${category.color} space-y-4`}>
                <h1 className="uppercase font-bold text-2xl md:text-3xl">
                  {category.title}
                </h1>
                <p className="text-sm md:text-base">{category.desc}</p>
                <button
                  className={`hidden md:block bg-${category.color} text-${
                    category.color === "black" ? "white" : "red-500"
                  } py-2 px-4 rounded-md transition-all opacity-0 group-hover:opacity-100`}
                >
                  Keşfet
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;

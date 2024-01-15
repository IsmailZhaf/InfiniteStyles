import React from "react";
import cardigan from "../../../../public/bestSeller/cardigan.webp";
import jacket from "../../../../public/bestSeller/jacket.png";
import { Card } from "../Templates/Card";
import Link from "next/link";

export const HomeSection4 = () => {
  return (
    <div className="m-0 min-h-screen bg-gradient-to-b from-[#99D9DB] to-[#98D4BB] pb-[100px]">
      <div className="flex gap-10">
        <div>
          <div className="p-[85px] font-serif text-white max-w-[1000px]">
            <div className="space-y-5 mb-[100px]">
              <h1 className="text-[70px] font-semibold">
                Best Seller <br /> Product
              </h1>
            </div>
            <div className="w-[500px]">
              <h3 className="text-[27px]">
                Tak mau ketinggalan, produk pilihan pelanggan kami yang paling diminati kini tersedia! Temukan keunggulan yang membuatnya jadi favorit, dan miliki sekarang sebelum kehabisan! <br /> #MustHave
              </h3>
            </div>
          </div>
        </div>
        <div className="flex gap-10 mt-[180px]">
          <Card link={cardigan} name={"Cardigan"} price={350}  />
          <Card link={jacket} name={"Jacket"} price={750} />
        </div>
      </div>
      <div className="ml-[10%]">
        <Link href={"/BestSeller"} className="px-14 py-4 rounded-lg bg-black text-white text-[20px]">
          SEE MORE
        </Link>
      </div>
    </div>
  );
};

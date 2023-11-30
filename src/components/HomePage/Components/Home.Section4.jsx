import React from "react";
import cardigan from "../../../../public/bestSeller/cardigan.webp";
import jacket from "../../../../public/bestSeller/jacket.png";
import { Card } from "../Templates/Card";

export const HomeSection4 = () => {
  return (
    <div className="m-0 min-h-screen bg-gradient-to-b from-[#99D9DB] to-[#98D4BB]">
      <div className="flex gap-12">
        <div>
          <div className="p-[85px] font-serif text-white max-w-[1000px]">
            <div className="space-y-5 mb-[130px]">
              <h1 className="text-[90px] font-semibold">
                Best Seller <br /> Product
              </h1>
            </div>
            <div>
              <h3 className="text-[40px]">Tak mau ketinggalan, produk pilihan pelanggan kami yang paling diminati kini tersedia! Temukan keunggulan yang membuatnya jadi favorit, dan miliki sekarang sebelum kehabisan! <br/> #MustHave</h3>
            </div>
          </div>
        </div>
        <div className="flex gap-16 mt-[100px]">
          <Card link={cardigan} name={"Cardigan"} price={"Rp350.000"} />
          <Card link={jacket} name={"Jacket"} price={"Rp750.000"} />
        </div>
      </div>
      <div className="ml-[10%]">
        <button className="px-14 py-4 rounded-lg bg-black text-white text-[20px]">SEE MORE</button>
      </div>
    </div>
  );
};

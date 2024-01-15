import React from "react";
import Image from "next/image";
import HomeSweater from "../../../../public/Home_Sweater.png";
import Rating from "../../../../public/rating.png";

export const Card = ({ link, name, price }) => {
  return (
    <div className="h-[400px] bg-white rounded-t-3xl w-[250px]">
      <Image src={link} width={250} height={300} className="h-[300px] rounded-t-3xl"></Image>
      <div className="ml-5 mt-2 space-y-0">
        <Image src={Rating} />
        <h1 className="text-[18px] font-semibold">{name}</h1>
        <h1 className="text-[22px] tracking-wide">Rp{price}.000</h1>
      </div>
    </div>
  );
};

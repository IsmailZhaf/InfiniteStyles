import React from "react";
import Image from "next/image";
import HomeSweater from "../../../../public/Home_Sweater.png";
import Rating from "../../../../public/rating.png";

export const Card = ({ link, name, price }) => {
  return (
    <div className="h-[550px] bg-white rounded-t-3xl">
      <Image src={link} className="h-[440px] w-[330px] rounded-t-3xl"></Image>
      <div className="ml-5 mt-2 space-y-0">
        <Image src={Rating} />
        <h1 className="text-[20px] font-semibold">{name}</h1>
        <h1 className="text-[30px] tracking-wide">{price}</h1>
      </div>
    </div>
  );
};

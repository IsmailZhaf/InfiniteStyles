import React from "react";
import Image from "next/image";
import women from "../../../../public/women/women1.png";
import star from "../../../../public/women/star.png";

export const WomenCard = ({ link, name, price }) => {
  return (
    <div className="w-[250px] h-[350px] bg-black">
      <Image src={link} className="h-[250px]" />
      <div className="ml-5 mt-2 space-y-0 text-white">
        <Image src={star} />
        <h1 className="text-[25px] font-semibold">{name}</h1>
        <h1 className="text-[15px] tracking-wide">{price}</h1>
      </div>
    </div>
  );
};

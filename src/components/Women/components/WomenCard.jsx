import React from "react";
import Image from "next/image";
import star from "../../../../public/women/star.png";

export const WomenCard = ({link, name, price  }) => {
  return (
    <div className="w-[250px] h-[380px] bg-black ">
      <Image src={link} width={250} height={360} alt={""} />
      <div className="ml-5 mt-2 space-y-2 text-white">
        <Image src={star} alt={""} />
        <h1 className="h-[50px] text-[20px] font-semibold">{name}</h1>
        <h1 className="text-[20px] tracking-wide mt-10">Rp{price}.000</h1>
      </div>
    </div>
  );
};

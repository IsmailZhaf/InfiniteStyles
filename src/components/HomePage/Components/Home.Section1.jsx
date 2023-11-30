import React from "react";
import Image from "next/image";
import homePhoto from "../../../../public/foto-homepage.png";

export const HomeSection1 = () => {
  return (
    <div className="m-7 flex bg-[#99D9DB] max-w-screen h-[730px] gap-4 mb-[60px]">
      <div className="flex flex-col gap-5 mx-[109px] my-[105px]">
        <h3 className="text-white text-[44px] tracking-widest">OUTFIT OF THE DAY</h3>
        <div className="text-[94px] space-y-[-25px] text-[#444444] tracking-[2px]">
          <h1 className="">ALL YOUR</h1>
          <h1 className="font-bold">STYLES ARE HERE</h1>
        </div>
        <h3 className="pt-6 font-semibold text-[26px] text-lg rounded-xl h-[78px] text-center bg-white w-[260px]">Shop Now</h3>
      </div>
      <div className="flex items-center px-12">
        <Image src={homePhoto} width={900} height={500} />
      </div>
    </div>
  );
};

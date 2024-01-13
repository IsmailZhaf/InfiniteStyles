import React from "react";
import bg from "../../../../public/women/1.jpeg";
import Image from "next/image";
import { Covered_By_Your_Grace } from "next/font/google";

export const WomenSection1 = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bg.src})`}}
        className="flex pl-[100px] bg-no-repeat bg-contain items-center max-w-screen h-[730px] mb-[60px] mx-[50px]"
      >
        {/* <Image src={bg} className="w-full" /> */}
        <div className="flex flex-col gap-5">
          <h3 className="text-[#9d9d9d] text-[40px] tracking-widest">BEST OUTFIT FOR WOMEN</h3>
          <div className="text-[64px] space-y-[-25px] text-white tracking-[2px]">
            <h1 className="">ALL YOUR</h1>
            <h1 className="font-bold">STYLES ARE HERE</h1>
          </div>
          <h3 className="pt-4 font-semibold text-[18px] text-lg rounded-xl h-[60px] text-center bg-white w-[260px]">Shop Now</h3>
        </div>
      </div>
    </div>
  );
};

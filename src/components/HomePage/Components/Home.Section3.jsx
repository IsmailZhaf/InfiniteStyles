import React from "react";
import Image from "next/image";
import Link from "next/link";
import bikerJacket from "../../../../public/promo/biker-jacket.png";
import denimKids from "../../../../public/promo/denim-kids.png";
import flowerBlouse from "../../../../public/promo/flower-blouse.png";
import monokromJacket from "../../../../public/promo/Monokrom-jacket.png";
import pinkCropTop from "../../../../public/promo/Pink_Crop_Top.png";

export const HomeSection3 = () => {
  return (
    <div className="mb-20">
      <div className="text-center mb-20">
        <h1 className="font-serif text-[45px] font-semibold mb-7">Promo This Month</h1>
        <p className="text-[20px] text-[#67707a] tracking-tight">
          Dapatkan diskon secara langsung pada setiap pembelian. <br /> Tak perlu kode, cukup berbelanja dan rasakan keajaibannya!
        </p>
      </div>
      <div className="flex flex-col gap-9 items-center">
        <div className="flex justify-center gap-12">
          <Image src={pinkCropTop} className="h-[200px] w-[200px]" />
          <Image src={monokromJacket} className="h-[200px] w-[200px]" />
          <Image src={denimKids} className="h-[200px] w-[200px]" />
          <Image src={bikerJacket} className="h-[200px] w-[200px]" />
          <Image src={flowerBlouse} className="h-[200px] w-[200px]" />
        </div>
        <Link href={"/Promo"} className="border border-solid border-black text-[20px] px-6 py-3 ">
          View All
        </Link>
      </div>
    </div>
  );
};

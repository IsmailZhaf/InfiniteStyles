import React from "react";
import Image from "next/image";
import HomeSweater from "../../../../public/Home_Sweater.png";
import HomeSneakers from "../../../../public/Home_Sneakers.webp";
import HomeJeans from "../../../../public/Home_Jeans.jpeg";

export const HomeSection2 = () => {
  return (
    <div className="mb-20">
      <div className="text-center mb-20">
        <h1 className="font-serif text-[45px] font-semibold mb-7">New Collection</h1>
        <p className="text-[20px] text-[#67707a] tracking-tight">
          Temukan gaya baru Anda dengan Koleksi Terbaru kami - <br />
          desain eksklusif dan penawaran spesial menanti! <br /> #FashionUpdate
        </p>
      </div>
      <div className="flex mx-auto justify-center gap-12">
        <div className="relative">
          <Image src={HomeSweater} className="h-[360px] w-[320px] rounded-2xl" />
          <div className="absolute p-2 text-[24px] text-center ml-5 rounded-2xl inset-y-[70%] h-14  bg-white w-[280px] ">Sweater</div>
        </div>
        <div className="relative">
          <Image src={HomeSneakers} className="h-[360px] w-[320px] rounded-2xl" />
          <div className="absolute p-2 text-[24px] text-center ml-5 rounded-2xl inset-y-[70%] h-14  bg-white w-[280px] ">Sneakers</div>
        </div>
        <div className="relative">
          <Image src={HomeJeans} className="h-[360px] w-[320px] rounded-2xl" />
          <div className="absolute p-2 text-[24px] text-center ml-5 rounded-2xl inset-y-[70%] h-14  bg-white w-[280px] ">Jeans</div>
        </div>
      </div>
    </div>
  );
};

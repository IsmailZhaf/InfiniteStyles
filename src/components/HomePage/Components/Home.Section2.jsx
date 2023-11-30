import React from "react";
import Image from "next/image";
import HomeSweater from "../../../../public/Home_Sweater.png";
import HomeSneakers from "../../../../public/Home_Sneakers.webp";
import HomeJeans from "../../../../public/Home_Jeans.jpeg";

export const HomeSection2 = () => {
  return (
    <div className="mb-20">
      <div className="text-center mb-20">
        <h1 className="font-serif text-[55px] font-semibold mb-7">New Collection</h1>
        <p className="text-[30px] text-[#67707a] tracking-tight">
          Temukan gaya baru Anda dengan Koleksi Terbaru kami - <br />
          desain eksklusif dan penawaran spesial menanti! <br /> #FashionUpdate
        </p>
      </div>
      <div className="flex ml-[500px] gap-12">
        <div className="relative">
          <Image src={HomeSweater} className="h-[480px] w-[400px] rounded-2xl" />
          <div className="absolute p-2 text-[26px] text-center ml-[15%] rounded-2xl inset-y-[70%] h-14  bg-white w-[300px] ">Sweater</div>
        </div>
        <div className="relative">
          <Image src={HomeSneakers} className="h-[480px] w-[400px] rounded-2xl" />
          <div className="absolute p-2 text-[26px] text-center ml-[15%] rounded-2xl inset-y-[70%] h-14   bg-white w-[300px] ">Sneakers</div>
        </div>
        <div className="relative">
          <Image src={HomeJeans} className="h-[480px] w-[400px] rounded-2xl" />
          <div className="absolute p-2 text-[26px] text-center ml-[15%] rounded-2xl inset-y-[70%] h-14  bg-white w-[300px] ">Jeans</div>
        </div>
      </div>
    </div>
  );
};

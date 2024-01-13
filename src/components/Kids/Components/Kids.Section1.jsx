import React from 'react'
import Image from 'next/image'
import kids1 from "../../../../public/kids1.png"

export const KidsSection1 = () => {
  return (
    <div className=" flex justify-center items-center bg-[#E5DBD9] max-w-screen h-[730px] gap-4 mb-[60px] mx-[50px]">
    <div className="flex flex-col gap-5">
          <h3 className="text-[#9d9d9d] text-[40px] tracking-widest">BEST OUTFIT FOR KIDS</h3>
          <div className="text-[64px] space-y-[-25px] text-[#444444] tracking-[2px]">
            <h1 className="">ALL YOUR</h1>
            <h1 className="font-bold">STYLES ARE HERE</h1>
          </div>
          <h3 className="pt-4 font-semibold text-[18px] text-lg rounded-xl h-[60px] text-center bg-white w-[260px]">Shop Now</h3>
    </div>
    <div className="flex items-center px-10 mt-[145px]">
      <Image src={kids1} width={600} height={500} />
    </div>
  </div>
  )
}

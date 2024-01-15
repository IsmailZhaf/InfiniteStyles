import React from 'react'
import Image from 'next/image'
import { SignIn } from '@clerk/nextjs'
import img from "../../../../public/bestSeller/sunglasses.jpg"

export default function Page() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[#E5DBD9]">
      <SignIn appearance={{
          elements: {
            formButtonPrimary:
              "bg-slate-500 hover:bg-slate-400 text-sm normal-case",
            card:"rounded-none rounded-tl-2xl rounded-bl-2xl h-[530px] mr-0 "
          },
  
        }}/>
      <div className="h-[530px] flex items-center justify-center w-[400px] rounded-tr-2xl rounded-br-2xl bg-gradient-to-br from-white to-[#218B82]">
        <Image src={img} className=" rounded-2xl h-[400px] w-[300px]"/>
      </div>
    </div>
  )
}

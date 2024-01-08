import React from 'react'
import women from "../../../../public/women/women1.png"
import Image from 'next/image'
import { WomenCard } from './WomenCard'

export const WomenSection2 = () => {
  return (
    <div className='m-auto max-w-[1300px]'>
    <div></div>
    <div className='grid grid-cols-4 gap-y-[50px] justify-items-center'>
        <WomenCard link={women} name={"blue jacket"} price={"Rp500.000"}/>
        <WomenCard link={women} name={"blue jacket"} price={"Rp500.000"}/>
        <WomenCard link={women} name={"blue jacket"} price={"Rp500.000"}/>
        <WomenCard link={women} name={"blue jacket"} price={"Rp500.000"}/>
        <WomenCard link={women} name={"blue jacket"} price={"Rp500.000"}/>
        <WomenCard link={women} name={"blue jacket"} price={"Rp500.000"}/>
        <WomenCard link={women} name={"blue jacket"} price={"Rp500.000"}/>
        <WomenCard link={women} name={"blue jacket"} price={"Rp500.000"}/>
        <WomenCard link={women} name={"blue jacket"} price={"Rp500.000"}/>
        <WomenCard link={women} name={"blue jacket"} price={"Rp500.000"}/>
        <WomenCard link={women} name={"blue jacket"} price={"Rp500.000"}/>
        <WomenCard link={women} name={"blue jacket"} price={"Rp500.000"}/>
    </div>
    </div>
  )
}

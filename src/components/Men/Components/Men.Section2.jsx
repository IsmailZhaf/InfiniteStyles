"use client"
import React from 'react'
import Link from 'next/link';
import { WomenCard } from '@/components/Women/components/WomenCard';

 async function getData() {
  const response = await fetch("https://v1.appbackend.io/v1/rows/HPKXSTv3dGlW",{
    cache: "no-store",
  });
  const data = await response.json();
  return data;
}

export const MenSection2 = async () => {
  const {data} = await getData();
  return (
    <div className='m-auto max-w-[1300px]'>
      <div className='grid grid-cols-4 gap-y-[50px] justify-items-center'>
      {data.map(({id,_id, attachment, name, age, kategori})=>{
        if(kategori === "Male") {
          return (
            <Link key={id} href={`/Order-form/${_id}`}>
              <WomenCard key={id} link={attachment} name={name} price={age}/>
            </Link>
          ) 
        }
      })} 
      </div>
    </div>
  )
}

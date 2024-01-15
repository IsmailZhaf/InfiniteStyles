"use client"
import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr';
import { useRouter } from 'next/navigation';
import React, { useRef } from 'react'

export const InputSearch = () => {
    const searchRef = useRef();
    const router = useRouter();
    const handleSearch=(e)=>{
      e.preventDefault();
      const keyword = searchRef.current.value
      router.push(`/Search/${keyword}`);
    }
  return (
        <div className="relative">
        <input className="bg-[#F6F6F6] w-[200px] p-2 rounded-xl focus:outline-none" type="text" placeholder="Search" ref={searchRef} />
            <button className='absolute top-2 end-2 flex items-center' onClick={handleSearch}>
              <MagnifyingGlass size={25}/>
            </button>
        </div>
  )
}

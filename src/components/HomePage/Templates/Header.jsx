"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import logo from "../../../../public/LOGO.png";
import { InputSearch } from "./inputSearch";
import { UserButton, SignInButton } from "@clerk/nextjs";
import { useState } from "react";

export const Header = () => {
  const [signIn, setSignIn] = useState(false)

  const handleSignIn =() =>{
    setSignIn(true);
  }

  const handleSignOut = () =>{
    setSignIn(false);
  }

  const menu = [
    { label: "Shop", route: "/" },
    { label: "Men", route: "/Men" },
    { label: "Women", route: "/Women" },
    { label: "Kids", route: "/Kids" },
  ];

  return (
    <div className="flex justify-between mx-[50px] mb-5 ">
      {/* logo */}
      <Image className="mt-7" src={logo} width={250} height={150} />
      {/* menu */}
      <div className="flex gap-4 items-end font-serif">
        {menu.map(({ label, route }, index) => {
          return (
            <Link href={route} key={index} className="text-[20px] hover:bg-slate-200 hover:rounded-xl p-1">
              {label}
            </Link>
          );
        })}
      </div>
      <div className="pt-[50px] space-y-16 flex flex-col justify-between">
        <div className="flex gap-5">
            <UserButton afterSignOutUrl="/" onClick={handleSignOut}/>
            <button className="border-[2px] border-black px-5 rounded text-[10] font-semibold" onClick={handleSignIn}>
              <SignInButton afterSignInUrl="/"/>
              </button>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>
        </div>
        <InputSearch/>
      </div>
    </div>
  );
};

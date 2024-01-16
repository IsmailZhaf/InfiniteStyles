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
        </div>
        <InputSearch/>
      </div>
    </div>
  );
};

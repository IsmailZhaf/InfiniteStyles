import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/../../public/LOGO.png"
import fb from "@/../../public/logo/fb.png";
import ig from "@/../../public/logo/ig.png";
import appstore from "@/../../public/logo/appstore.png";
import playstore from "@/../../public/logo/playstore.png";
import twitter from "@/../../public/logo/twitter.png";

export const Footer = () => {
  const menu = [
    { label: "Women", route: "/Women" },
    { label: "Men", route: "/Men" },
    { label: "Kids", route: "/Kids" },
  ];

  return (
    <div className="flex flex-col items-center bg-[#3C4242] h-[1000px] text-white">
      <div className="flex justify-evenly  mt-[100px] w-[1500px]">
        <div className="flex flex-col space-y-[20px]">
          <h1 className="text-[33px]">SHOP</h1>
          {menu.map(({ label, route }, index) => {
            return (
              <Link href={route} key={index} className="font-light text-[20px]">
                {label}
              </Link>
            );
          })}
        </div>
        <div className="space-y-[20px]">
          <h1 className="text-[33px]">Company</h1>
          <div className="text-[20px] font-light space-y-[20px]">
            <h3>Collaboration</h3>
            <h3>About Us</h3>
            <h3>Media</h3>
            <h3>Blog</h3>
          </div>
        </div>
        <div className=" space-y-[20px]">
          <h1 className="text-[33px]">More Info</h1>
          <div className="text-[20px] font-light space-y-[20px]">
            <h3>Term and Condition</h3>
            <h3>Shipping Policy</h3>
            <h3>Privacy Policy</h3>
            <h3>Sitemap</h3>
          </div>
        </div>
        <div className=" space-y-[20px]">
          <h1 className="text-[33px]">Need Help</h1>
          <div className="text-[20px] font-light space-y-[20px]">
            <h3>Returns & Refunds</h3>
            <h3>Track Order</h3>
            <h3>Contact Us</h3>
            <h3>FAQ's</h3>
          </div>
        </div>
      </div>
      <div className="flex mt-[120px] justify-between items-end w-[1150px]  space-x-20 gap-10">
        <div className="flex gap-5">
          <Image src={fb} className="w-[50px] h-[50px] bg-white rounded-xl"></Image>
          <Image src={ig} className="w-[50px] h-[50px] bg-white rounded-xl"></Image>
          <Image src={twitter} className="w-[50px] h-[50px] bg-white rounded-xl"></Image>
        </div>
        <div className="space-y-[50px]">
          <div>
            <h1 className="text-[30px] font-semibold">Download The App</h1>
          </div>
          <div className="flex gap-5 font-light">
            <div className="flex gap-2">
              <Image src={playstore} className="w-[30px] h-[40px]"></Image>
              <div>
                <h3 className="text-[10px]">Android on</h3>
                <h1 className="text-[18px]">Google Play</h1>
              </div>
            </div>
            <div className="flex gap-2">
              <Image src={appstore} className="w-[30px] h-[40px]"></Image>
              <div>
                <h3 className="text-[10px]">Available on</h3>
                <h1 className="text-[18px]">App Store</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex items-center flex-col mt-[120px] text-center w-[1150px] space-y-6">
        <Image src={logo} className="bg-white p-2 rounded-md w-[150px]"></Image>
        <h1 className="text-[20px]">
          InfiniteStyle merupakan tempat di mana gaya bertemu dengan tanpa batas, mengubah pengalaman belanja menjadi petualangan yang kreatif dan personal. Dengan koleksi fashion terkini dari merek-merek pilihan dan desainer berbakat,
          InfiniteStyle membuka pintu untuk menjelajahi berbagai gaya yang mencerminkan kepribadian unik setiap individu.
        </h1>
      </div> */}
    </div>
  );
};

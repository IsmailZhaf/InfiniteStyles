import { Card } from "@/components/HomePage/Templates/Card";
import cardigan from "../../../../public/bestSeller/cardigan.webp";
import turtleneck from "../../../../public/bestSeller/turtleneck-white.png";
import gown from "../../../../public/bestSeller/blue-white-gown.webp";
import jacket from "../../../../public/bestSeller/jacket.png";
import sunglasses from "../../../../public/bestSeller/sunglasses.jpg";
import jeans from "../../../../public/bestSeller/RippedJeansCream.webp";
import greenBArmy from "../../../../public/bestSeller/GreenBArmy.png";
import redJumpSuit from "../../../../public/bestSeller/redJumpSuit.jpg";
import discount from "../../../../public/bestSeller/discountsample.jpg";
import Image from "next/image";

export const BestSeller = () => {
  return (
    <div className="bg-[#9CB4E0] pb-[50px]">
      <div className="flex justify-center pt-[50px]">
        <h1 className="font-serif text-[80px] text-[#29218B]">Our Best Seller</h1>
      </div>
      <div className="pt-[50px] mx-auto w-[1250px] border-red-500 grid justify-items-center grid-cols-3 gap-y-12">
        <Card link={cardigan} name={"Cardigan"} price={"Rp350.000"} />
        <Card link={turtleneck} name={"Turtleneck Sweater White"} price={"Rp215.000"} />
        <Card link={gown} name={"Blue White Gown"} price={"Rp850.000"} />
        <Card link={jacket} name={"Jacket"} price={"Rp750.000"} />
        <Card link={sunglasses} name={"Sunglasses"} price={"Rp155.000"} />
        <Card link={jeans} name={"Ripped Jeans Cream"} price={"Rp599.000"} />
        <Card link={greenBArmy} name={"Cardigan"} price={"Rp199.000"} />
        <Card link={redJumpSuit} name={"Red Jump Suit"} price={"Rp265.000"} />
        <Card link={cardigan} name={"Cardigan"} price={"Rp350.000"} />
      </div>
      <div className="mt-[50px] flex bg-white m-auto w-[1300px]">
        <Image src={discount} className="w-[650px]" />
        <div className="bg-[#1B2430] w-[650px] flex flex-col justify-center items-center text-white">
          <div>
            <h1 className="text-[38px] font-medium ">
              Get More Discount <br /> Up to 40%
            </h1>
            <h1>Join Our Mailing List</h1>
            <div className="flex items-center bg-white p-3 rounded-lg w-[300px] h-[40px]">
              <input type="text" className=" focus:outline-none text-black" placeholder="Your Email Address" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



import React from "react";
import { WomenSection1 } from "./components/Women.Section1";
import { WomenSection2 } from "./components/Women.Section2";
import { HomeSection4 } from "../HomePage/Components/Home.Section4";

export const Women = () => {
  return (
    <div className="space-y-5">
      <WomenSection1 />
      <WomenSection2 />
      <HomeSection4/>
    </div>
  );
};

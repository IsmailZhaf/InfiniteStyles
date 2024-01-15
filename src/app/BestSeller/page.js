import React from "react";
import { BestSeller } from "@/components/BestSeller/components/BestSeller";
import { Header } from "@/components/HomePage/Templates/Header";

export default function Page() {
  return (
    <div>
      <Header/>
      <BestSeller />
      <Footer/>
    </div>
  );
}

import React from "react";
import { BestSeller } from "@/components/BestSeller/components/BestSeller";
import { Header } from "@/components/HomePage/Templates/Header";
import { Footer } from "@/components/HomePage/Templates/Footer";

export default function Page() {
  return (
    <div>
      <Header/>
      <BestSeller />
      <Footer/>
    </div>
  );
}

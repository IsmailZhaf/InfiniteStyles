import React from "react";
import { Women } from "@/components/Women/Women";
import { Header } from "@/components/HomePage/Templates/Header";
import { Footer } from "@/components/HomePage/Templates/Footer";

export default function Page() {
  return (
    <div>
      <Header/>
      <Women />
      <Footer/>
    </div>
  );
}

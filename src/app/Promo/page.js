import { Footer } from "@/components/HomePage/Templates/Footer"
import { Header } from "@/components/HomePage/Templates/Header"
import { Promo } from "@/components/Promo/components/Promo"
import React from "react"
export default function Page() {
  return (
    <div>
      <Header/>
      <Promo/>
      <Footer/>
    </div>
  )
}


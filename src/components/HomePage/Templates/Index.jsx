import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CartProvider } from "@/context/CartContext2";

export const Template = ({ children }) => {
  return (
    <CartProvider>
      <div className="min-h-screen m-auto ">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </CartProvider>
  );
};


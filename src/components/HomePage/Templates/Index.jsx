import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Template = ({ children }) => {
  return (
    <div className="min-h-screen m-auto mx-[50px]">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

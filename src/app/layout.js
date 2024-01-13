import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Template } from "../../src/components/HomePage/Templates/Index";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Template className="p-0 m-0">{children}</Template>
      </body>
    </html>
  );
}

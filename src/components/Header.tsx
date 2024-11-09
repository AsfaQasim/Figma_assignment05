import React from "react";
// Import the font from next/font
import { Rye } from "next/font/google";

const rye = Rye({
  subsets: ["latin"],
  weight: "400",
});

const Header = () => {
  return (
    <div className="w-full h-[80px] bg-[#A29875] flex items-center justify-between px-3 py-2">
      <h1 className={`${rye.className} text-[#FFFFFF] text-xl px-2`}>MANZZARI</h1>
    </div>
  );
};

export default Header;

import React from 'react'
import { Libre_Bodoni } from "next/font/google";
const libre_bodoni = Libre_Bodoni({ subsets: ["latin"], weight: "400" });


const Footer = () => {
  return (
    <div>
      <h1 className ={`${libre_bodoni.className} bg-[#a79e85] text-[#FFFFFF] font-normal m-6 flex justify-center px-2`}>&copy; Made by Asifa M.Qasim ❤️</h1>
    </div>
  )
}

export default Footer

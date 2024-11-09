import Header from "@/components/Header";
import React from "react";
import { Libre_Bodoni } from "next/font/google";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import Footer from "@/components/Footer";

const playfair_Display = Playfair_Display({ subsets: ["latin"], weight: "400" });
const libre_bodoni = Libre_Bodoni({ subsets: ["latin"], weight: "400" });

const Page = () => {
  return (
    <div>
      <Header />
      <div className="p-6 md:p-12 flex flex-col md:flex-row items-center">
        <div className="flex-1 text-center md:text-left">
          <h1 className={`${libre_bodoni.className} text-[32px] md:text-[40px] font-bold mt-12 md:mt-28 text-black`}>
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p className={`${libre_bodoni.className} text-[18px] md:text-[30px] leading-6 md:leading-8 text-[#787054] mt-4`}>
            An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
          </p>
          <button className={`${libre_bodoni.className} bg-[#A29875] text-white text-lg md:text-2xl mt-4 md:mt-8 rounded px-6 md:px-10 py-2`}>
            Explore Now
          </button>
        </div>
        <div className="flex-1 flex justify-center mt-6 md:mt-0">
          <Image src="/images/figma_img.png" alt="hero_image" width={300} height={400} className="w-[250px] md:w-[350px]" />
        </div>
      </div>

      <div className="text-center mt-8">
        <h1 className={`${libre_bodoni.className} text-2xl md:text-4xl font-normal text-black mb-8`}>
          Shop By Categories
        </h1>
        <ul className={`${libre_bodoni.className} flex flex-wrap justify-center gap-4 md:gap-[103px] text-lg md:text-2xl`}>
          <li>Earrings</li>
          <li>Necklace</li>
          <li>Bracelet</li>
          <li>Rings</li>
        </ul>
      </div>

      <div className="h-auto md:h-screen w-full flex justify-center p-4 md:p-0">
        <main className="w-full md:w-[60vw] grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mt-8">
          {/* Adjust image dimensions for responsiveness */}
          <div className="col-span-2 md:col-span-2">
            <Image src="/images/earring_img.png" alt="ear_ring" width={893} height={582} className="w-full" />
          </div>
          <div className="col-span-1 md:col-span-1">
            <Image src="/images/locket_img.png" alt="locket" width={438.38} height={480.99} className="w-full" />
          </div>
          <div className="col-span-1 md:col-span-1">
            <Image src="/images/locket2_img.png" alt="locket" width={438.38} height={580.99} className="w-full" />
          </div>
          <div className="col-span-1 md:col-span-1">
            <Image src="/images/bracelet_img.png" alt="bracelet" width={895} height={553.33} className="w-full" />
          </div>
          <div className="col-span-1 md:col-span-1">
            <Image src="/images/Necklace_img.png" alt="necklace" width={438.38} height={580.99} className="w-full" />
          </div>
          <div className="col-span-2 md:col-span-2">
            <Image src="/images/EARING_IMG.png" alt="ear_ring" width={893} height={582} className="w-full" />
          </div>
        </main>
      </div>

      {/* Responsive section for the last three icons */}
      <div className="flex flex-wrap justify-center gap-8 mt-8 text-center">
        <div className="flex flex-col items-center w-32 md:w-48">
          <Image src="/images/1img_img.png" alt="Shipping Worldwide" width={53} height={53} />
          <h1 className={`${libre_bodoni.className} mt-2 text-[16px] md:text-[20px]`}>
            Shipping Worldwide
          </h1>
          <p className={`${playfair_Display.className} text-sm md:text-[18px] font-medium mt-1`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="flex flex-col items-center w-32 md:w-48">
          <Image src="/images/Frame.png" alt="14 Days Return" width={53} height={53} />
          <h1 className={`${libre_bodoni.className} mt-2 text-[16px] md:text-[20px]`}>
            14 Days Return
          </h1>
          <p className={`${playfair_Display.className} text-sm md:text-[18px] font-medium mt-1`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="flex flex-col items-center w-32 md:w-48">
          <Image src="/images/Frame2.png" alt="Security Payment" width={53} height={53} />
          <h1 className={`${libre_bodoni.className} mt-2 text-[16px] md:text-[20px]`}>
            Security Payment
          </h1>
          <p className={`${playfair_Display.className} text-sm md:text-[18px] font-medium mt-1`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
   
  );
};

export default Page;

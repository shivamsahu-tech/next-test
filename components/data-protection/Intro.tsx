import Header from "../Header";
import Image from "next/image";

export default function Intro() {
  return (
    <div className="relative w-screen h-screen bg-linear-to-br flex flex-col items-center overflow-hidden text-white">
      <Header />

      <div>
         <Image src={"/data-protection/Subtract.png"} alt="Subtract" width={1200} height={30} className="absolute -top-20 left-0 w-[99vw]" />
      </div>

      <div className="flex flex-col items-center mt-20 text-center px-4">

        <Image src={"/data-protection/lock.png"} alt="lock" width={72.7} height={146.29} className="mt-[96px]" />

        <h1 className=" font-normal text-[78px] mb-3 ">
          Data Security
        </h1>

        <p className="text-gray-500 text-sm font-light mb-8">
          Keep your personal information from falling into the wrong hands.
        </p>

        <button className="bg-linear-to-r from-[#7a48ba] to-[#2d0a63] text-white px-16 py-3 rounded-full border border-[#9d63f5] shadow-lg hover:brightness-110 transition-all font-light text-xl cursor-pointer">
          Get Inxtinct One
        </button>
      </div>

      <div className="bottom-12 w-full flex flex-col items-center mt-46">
       
        <p className="text-xs uppercase tracking-[0.3em] mb-12 font-light">
          Trusted by many companies
        </p>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 px-10 max-w-6xl">
          <Image src={"/data-protection/international-group-icon.png"} alt="international-group-icon" width={150} height={30} />

          <Image src={"/data-protection/totask-icon.png"} alt="totask-icon" width={120} height={30} />

          <Image src={"/data-protection/qurious-icon.png"} alt="qurious-icon" width={120} height={30} />

          <Image src={"/data-protection/antelligent-icon.png"} alt="antelligent-icon" width={120} height={30} />

          <Image src={"/data-protection/fai-company-icon.png"} alt="fai-company-icon" width={120} height={30} />
           
        </div>
      </div>
    </div>
  );
}
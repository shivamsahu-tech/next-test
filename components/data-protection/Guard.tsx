import Image from "next/image";

export default function Guard() {
    return (
        <div className=" flex  mx-30 justify-between">

            <div className=" text-white p-12 w-[42%]">
                <div className="flex flex-col gap-12 mt-30">
                    
                    <h1 className="text-[40px] font-normal leading-tight tracking-tight">
                    Guards Against Data  <br />
                    Breaches
                    </h1>

                    <p className="text-gray-400 text-xl font-light leading-relaxed ">
                    We continuously monitor the dark web and private databases for your exposed information. The moment we find your personal data in a new breach, you get an instant alert with clear steps to secure your accounts.
                    </p>

                </div>
            </div>

            <div className=" relative w-[50%]" >
                <Image src="/data-protection/guard-grid.png" alt="guard-grid"  height={500} width={500} className="w-full absolute" />

                <div className="absolute z-10 w-full h-full flex flex-col items-center gap-5 justify-end " >
                    <button className="-translate-x-30 bg-linear-to-r from-[#7a48ba] to-[#2d0a63] text-white px-8 py-3 rounded-full border border-[#9d63f5] shadow-lg hover:brightness-110 transition-all font-light text-xl cursor-pointer">
                    Detect Data Breaches
                    </button>
                    <button className="translate-x-30 bg-linear-to-r from-[#7a48ba] to-[#2d0a63] text-white px-8 py-3 rounded-full border border-[#9d63f5] shadow-lg hover:brightness-110 transition-all font-light text-xl cursor-pointer">
                    Leaked Records
                    </button>
                    <button className="-translate-x-30 bg-linear-to-r from-[#7a48ba] to-[#2d0a63] text-white px-8 py-3 rounded-full border border-[#9d63f5] shadow-lg hover:brightness-110 transition-all font-light text-xl cursor-pointer">
                    Leaked Personal Information
                    </button>
                    <button className="translate-x-30 bg-linear-to-r from-[#7a48ba] to-[#2d0a63] text-white px-8 py-3 rounded-full border border-[#9d63f5] shadow-lg hover:brightness-110 transition-all font-light text-xl cursor-pointer">
                    Data Breaches Alerts
                    </button>
                </div>

            </div>
        
        </div>

    )
}
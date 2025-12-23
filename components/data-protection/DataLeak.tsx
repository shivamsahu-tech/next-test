import Image from "next/image";

export default function DataLeak() {
    return (
        <div className="w-full flex items-center justify-center" >
            <div className="w-[50%]" >

                <div className="w-full flex flex-col gap-2 items-center mb-12"  >

                    <h1 className="text-[40px] font-normal leading-tight tracking-tight">Data Leak Statistics</h1>

                    <p className="text-gray-400 text-sm font-light leading-relaxed text-center ">Cyber threats are growing faster than ever, and these numbers are shocking. <br /> Here's what we're up against:</p>

                </div>


                <div className="relative grid grid-cols-2 grid-rows-8 gap-4  h-[400px]">


                    <div className="relative row-span-6 bg-[#BA80FF14] rounded-3xl overflow-hidden">

                        <div className="relative z-10 pl-6 pt-6">
                            <h2 className="text-white text-5xl font-medium tracking-tight mb-6">
                                <span className="bg-linear-to-r from-white via-white to-purple-400 bg-clip-text text-transparent">Over 4,100</span>
                            </h2>

                            <p className="text-gray-400 text-sm ">
                                publicly disclosed data breaches <br /> worldwide in 2024
                            </p>
                        </div>

                        <Image src="/data-protection/dls-00.png" alt="leak" width={250} height={250} className="absolute right-0 bottom-0" />

                    </div>

                    <div className="relative row-span-4 bg-[#BA80FF14] rounded-3xl overflow-hidden">

                        <div className="relative z-10 pl-6 pt-6">
                            <h2 className="text-white text-5xl font-medium tracking-tight mb-2">
                                <span className="bg-linear-to-r from-white via-white to-purple-400 bg-clip-text text-transparent">£3 Billion</span>
                            </h2>

                            <p className="text-gray-400 text-sm ">
                                n 2023, the UK lost over £3 billion to <br /> cybercrime
                            </p>
                        </div>

                        <Image src="/data-protection/dls-01.png" alt="leak" width={180} height={180} className="absolute right-0 top-0" />
                    </div>

                    <div className="relative row-span-4 bg-[#BA80FF14] rounded-3xl p-6 overflow-hidden">

                        <div className="relative z-10 pl-6">
                            <h2 className="text-white text-5xl font-medium tracking-tight mb-2">
                                <span className="bg-linear-to-r from-white via-white to-purple-400 bg-clip-text text-transparent">49%</span>
                            </h2>

                            <p className="text-gray-400 text-sm ">
                                1 in 2 SMBs get targetted by cyber criminals
                            </p>
                        </div>

                        <Image src="/data-protection/dls-11.png" alt="leak" width={180} height={180} className="absolute right-0 bottom-0" />
                    </div>

                    <div className="row-span-2 rounded-3xl">
                        <button className="bg-linear-to-r from-[#7a48ba] to-[#2d0a63] text-white h-full w-full rounded-full border border-[#9d63f5] shadow-lg hover:brightness-110 transition-all font-light text-2xl cursor-pointer">
                            Get Inxtinct One
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}
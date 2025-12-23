import Image from "next/image";

export default function Intro() {
  return (
    <div className="relative text-white md:mb-16  p-6 lg:px-30">



    <div className="absolute inset-0 hidden lg:block"> 
        
        <div className="absolute inset-0 flex items-center justify-center ">
            <div className="relative w-full h-full">
                <Image src="/vpn/abstract-spiral.png" alt="Background" fill className="object-contain scale-125 translate-y-15" priority />
            </div>  
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-10 -translate-y-16 -translate-x-5">
            <div className="relative w-[20%] h-[20%]">
                <Image src="/vpn/intro-objects.png" alt="Overlay" fill className="object-contain scale-200" priority />
            </div>
        </div>

    </div>
      

      <div className="relative z-30 w-full lg:h-screen lg:pb-56 py-12 flex flex-col justify-evenly">
        
        <div className="flex justify-center lg:mb-20 lg:mt-16">
          <h1 className="text-4xl lg:text-7xl font-bold text-center leading-tight">
            Be Fast. Be Secure with our VPN
          </h1>
        </div>

        <div className="w-full flex flex-col items-center lg:items-start lg:mb-30 ">
          <div className="flex flex-col gap-6 p-4 lg:p-0 rounded-xl max-w-[500px]">
            <p className="text-sm lg:text-xl text-gray-400 text-center lg:text-left leading-relaxed">
              Browse, stream, and work online with complete freedom and peace of mind. Our next-generation VPN wraps your connection in powerful encryption, hiding your activity from hackers.
            </p>
            <div className="flex justify-center lg:justify-start">
              <button className="bg-[#3A0679] hover:bg-[#3A0679]/80 text-white font-medium px-14 py-5 lg:py-8 lg:px-14 lg:text-2xl rounded-full hover:cursor-pointer transition-all">
                Get Inxtinct VPN
            </button>
            </div>
          </div>
        </div>

        <div className="relative lg:hidden flex items-center justify-center z-10 w-full h-[30vh] mb-48">
            <Image
              src="/vpn/abstract-spiral-mobile.png"
              alt="Background Abstract" 
              width={600}  
              height={600} 
              className=" -z-10 absolute w-screen scale-125 sm:scale-110" 
              priority
            />

            <Image
              src="/vpn/intro-objects.png"
              alt="Central Objects"
              width={500}  
              height={500} 
              className="object-contain w-[50vw] absolute translate-y-20 scale-125 md:scale-70  lg:w-[25vw] h-auto sm:scale-100 z-10"
              priority
            />
        </div>

        <div className="w-full flex flex-col items-center lg:items-end  ">
          <div className="flex flex-col gap-4 p-4 lg:p-0  rounded-xl max-w-[500px]">
            <p className="text-sm lg:text-lg text-gray-400 lg:text-xl text-center lg:text-right leading-relaxed">
              Stay protected without sacrificing performance. Our lightweight technology delivers maximum security with zero speed loss.
            </p>
            
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center lg:text-right">
                <h2 className="text-xl lg:text-4xl font-bold text-white">10 Gbps</h2>
                <p className="text-xs lg:text-base text-gray-400 tracking-wider">Speed</p>
              </div>
              <div className="text-center lg:text-right">
                <h2 className="text-xl lg:text-4xl font-bold text-white">95+</h2>
                <p className="text-xs lg:text-base text-gray-400 tracking-wider">Countries</p>
              </div>
              <div className="text-center lg:text-right">
                <h2 className="text-xl lg:text-4xl font-bold text-white">0 Logs</h2>
                <p className="text-xs lg:text-base text-gray-400 tracking-wider">Policy</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
import Image from "next/image";

export default function Intro() {
    return (
       <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">

         <div className="absolute inset-0 flex items-center justify-center border-2 border-red-500">
           <div className="relative w-full h-full  ">
             <Image
               src="/vpn/abstract-spiral.png"
               alt="Background"
               fill
               className="object-contain"
               priority
             />
           </div>
         </div>
         
         <div className="absolute inset-0 flex items-center justify-center z-10">
           <div className="relative w-[20%] h-[20%]">
             <Image
               src="/vpn/intro-objects.png"
               alt="Overlay"
               fill
               className="object-contain"
               priority
             />
           </div>
         </div>
         
         {/* Optional overlay */}
         <div className="absolute inset-0 bg-black/20 z-20"></div>
         
         {/* Content */}
         <div className="relative z-30 flex flex-col items-center justify-center text-center px-4">
           <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
             Your Heading
           </h1>
           <p className="text-gray-200 text-lg mb-8">
             Your description text
           </p>
           <button className="bg-purple-700 hover:bg-purple-600 text-white px-8 py-3 rounded-full transition-all">
             Your Button
           </button>
         </div>
       </div>
    )
}
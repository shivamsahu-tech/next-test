     import Image from "next/image";

export default function WhyOurVpn() {
  const data = [
    {
      title: "Industry Leading Security",
      description: "Bank-level encryption that protects your data on any network.",
      icon: "/vpn/leading-security-icon.png",
    },
    {
      title: "Complete Privacy Protection",
      description: "A strict no-logs policy means your online activity remains yours alone.",
      icon: "/vpn/complete-privacy-icon.png",
    },
    {
      title: "Bypass Censorship",
      description: "Access your favorite content and services from anywhere in the world.",
      icon: "/vpn/bypass-censorship-icon.png",
    },
  ];

  return (
    <div className="relative flex w-full   flex-col items-center justify-center overflow-hidden py-10 bg-[#0D001A] isolate">
      
      <div 
        className=" w-500 h-450 
          absolute pointer-events-none
          transition-all duration-700 ease-in-out
          md:top-0
        bg-[radial-gradient(circle,#59159C_0%,#340460_20%,#59159C_30%,#340460_40%,#16052A_70%,#190230_100%)]
                  "
      ></div>

      <div className="relative z-10 px-5 text-center mb-10 md:mb-16 max-w-2xl ">
        <h1 className="text-3xl md:text-[40px] text-white font-semibold leading-tight tracking-tight mb-4 md:mb-5 drop-shadow-xl">
          Why Choose Our VPN?
        </h1>

        <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed drop-shadow-md">
          We offer uncompromising security and privacy while ensuring the fastest
          speeds and most reliable connections.
        </p>
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6 flex flex-wrap justify-center gap-6 md:gap-10">
        {data.map((item, index) => (
          <div
          key={index}
          className="
            relative flex flex-col items-center 
            rounded-3xl p-8 md:p-10
            text-center 
            
            bg-linear-to-br from-[#1a0f2e]/60 to-[#0f0820]/60 
            backdrop-blur-xl
            border border-purple-500/30
            
            transition-all duration-300
            hover:scale-[1.02] 
            hover:border-purple-500/50
            
            w-full 
            md:w-[calc(50%-1.25rem)] 
            lg:w-[calc(33.33%-1.67rem)]
          "
        >
          <div className="mb-6 relative">
              <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full"></div>
              <Image
              src={item.icon}
              alt={item.title}
              height={80}
              width={80}
              className="object-contain relative z-10"
            />
          </div>

          <h2 className="text-xl md:text-[26px] text-white font-medium leading-tight tracking-tight mb-4">
            {item.title}
          </h2>
          <p className="text-gray-400 text-sm font-light leading-relaxed">
            {item.description}
          </p>
        </div>
        ))}
      </div>
    </div>
  );
}
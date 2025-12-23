import Image from "next/image";

export default function Features() {
  const features = [
    {
      title: "Seamless Streaming",
      description:
        "Enjoy your favorite movies and shows without annoying buffering or geo-restrictions, no matter where you are in the world.",
      image: "/vpn/seamless-streaming.png",
    },
    {
      title: "Unlimited Bandwidth",
      description:
        "Browse, stream, and download as much as you want with no data caps, speed limits, or restrictions holding you back.",
      image: "/vpn/unlimited-bandwidth.png",
    },
    {
      title: "Kill Switch Protection",
      description:
        "Stay protected 24/7 with automatic connection monitoring that blocks all internet traffic if your VPN ever drops unexpectedly.",
      image: "/vpn/killswitch-protection.png",
    },
  ];

  return (
    <div className="w-full px-6 lg:px-30 mt-20 mb-20 flex flex-col gap-24 md:gap-32 lg:gap-48">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`flex flex-col ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
          } items-center gap-10 md:gap-20`}
        >
          <div className="relative flex-1 flex flex-col items-center justify-center w-full">
            <Image
              src={feature.image}
              alt={feature.title}
              width={800}
              height={600}
              className="relative z-20 w-full h-auto object-contain"
            />

            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                         w-[80%] h-[80%] max-w-[500px] max-h-[500px] rounded-full z-10 
                         bg-[radial-gradient(circle_at_center,#8F33FF_0%,#5F1DA4_40%,#2C0644_70%,transparent_100%)] 
                         blur-[60px] md:blur-[80px] opacity-60"
            ></div>
          </div>

          <div className="flex-1 text-center md:text-left py-4 md:py-16">
            <h1 className="text-3xl md:text-[40px] font-normal leading-tight tracking-tight mb-5 text-white">
              {feature.title}
            </h1>

            <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
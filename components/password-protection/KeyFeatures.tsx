import Image from "next/image";

export default function KeyFeatures() {
  const keyFeatures = [
    {
      title: "One-Click Login",
      description: "Log in to your favorite sites instantly, no typing required.",
    },
    {
      title: "Security Dashboard",
      description:
        "See your overall password health and security score at a glance.",
    },
    {
      title: "Dark Web Monitoring",
      description: "Get alerts if your passwords are found in data breaches.",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center w-full  mx-auto pt-10 px-5 md:px-16 lg:px-36">
      
      <div className="w-full lg:w-1/2 md:px-12 lg:pr-10">
        <div>
          <h1 className="text-3xl md:text-[40px] font-normal leading-tight tracking-tight mb-5 text-gray-900 dark:text-white">
            Key Features
          </h1>

          <div className="text-gray-500 dark:text-gray-400 text-sm lg:text-base font-light leading-relaxed">
            <p className="mb-8">
              Your passwords, perfected. Simple tools that work together to keep
              your accounts safe and your mind at ease.
            </p>

            <ul className="flex lg:block overflow-x-auto text-sm lg:text-base lg:overflow-visible snap-x snap-mandatory gap-4 pb-6 lg:pb-0 scrollbar-hide no-scrollbar">
              {keyFeatures.map((keyFeature, index) => (
                <li
                  key={index}
                  className="
                    /* Mobile: Card Style for Carousel */
                    min-w-[85%] md:min-w-[45%] lg:min-w-0 
                    snap-center lg:snap-align-none 
                    flex flex-col lg:flex-row items-start 
                    p-5 lg:p-0 
                    border lg:border-none rounded-xl lg:rounded-none border-gray-200 dark:border-gray-800 lg:my-5
                  "
                >
                  <span className="bg-[#945FFF] min-w-[8px] h-[8px] rounded-full lg:mr-3 mt-[6px] mb-3 lg:mb-0" />

                  <div className="text-sm leading-relaxed">
                    <span className="font-bold text-gray-900 dark:text-gray-200 block lg:inline mb-1 lg:mb-0">
                      {keyFeature.title}:{" "}
                    </span>
                    {keyFeature.description}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    
    
    
    
   <div className="w-full flex items-center justify-center bg-transparent p-8">
      
      <div className="relative w-full p-20 rounded-[50px] overflow flex items-center justify-center">

        <div 
          className="absolute inset-0 opacity-70" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(139, 92, 246, 0.1) 1px, transparent 1px), 
              linear-gradient(to bottom, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
          }} 
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#%)] pointer-events-none" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3A0E63_0%,transparent_50%)] pointer-events-none mix-blend-screen" />

        <div className="relative z-10 text-white ">
           <Image src="/password-protection/key-features.png" alt="" height={300} width={300} className=" md:w-[400px] md:h-[400px]" />
        </div>

      </div>
    </div>
     
    </div>
  );
}
import Image from "next/image";

export default function OneAccount() {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24 lg:py-48">
      <div className="mx-auto px-6 lg:px-32">
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:gap-0">
          
          {/* Text Content */}
          <div className="relative z-10 w-full text-center lg:w-5/12 lg:text-left">
            <h2 className="mb-3 text-xl font-medium tracking-tight text-gray-400 sm:text-2xl lg:mb-5 lg:text-[30px] lg:leading-tight">
              Multi-platform Support
            </h2>

            <h1 className="mb-6 text-4xl font-normal leading-tight tracking-tight text-white sm:text-5xl lg:mb-8 lg:text-[64px]">
              One Account, <br className="hidden lg:block" />
              All Devices
            </h1>

            <p className="mx-auto max-w-lg text-base font-light leading-relaxed text-gray-400 sm:text-lg lg:mx-0 lg:max-w-md">
              A single Inxtinct account protects your entire digital life.{" "}
              <span className="inline lg:block">
                Secure up to 10 devices at once with a powerful, synchronized network
              </span>{" "}
              that works seamlessly across all your devices.
            </p>
          </div>

          {/* Icon Visualization */}
          <div className="flex w-full flex-col items-center gap-6 lg:w-7/12 lg:items-end lg:gap-8 xl:pr-16">
            
            {/* Top Row - Shifts Left on Desktop */}
            <div className="flex items-center gap-4 sm:gap-6 lg:-translate-x-12 lg:gap-8 xl:-translate-x-24">
              <IconCircle src="/vpn/microsoft-icon.png" alt="Microsoft" />
              <IconCircle src="/vpn/android-icon.png" alt="Android" />
              <IconCircle src="/vpn/apple-icon.png" alt="Apple" />
            </div>

            {/* Bottom Row - Shifts Right on Desktop */}
            <div className="flex items-center gap-4 sm:gap-6 lg:translate-x-4 lg:gap-8 xl:translate-x-8">
              <IconCircle src="/vpn/chrome-icon.png" alt="Chrome" />
              <IconCircle src="/vpn/linux-icon.png" alt="Linux" />
              <IconCircle src="/vpn/firefox-icon.png" alt="Firefox" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

// Reusable Helper Component
// Added 'group' for potential hover effects and refined sizing
function IconCircle({ src, alt }: { src: string, alt: string }) {
  return (
    <div className="
      group relative flex shrink-0 items-center justify-center rounded-full
      bg-[radial-gradient(circle_at_center,#2C0644,#5F1DA4,#8F33FF)] shadow-lg shadow-purple-900/20
      
      /* Responsive Sizing: Mobile -> Tablet -> Desktop */
      h-20 w-20 
      sm:h-24 sm:w-24 
      md:h-28 md:w-28
      lg:h-[130px] lg:w-[130px] 
      2xl:h-[180px] 2xl:w-[180px]
      
      transition-transform duration-500 hover:scale-105
    ">
      <div className="relative h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20">
        <Image 
          src={src} 
          fill 
          alt={alt} 
          className="object-contain drop-shadow-md"
          sizes="(max-width: 768px) 40px, (max-width: 1200px) 64px, 80px"
        />
      </div>
    </div>
  );
}
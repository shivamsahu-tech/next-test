import Image from "next/image";

export default function HowItWorks() {
  return (
    <section className="w-full text-white overflow-hidden relative px-5 md:px-16 lg:px-36">
      <div className=" mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-12 lg:gap-30">
        <div className="w-full lg:w-1/2 flex flex-col justify-center order-1 lg:order-2 lg:-translate-y-14 ">
          <h2 className="text-[32px] lg:text-[40px] font-normal leading-tight tracking-tight mb-6">
            How It Works
          </h2>
          <p className="text-gray-400 text-sm lg:text-base font-light leading-relaxed mb-6">
            Inxtinct One creates, stores, and automatically fills strong passwords for all your accounts. We generate uncrackable passwords, keep them secure in an encrypted vault, and alert you if they're ever compromised.
          </p>
        </div>
        <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
          
          <div className="grid grid-cols-20 gap-4 lg:gap-4 w-full relative z-10">
            
            <div className="bg-[#7628D4] rounded-2xl col-span-9 p-5 lg:p-8 flex flex-col items-center text-center justify-center min-h-[160px] lg:min-h-[220px]">
              <div className="mb-1">
                 <Image src="/password-protection/download-icon.png" alt="Download" height={50} width={50} className="w-10 h-10 lg:w-12 lg:h-12" />
              </div>
              <h3 className="text-lg lg:text-2xl font-medium mb-2">Download</h3>
              <p className="text-xs lg:text-sm text-white/80 font-light">
                Install our extension to get started.
              </p>
            </div>

            <div className="bg-[#490998] rounded-2xl col-span-11 md:col-span-10  p-5 lg:p-8 flex flex-col items-center text-center justify-center min-h-[160px] lg:min-h-[220px]">
              <div className="mb-1">
                 <Image src="/password-protection/scanner-icon.png" alt="Scan" height={50} width={50} className="w-10 h-10 lg:w-12 lg:h-12" />
              </div>
              <h3 className="text-lg lg:text-2xl font-medium mb-2">Scan</h3>
              <p className="text-xs lg:text-sm text-white/80 font-light">
                We'll check your existing passwords for weaknesses.
              </p>
            </div>

            
            <div className="bg-[#380973] rounded-2xl col-span-10 p-5 lg:p-8 flex flex-col items-center text-center justify-center min-h-[160px] lg:min-h-[220px]">
              <div className="mb-1">
                 <Image src="/password-protection/emoji-icon.png" alt="Relax" height={50} width={50} className="w-10 h-10 lg:w-12 lg:h-12" />
              </div>
              <h3 className="text-lg lg:text-2xl font-medium mb-2">Relax</h3>
              <p className="text-xs lg:text-sm text-white/80 font-light ">
                We'll auto-fill your passwords securely across all sites.
              </p>
            </div>

            <div className="bg-[#23034A] rounded-2xl col-span-10 p-5 lg:p-8 flex flex-col items-center text-center justify-center min-h-[160px] lg:min-h-[220px]">
              <div className="mb-1">
                 <Image src="/password-protection/security-icon.png" alt="Protect" height={50} width={50} className="w-10 h-10 lg:w-12 lg:h-12" />
              </div>
              <h3 className="text-lg lg:text-2xl font-medium mb-2">Protect</h3>
              <p className="text-xs lg:text-sm text-white/80 font-light">
                We generate and store strong, unique passwords for you.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
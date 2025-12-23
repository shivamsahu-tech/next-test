import Image from "next/image";

export default function WhyUs() {
    return (
        <div className="flex flex-col-reverse lg:flex-row w-full mt-20 px-6 md:px-16 lg:px-36 lg:pt-0">
            <div className="w-full  lg:w-[700px] lg:h-[700px] relative">
                <Image 
                    src="/password-protection/why-us.png" 
                    alt="Why Us" 
                    width={700} 
                    height={700} 
                    className="w-full object-cover" 
                />
            </div>

            <div className="w-full lg:w-1/2 py-12 md:px-12 lg:px-24 flex flex-col justify-center">
                <div className="max-w-xl mx-auto lg:mx-0">
                    
                    <h1 className="text-3xl md:text-[40px] font-normal leading-tight tracking-tight mb-5 text-white">
                        Why choose Us?
                    </h1>

                    <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
                        We protect your logins without the hassle. Our technology creates strong passwords, blocks phishing sites, and keeps everything in sync across your devices. Get back to browsing while we handle the security.
                    </p>

                </div>
            </div>
        </div>
    )
}
'use client'
import Image from "next/image";

export default function WhyMatters() {

    const benefits = [
        {
            title: "Easy Access",
            description: "We generate strong passwords and auto-fill them across all your devices.",
            image: "/password-protection/easy-access.png"
        },
        {
            title: "Breach Alerts",
            description: "Get immediate warnings if your accounts ever appear in a leak.",
            image: "/password-protection/breach-alerts.png"
        },
        {
            title: "Quick Security",
            description: "Update weak or compromised passwords instantly across all platforms.",
            image: "/password-protection/quick-security.png"
        }
    ];

    return (
        <div className="w-full">
            <div className="mx-auto py-20 flex flex-col gap-12 px-5 md:px-16 lg:mt-16 lg:px-36">
            
                <div className="w-full flex flex-col gap-4 items-center mb-4 md:mb-12">
                    <h1 className="text-3xl md:text-[40px] font-semibold leading-tight text-center">
                        Why Security Training Matters
                    </h1>
                    <p className="text-gray-400 text-sm lg:text-base font-light leading-relaxed text-center max-w-2xl">
                        Your team encounters real risks every day. We help them recognise threats early and build everyday habits that strengthen overall security.
                    </p>
                </div>

                <div className="relative bg-linear-to-br flex-1 from-[#1a0f2e]/60 to-[#0f0820]/60 
                              backdrop-blur-xl
                              border border-purple-500/30
                              rounded-3xl p-8 md:p-10
                              shadow-[0_0_60px_rgba(147,51,234,0.15)]">


                    {benefits.map((benefit, index) => (
                        <div 
                            key={index} 
                            className="relative rounded-2xl overflow-hidden shrink-0 w-[80vw] md:w-auto md:min-w-0 snap-center group"
                        >
                           

                            <div className="bg-[linear-gradient(0deg,#460682_0%,#2F054B_100%)] lg:px-8 md:pt-10 md:pb-6 md:px-6 h-full">
                                <h1 className="text-2xl md:text-3xl mb-4 font-medium">
                                    {benefit.title}
                                </h1>
                                <p className="text-sm text-gray-200 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
}
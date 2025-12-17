import Image from "next/image";

export default function DarkWeb() {
    return (
        <div className="relative w-full flex flex-col items-center justify-center px-6 md:px-16 lg:px-24 py-20 overflow-hidden">

            <div className="max-w-7xl w-full flex flex-col items-center space-y-12">

                <h2 className="text-[40px]">
                    Dark Web Monitoring
                </h2>

                <div className="relative w-full">

                    <Image  src="/data-protection/circle-shadow-1.png"
                        alt=""
                        width={400}
                        height={400}
                        className="absolute -top-24 -left-24"
                        />

                    <Image  src="/data-protection/circle-shadow-2.png"
                        alt=""
                        width={400}
                        height={400}
                        className="absolute -bottom-24 -right-24"
                    />
                    
                    

                    <Image  src="/data-protection/dark-web-monitoring.png"
                        alt="Dark Web Monitoring Dashboard - Data breaches and leaked information tracking"
                        className="relative z-10 w-full h-full object-contain p-6 md:p-8"
                        width={1200}
                        height={600}
                        />
                </div>
            </div>
        </div>
    )
}
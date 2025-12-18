import Image from "next/image";

export default function Benefits() {

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
    ]


    return (
        <div>
            <div className="flex flex-col gap-12 mt-20" >
            
                            <div className="w-full flex flex-col gap-2 items-center mb-12"  >
            
                                <h1 className="text-[40px] font-semibold leading-tight">Benefits</h1>
            
                                <p className="text-gray-400 text-sm font-light leading-relaxed text-center ">Inxtinct One goes beyond basic password management to provide complete peace of mind for your digital life.</p>
            
                            </div>
            
            
                            <div className="relative grid grid-cols-3 gap-8">

                                {
                                    benefits.map((benefit, index) => (
                                        <div key={index} className="rounded-xl overflow-hidden" >
                                            <Image src={benefit.image} alt="benefits" width={100} height={100} className="w-full " />
                                            <div className="bg-[linear-gradient(0deg,#460682_0%,#2F054B_100%)] pt-10 pb-16 px-16 " >
                                                <h1 className="text-3xl mb-4" >{benefit.title}</h1>
                                                <p className="text-sm" >{benefit.description}</p>
                                            </div>
                                        </div>
                                    ))
                                }
            
                            </div>
                        </div>
        </div>
    )
}
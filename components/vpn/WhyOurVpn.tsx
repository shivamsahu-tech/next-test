import Image from "next/image"

export default function WhyOurVpn() {

    const data = [
        {
          title: "Industry Leading Security",
          description: "Bank-level encryption that protects your data on any network.",
          icon: '/vpn/leading-security-icon.png'
        },
        {
          title: "Complete Privacy Protection",
          description: "A strict no-logs policy means your online activity remains yours alone.",
          icon: '/vpn/complete-privacy-icon.png'
        },
        {
          title: "Bypass Censorship",
          description: "Access your favorite content and services from anywhere in the world.",
          icon: '/vpn/bypass-censorship-icon.png'
        }
    ]

    return (
        <div className="relative flex w-screen flex-col py-24 items-center overflow-hidden" >

           <div className="absolute top-[150%] border-2 border-red-500 left-1/2 -translate-x-1/2 -translate-y-1/2 
                                        w-[80vw] h-[80vw] rounded-full ">
            </div>

            <div className="p-5 text-center mb-12">
                
                    <h1 className="text-[40px] font-normal leading-tight tracking-tight mb-5">
                    Why Choose Our VPN?
                    </h1>

                    <p className="text-gray-400 text-sm font-light leading-relaxed ">
                        We offer uncompromising security and privacy while ensuring the fastest speeds and most reliable connections.
                    </p>

            </div>

            <div className="w-[80%] grid grid-rows-1 grid-cols-3 gap-10" >

                    {
                        data.map((item, index) => (
                            <div key={index} className="flex flex-col items-center p-14 rounded-xl text-center" >
                                <Image src={item.icon} alt="Icon" height={80} width={80} />
                                <h1 className="text-[30px] font-normal leading-tight tracking-tight mb-5">{item.title}</h1>
                                <p className="text-gray-400 text-sm font-light leading-relaxed ">{item.description}</p>
                            </div>
                        ))
                    }

            </div>
        </div>
    )
}
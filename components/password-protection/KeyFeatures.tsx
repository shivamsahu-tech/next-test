import Image from "next/image"

export default function KeyFeatures() {

    const keyFeatures = [
        {
            title: "One-Click Login",
            description: "Log in to your favorite sites instantly, no typing required.",
        },
        {
            title: "Security Dashboard",
            description: "See your overall password health and security score at a glance.",
        },
        {
            title: "Dark Web Monitoring",
            description: "Get alerts if your passwords are found in data breaches.",
        }
    ]


    return (
        <div className="flex pt-10" >
            <div className=" px-48 py-56" >
                <div className="">
                
                    <h1 className="text-[40px] font-normal leading-tight tracking-tight mb-5">
                    Key Features
                    </h1>

                    <div className="text-gray-400 text-sm font-light leading-relaxed ">
                    Your passwords, perfected. Simple tools that work together to keep your accounts safe and your mind at ease.   
                        <ul>
                        {keyFeatures.map((keyFeature, index) => (
                            <li key={index} className="flex items-start my-5"> 
                            <span className="bg-[#945FFF] min-w-[8px] h-[8px] rounded-full mr-3 mt-[6px]" />  
                            
                            <div className="text-sm leading-relaxed">
                                <span className="font-bold">{keyFeature.title}:</span> {keyFeature.description}
                            </div>
                            </li>
                        ))}
                        </ul>
                    </div>

                </div>
            </div>

            <Image src="/password-protection/key-features.png" alt="Key Features" width={700} height={700} className="w-[50%]" />
        </div>
    )
}
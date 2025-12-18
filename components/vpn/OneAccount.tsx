import Image from "next/image"

export default function OneAccount() {
    return (
        <div className="w-[80%] flex items-center justify-between mx-auto my-48" >
            <div className="p-5 px-10 ">

                    <h1 className="text-gray-400 text-[30px] font-normal leading-tight tracking-tight mb-5">
                        Multi-platform Support
                    </h1>
                
                    <h1 className="text-[48px] font-normal leading-tight tracking-tight mb-5">
                        One Account, All Devices
                    </h1>

                    <p className="text-gray-400 text-sm font-light leading-relaxed ">
                        A single Inxtinct account protects your entire digital life. <br /> Secure up to 10 devices at once with powerful, synchronized <br /> network that works seamlessly across all your devices
                    </p>

            </div>

            <div className="p-5 flex flex-col gap-5" > 
                <div className="flex items-center gap-10 justify-between -translate-x-20">
                        <div className=" w-[150px] h-[150px] flex justify-center items-center rounded-full bg-[radial-gradient(circle_at_center,#2C0644,#5F1DA4,#8F33FF)]" >
                            <Image src="/vpn/microsoft-icon.png" width={80} height={80} alt="" />
                        </div>
                         <div className=" w-[150px] h-[150px] flex justify-center items-center rounded-full bg-[radial-gradient(circle_at_center,#2C0644,#5F1DA4,#8F33FF)]" >
                            <Image src="/vpn/android-icon.png" width={80} height={80} alt="" />
                        </div>
                         <div className=" w-[150px] h-[150px] flex justify-center items-center rounded-full bg-[radial-gradient(circle_at_center,#2C0644,#5F1DA4,#8F33FF)]" >
                            <Image src="/vpn/apple-icon.png" width={80} height={80} alt="" />
                        </div>
                </div>
                 <div className="flex items-center gap-10 justify-between +translate-x-20">
                        <div className=" w-[150px] h-[150px] flex justify-center items-center rounded-full bg-[radial-gradient(circle_at_center,#2C0644,#5F1DA4,#8F33FF)]" >
                            <Image src="/vpn/chrome-icon.png" width={80} height={80} alt="" />
                        </div>
                         <div className=" w-[150px] h-[150px] flex justify-center items-center rounded-full bg-[radial-gradient(circle_at_center,#2C0644,#5F1DA4,#8F33FF)]" >
                            <Image src="/vpn/linux-icon.png" width={80} height={80} alt="" />
                        </div>
                         <div className=" w-[150px] h-[150px] flex justify-center items-center rounded-full bg-[radial-gradient(circle_at_center,#2C0644,#5F1DA4,#8F33FF)]" >
                            <Image src="/vpn/firefox-icon.png" width={80} height={80} alt="" />
                        </div>
                </div>
            </div>

        </div>
    )
}
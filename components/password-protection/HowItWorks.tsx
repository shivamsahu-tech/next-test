import Image from "next/image"

export default function HowItWorks() {
    return (
        <div className="flex" >
            <div className="w-[40%] grid grid-cols-20 grid-rows-10 -mt-20 gap-3" >
                <div className=" flex flex-col items-center row-span-5 col-span-9 p-7 bg-[#7628D4] rounded-xl" >
                    <Image src="/password-protection/download-icon.png" alt="Download" height={50} width={50} />
                    <h1>Download</h1>
                    <p className=" text-center" >Install our extension to get started.</p>
                </div>
                <div className=" flex flex-col items-center row-span-5 col-span-10 gap-2 p-7 bg-[#490998] rounded-xl" >
                    <Image src="/password-protection/scanner-icon.png" alt="Download" height={50} width={50} />
                    <h1>Scan</h1>
                    <p className=" text-center" >We'll check your existing passwords for weaknesses.</p>
                </div>
                <div className=" flex flex-col items-center row-span-5 col-span-10 gap-2 p-7 bg-[#380973] rounded-xl" >
                    <Image src="/password-protection/emoji-icon.png" alt="Download" height={50} width={50} />
                    <h1>Relax</h1>
                    <p className=" text-center" >We'll auto-fill your passwords securely across all sites.</p>
                </div>
                <div className=" flex flex-col items-center row-span-5 col-span-10 gap-2 p-7 bg-[#23034A] rounded-xl" >
                    <Image src="/password-protection/security-icon.png" alt="Download" height={50} width={50} />
                    <h1>Protect</h1>
                    <p className=" text-center" >We generate and store strong, unique passwords for you.</p>
                </div>
            </div>

            <div className="w-[60%] px-36  -mt-5" >
                <div className="justify-start">
                
                    <h1 className="text-[40px] font-normal leading-tight tracking-tight mb-5">
                    How It Works
                    </h1>

                    <p className="text-gray-400 text-sm font-light leading-relaxed ">
                    Inxtinct One creates, stores, and automatically fills strong passwords for all your accounts. We generate uncrackable passwords, keep them secure in an encrypted vault, and alert you if they're ever compromised.
                    </p>

                </div>
            </div>
        </div>
    )
}
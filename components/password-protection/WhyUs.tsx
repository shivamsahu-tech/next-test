import Image from "next/image";

export default function WhyUs() {
    return (
        <div className="flex pt-16" >
            <Image src="/password-protection/why-us.png" alt="Why Us" width={700} height={700} className="w-[50%]" />

            <div className=" px-48 py-56" >
                <div className="">
                
                    <h1 className="text-[40px] font-normal leading-tight tracking-tight mb-5">
                    Why choose Us?
                    </h1>

                    <p className="text-gray-400 text-sm font-light leading-relaxed ">
                    We protect your logins without the hassle. Our technology creates strong passwords, blocks phishing sites, and keeps everything in sync across your devices. Get back to browsing while we handle the security.
                    </p>

                </div>
            </div>
        </div>
    )
}
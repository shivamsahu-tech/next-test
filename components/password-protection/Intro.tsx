import Image from "next/image";

export default function Intro() {
    return (
        <div className="bg-linear-to-t from-[#360670] via-[#0D0A11] to-[#0D0A11] h-[80vh] w-full flex px-36">
            
            <div className="flex flex-col gap-12 mt-56 w-[40%] ">
                
                <h1 className="text-[40px] font-normal leading-tight tracking-tight">
                Password Protection
                </h1>

                <p className="text-gray-400 text-sm font-light leading-relaxed ">
                Your passwords are the keys to your digital life. We help you create, store, and manage strong, <br />  unique passwords for every account - so you never have to worry about hackers guessing or <br /> stealing them again.
                </p>

            </div>

            <div className="w-[60%] flex justify-center items-center" >
                <Image src="/password-protection/lock.png" alt="lock" width={700} height={700} />
            </div>
            
        </div>

    )
}
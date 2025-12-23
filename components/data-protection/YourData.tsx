import Image from "next/image";

export default function YourData() {
    return (
        <div className=" flex  mx-30 justify-between">

            <div className=" text-white p-12 w-[42%]">
                <div className="flex flex-col gap-12 mt-30">

                    <h1 className="text-[40px] font-normal leading-tight tracking-tight">
                        Your Data,<br />
                        Under Your Control
                    </h1>

                    <p className="text-gray-400 text-xl font-light leading-relaxed ">
                        In a world of data breaches and trackers, true privacy is rare.
                        Inxtinct One puts you back in charge with continuous dark web
                        monitoring and automatic account protection, actively finding
                        and securing your personal information before it's misused.
                    </p>

                </div>
            </div>

            <div className="w-[42%]" >
                <Image src="/data-protection/data-privacy.png" alt="Your Data" height={500} width={500} className="w-full" />
            </div>

        </div>
    )
}
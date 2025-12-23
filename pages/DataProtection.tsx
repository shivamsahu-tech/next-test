import ConnectUs from "@/components/data-protection/ConnectUs";
import DarkWeb from "@/components/data-protection/DarkWeb";
import DataLeak from "@/components/data-protection/DataLeak";
import Guard from "@/components/data-protection/Guard";
import Intro from "@/components/data-protection/Intro";
import YourData from "@/components/data-protection/YourData";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function DataSecurity() {
    return (
        <div className=" bg-[#0b0318] w-screen " >
            <Header />
            <Intro />

            <YourData />

            <DarkWeb />

            <Guard />

            <div className="w-full flex items-center justify-center py-50">
                <div className="w-[60%]">
                    <Image src="/data-protection/all-rounded.png" alt="all-rounded" height={500} width={500} className="w-full" />
                </div>
            </div>

            <DataLeak />

            <ConnectUs />

            <Footer />


        </div>
    )
}
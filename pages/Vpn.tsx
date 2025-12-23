import Intro from "@/components/vpn/Intro";
import WhyOurVpn from "@/components/vpn/WhyOurVpn";
import OneAccount from "@/components/vpn/OneAccount";
import Features from "@/components/vpn/Features";
import Availability from "@/components/vpn/Availability";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Vpn() {
    return (
        <div className="bg-[#0B0418] bor" >
            {/* <Header/> */}
            <div className="overflow-hidden">
                <Intro />
            </div>
            <WhyOurVpn />
            <OneAccount />
            <Features />
            <Availability />
            {/* <Footer/> */}
        </div>
    )
}
import Intro from "@/components/vpn/Intro";
import WhyOurVpn from "@/components/vpn/WhyOurVpn";
import OneAccount from "@/components/vpn/OneAccount";
import Features from "@/components/vpn/Features";
import Availability from "@/components/vpn/Availability";
import Footer from "@/components/Footer";

export default function Vpn() {
    return (
        <div className="bg-[#0B0418]" >
            <Intro />
            <WhyOurVpn />
            <OneAccount />
            <Features />
            <Availability />
            <Footer/>
        </div>
    )
}
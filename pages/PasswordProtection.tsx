import Header from "@/components/Header";
import Intro from "@/components/password-protection/Intro";
import HowItWorks from "@/components/password-protection/HowItWorks";
import Benefits from "@/components/password-protection/Benefits";
import WhyUs from "@/components/password-protection/WhyUs";
import KeyFeatures from "@/components/password-protection/KeyFeatures";
import TrustedUsers from "@/components/password-protection/TrustedUsers";
import Footer from "@/components/Footer";

export default function PasswordProtectionPage() {
    return (
        <div className=" bg-[#0D0A11]" >
            
            <Header/>

            <Intro/>
            <div className="w-[85%] mx-auto" >

                <HowItWorks/>

                <Benefits/>

                <WhyUs/>

                <KeyFeatures/>

                <TrustedUsers/>

            </div>

            <Footer/>


        </div>
    )
}
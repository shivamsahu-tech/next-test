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
        <div className="relative min-h-screen">
            
            <div className="fixed inset-0 -z-10 bg-[#0D0A11] md:bg-linear-to-t md:h-[85vh] md:from-[#360670] md:via-[#0D0A11] md:to-[#0D0A11]" />

            <Header/>

            <Intro/>
            
            <HowItWorks/>
            <Benefits/>
            <WhyUs/>
            <KeyFeatures/>
            <TrustedUsers/>

            <Footer/>

        </div>
    )
}
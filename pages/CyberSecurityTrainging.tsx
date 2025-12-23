import AboutProgram from "@/components/cyber-security-training/AboutProgram";
import ConnectUs from "@/components/cyber-security-training/ConnectUs";
import Intro from "@/components/cyber-security-training/Intro";
import OurClients from "@/components/cyber-security-training/OurClients";
import WhyMatters from "@/components/cyber-security-training/WhyMatters";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function CyberSecurityTraining() {
    return (
        <div className="relative min-h-screen">
            
            {/* <div className="fixed inset-0 -z-10 bg-[#0D0A11] md:bg-linear-to-t md:h-[85vh] md:from-[#360670] md:via-[#0D0A11] md:to-[#0D0A11]" /> */}

            <Header/>

            <Intro/>
            
            <WhyMatters/>

            {/* <AboutProgram/> */}

            <OurClients/>

            <ConnectUs/>
            

            <Footer/>

        </div>
    );
}
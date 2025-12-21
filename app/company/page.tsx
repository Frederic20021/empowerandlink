import Maps from "../components/company/maps";
import YoutubeSection from "../components/company/YoutubeSection";
import ContactButton from "../components/ui/contactButton";
import Info from "../components/company/info";
import CEOMessage from "../components/company/CEOMessage";

export default function page() {
    return <>
<<<<<<< HEAD
        <div className="h-24 bg-gray-600"></div>
=======
        <HeroSection heroText={{ title: companyInfo.title }} />
        <YoutubeSection />
>>>>>>> japanese
        <CEOMessage />
        <Info />
        <Maps />
        <ContactButton />
    </>
}
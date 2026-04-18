import Contact from "@/app/components/offshore/Contact";
import Pitch from "@/app/components/offshore/Pitch";
import PricePlan from "../components/offshore/PricePlan";
import AIinterview from "../components/offshore/AIinterview";

export default function page() {
    return <>
        <Pitch />
        <PricePlan />
        <AIinterview />
        <Contact />
    </>;
}
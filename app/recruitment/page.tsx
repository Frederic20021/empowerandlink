import { Noto_Sans_JP } from "next/font/google";
import Hero from "@/app/components/recruitment/Hero";
import Problems from "@/app/components/recruitment/Problems";
import ServicesSection from "@/app/components/recruitment/ServicesSection";
import StatsBar from "@/app/components/recruitment/StatsBar";
import Visas from "@/app/components/recruitment/Visas";
import Process from "@/app/components/recruitment/Process";
import Countries from "@/app/components/recruitment/Countries";
import CTASection from "@/app/components/recruitment/CTASection";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export default function NewPage() {
  return (
    <div className={`${notoSans.className} min-h-screen bg-white text-[#1a2b4a]`}>
      <Hero />
      <Problems />
      <ServicesSection />
      <StatsBar />
      <Visas />
      <Process />
      <Countries />
      <CTASection />
    </div>
  );
}

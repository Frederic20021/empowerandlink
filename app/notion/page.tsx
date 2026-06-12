import Hero from "@/app/components/notion/Hero";
import Problems from "@/app/components/notion/Problems";
import Reasons from "@/app/components/notion/Reasons";
import BasicPlan from "@/app/components/notion/BasicPlan";
import PricingFactors from "@/app/components/notion/PricingFactors";
import IndustryExamples from "@/app/components/notion/IndustryExamples";
import ContractTerms from "@/app/components/notion/ContractTerms";
import Process from "@/app/components/notion/Process";
import FAQ from "@/app/components/notion/FAQ";
import CTAContact from "@/app/components/notion/CTAContact";

export default function NotionPage() {
  return (
    <main
      className="bg-slate-50 min-h-screen overflow-x-hidden"
      style={{
        fontFamily:
          "'Hiragino Kaku Gothic ProN', 'Noto Sans JP', 'Yu Gothic', sans-serif",
        lineHeight: 1.7,
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      <Hero />
      <Problems />
      <Reasons />
      <BasicPlan />
      <PricingFactors />
      <IndustryExamples />
      <ContractTerms />
      <Process />
      <FAQ />
      <CTAContact />
    </main>
  );
}

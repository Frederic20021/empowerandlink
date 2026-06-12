import Hero from "@/app/components/ict/Hero";
import FlowBar from "@/app/components/ict/FlowBar";
import NotionSection from "@/app/components/ict/NotionSection";
import AIInterviewSection from "@/app/components/ict/AIInterviewSection";
import OffshoreSection from "@/app/components/ict/OffshoreSection";
import CTASection from "@/app/components/ict/CTASection";

export default function ICTPage() {
  return (
    <>
      <Hero />
      <FlowBar />
      <NotionSection />
      <AIInterviewSection />
      <OffshoreSection />
      <CTASection />
    </>
  );
}

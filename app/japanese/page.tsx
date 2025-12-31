import { Noto_Sans_JP } from "next/font/google";

import Hero from "@/app/components/japanese/Hero";
import Challenges from "@/app/components/japanese/Challenges";
import Recommended from "@/app/components/japanese/Recommended";
import Professors from "@/app/components/japanese/Professors";
import ServiceListing from "@/app/components/japanese/ServiceListing";
import CTA from "@/app/components/japanese/CTA";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export default function JapanesePage() {
  return (
    <div className={`${notoSans.className} min-h-screen bg-white text-gray-900`}>
      <Hero />
      <Challenges />
      <Recommended />
      <Professors />
      <ServiceListing />
      <CTA />
    </div>
  );
}
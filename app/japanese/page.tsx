import Pitch from "@/app/components/japanese/Pitch";
import Course from "@/app/components/japanese/Course";
import Consult from "../components/japanese/Consult";
import Message from "../components/japanese/Message";
import ProfIntro from "@/app/components/japanese/ProfIntro";
import Point from "../components/japanese/Point";
import ServiceListing from "../components/japanese/ServiceListing";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#e5eaff]">
        <Pitch />
        <Course />
        <ProfIntro />
        <Point />
        <ServiceListing />
        <Message />
        <Consult />
    </div>
  );
}
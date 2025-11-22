import Pitch from "@/app/components/japanese/Pitch";
import Course from "@/app/components/japanese/Course";
import Consult from "../components/japanese/Consult";
import Message from "../components/japanese/Message";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#e5eaff]">
        <Pitch />
        <Course />
        <Message />
        <Consult />
    </div>
  );
}
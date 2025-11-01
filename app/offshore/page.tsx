
import ContactButton from "../components/ui/contactButton";

export default function page() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            {/* Contact button with pre-filled subject */}
            <ContactButton pageName="オフショア(ICT)開発について" />
        </div>
    );
}
'use client';

import HeroSection from "../components/sections/hero";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import ContactForm from "../components/ui/ContactForm";

function ContactContent() {
    const searchParams = useSearchParams();
    const from = searchParams.get('from') || '';
    
    return <>
        <HeroSection heroText={{ title: 'お問い合わせ' }} />
        <ContactForm defaultSubject={from} />
    </>
}

export default function Page() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ContactContent />
        </Suspense>
    );
}   
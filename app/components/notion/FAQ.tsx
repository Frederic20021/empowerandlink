'use client';

import { useLanguage } from '@/lib/i18n';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <details className="group text-black max-w-[600px] bg-white border border-black/[0.08] rounded-2xl overflow-hidden">
      <summary className="px-6 py-5 text-[15px] font-semibold cursor-pointer flex justify-between items-start gap-4 select-none list-none [&::-webkit-details-marker]:hidden group-open:text-blue-600 group-open:border-b group-open:border-black/[0.08]">
        {question}
        <span className="text-xl font-light text-slate-400 shrink-0 leading-none group-open:hidden">
          +
        </span>
        <span className="hidden text-xl font-light text-blue-600 shrink-0 leading-none group-open:inline">
          −
        </span>
      </summary>
      <div className="px-6 py-5 text-sm text-slate-600 leading-[1.8]">
        {answer}
      </div>
    </details>
  );
}

export default function FAQ() {
  const { t } = useLanguage();

  const faqs: FAQItemProps[] = t.notion.faq.items.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

  return (
    <section className="py-10 bg-slate-50" id="faq">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="text-center mb-6">
          <span className="inline-block text-[11px] font-bold tracking-[0.12em] uppercase text-blue-600 bg-blue-600/[0.08] border border-blue-600/25 px-3 py-1 rounded-full mb-4">
            {t.notion.faq.sectionLabel}
          </span>
          <h2
            className="font-extrabold leading-tight text-slate-900 mb-4"
            style={{ fontSize: 'clamp(22px, 3.5vw, 34px)' }}
          >
            {t.notion.faq.title}
          </h2>
          <div className="w-12 h-[3px] bg-blue-600 rounded mx-auto" />
        </div>

        <div className="flex flex-col gap-3 md:px-40 sm:px-20 px-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

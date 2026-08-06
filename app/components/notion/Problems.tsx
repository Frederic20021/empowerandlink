'use client';

import { useLanguage } from '@/lib/i18n';

const gradients = [
  'linear-gradient(135deg, #3b82f6, #1d4ed8)',
  'linear-gradient(135deg, #06b6d4, #0284c7)',
  'linear-gradient(135deg, #10b981, #059669)',
];

export default function Problems() {
  const { t } = useLanguage();

  return (
    <section className="bg-slate-50" id="problems">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="text-center mb-10">
          <span className="inline-block text-[11px] font-bold tracking-[0.12em] uppercase text-blue-600 bg-blue-600/[0.08] border border-blue-600/25 px-3 py-1 rounded-full mb-4">
            {t.notion.problems.sectionLabel}
          </span>
          <h2
            className="font-extrabold leading-tight text-slate-900 mb-3"
            style={{ fontSize: 'clamp(22px, 3.5vw, 34px)' }}
          >
            {t.notion.problems.title}
          </h2>
          <p className="text-slate-600 text-[15px] max-w-[600px] mx-auto">
            {t.notion.problems.subtitle}
          </p>
          <div className="w-12 h-[3px] bg-blue-600 rounded mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.notion.problems.items.map((item, i) => (
            <div
              key={item.title}
              className="rounded-2xl py-8 px-4 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)]"
              style={{
                border: '1px solid rgba(0,0,0,0.08)',
                borderTop: '3px solid #06b6d4',
              }}
            >
              <div
                className="w-[90px] h-[90px] rounded-[18px] flex items-center justify-center text-[30px] mx-auto mb-5"
                style={{ background: gradients[i] || gradients[0] }}
              >
                {item.icon}
              </div>
              <div className="text-base font-bold mb-2.5 leading-snug text-slate-900 whitespace-pre-line">
                {item.title}
              </div>
              <p className="text-sm text-slate-600 leading-[1.8]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

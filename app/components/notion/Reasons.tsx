'use client';

import { useLanguage } from '@/lib/i18n';

export default function Reasons() {
  const { t } = useLanguage();

  return (
    <section className="py-14 bg-blue-50" id="reasons">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="text-center mb-10">
          <span className="inline-block text-[11px] font-bold tracking-[0.12em] uppercase text-blue-600 bg-blue-600/[0.08] border border-blue-600/25 px-3 py-1 rounded-full mb-4">
            {t.notion.reasons.sectionLabel}
          </span>
          <h2
            className="font-extrabold leading-tight text-slate-900 mb-3"
            style={{ fontSize: 'clamp(22px, 3.5vw, 34px)' }}
          >
            {t.notion.reasons.title.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
          </h2>
          <p className="text-slate-600 text-[15px] max-w-[600px] mx-auto">
            {t.notion.reasons.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {t.notion.reasons.items.map((r) => (
            <div
              key={r.num}
              className="bg-white border border-black/[0.08] rounded-2xl p-7 flex gap-5 items-start transition-all duration-200 hover:border-blue-600/25 hover:-translate-y-0.5"
            >
              <div
                className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-[22px] shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                }}
              >
                {r.icon}
              </div>
              <div>
                <div className="text-[11px] font-bold text-blue-600 tracking-[0.08em] mb-1">
                  {r.num}
                </div>
                <div className="text-[15px] font-bold mb-1.5 leading-snug text-slate-900">
                  {r.title}
                </div>
                <p className="text-sm text-slate-600 leading-[1.75]">
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

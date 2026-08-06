'use client';

import { useLanguage } from '@/lib/i18n';

export default function Process() {
  const { t } = useLanguage();

  return (
    <section
      className="py-10"
      id="process"
      style={{
        background:
          'linear-gradient(180deg, transparent 0%, rgba(37,99,235,0.03) 50%, transparent 100%)',
      }}
    >
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="text-center mb-8">
          <span className="inline-block text-[11px] font-bold tracking-[0.12em] uppercase text-blue-600 bg-blue-600/[0.08] border border-blue-600/25 px-3 py-1 rounded-full mb-4">
            {t.notion.process.sectionLabel}
          </span>
          <h2
            className="font-extrabold leading-tight text-slate-900"
            style={{ fontSize: 'clamp(22px, 3.5vw, 34px)' }}
          >
            {t.notion.process.title}
          </h2>
        </div>

        <div className="relative">
          <div
            className="absolute w-0.5 top-10 bottom-10 left-[31px] sm:left-[31px]"
            style={{
              background:
                'linear-gradient(180deg, #2563eb 0%, rgba(0,0,0,0.08) 100%)',
            }}
          />

          {t.notion.process.steps.map((step, i) => (
            <div
              key={step.label}
              className="grid gap-6 items-start py-4"
              style={{ gridTemplateColumns: '64px 1fr' }}
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center text-[20px] shrink-0 relative z-[1] ${
                  i === 0
                    ? 'bg-blue-600/[0.08] border-2 border-blue-600'
                    : 'bg-white border-2 border-blue-600/25'
                }`}
              >
                {step.icon}
              </div>
              <div className="py-3">
                <div className="text-[11px] text-blue-600 font-bold tracking-[0.1em] mb-1">
                  {step.label}
                </div>
                <div className="text-[17px] font-bold text-slate-900 mb-1.5">
                  {step.title}
                </div>
                <p className="text-sm text-slate-600">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useLanguage } from '@/lib/i18n';

export default function ContractTerms() {
  const { t } = useLanguage();

  return (
    <section className="py-10 bg-slate-50" id="contract">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="text-center mb-8">
          <span className="inline-block text-[11px] font-bold tracking-[0.12em] uppercase text-blue-600 bg-blue-600/[0.08] border border-blue-600/25 px-3 py-1 rounded-full mb-4">
            {t.notion.contractTerms.sectionLabel}
          </span>
          <h2
            className="font-extrabold leading-tight text-slate-900"
            style={{ fontSize: 'clamp(22px, 3.5vw, 34px)' }}
          >
            {t.notion.contractTerms.title.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < t.notion.contractTerms.title.split('\n').length - 1 && (
                  <br />
                )}
              </span>
            ))}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {t.notion.contractTerms.contracts.map((c) => (
            <div
              key={c.term}
              className={`relative rounded-2xl px-7 py-8 ${
                c.recommended
                  ? 'border border-blue-600'
                  : 'bg-white border border-black/[0.08]'
              }`}
              style={
                c.recommended
                  ? {
                      background:
                        'linear-gradient(160deg, rgba(37,99,235,0.06) 0%, #ffffff 100%)',
                    }
                  : {}
              }
            >
              {c.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[11px] font-extrabold px-3.5 py-1 rounded-full whitespace-nowrap">
                  おすすめ
                </div>
              )}
              <div className="text-xs font-bold text-blue-600 tracking-[0.08em] mb-2">
                {c.term}
              </div>
              <div className="text-[13px] text-slate-400 mb-1">
                {c.dbNote}
              </div>
              <div
                className={`text-[22px] font-extrabold text-slate-900 mb-1 ${
                  c.recommended ? 'font-black' : ''
                }`}
              >
                {c.add}
                <span
                  className={`text-[13px] font-medium text-slate-600 ${
                    c.recommended ? 'font-semibold' : ''
                  }`}
                >
                  {c.addSub}
                </span>
              </div>
              <div
                className={`text-[13px] text-slate-600 mt-3 pt-3 border-t border-black/[0.08] ${
                  c.recommended ? 'font-bold' : ''
                }`}
              >
                {c.reason}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

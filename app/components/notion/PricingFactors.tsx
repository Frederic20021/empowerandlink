'use client';

import { useLanguage } from '@/lib/i18n';

export default function PricingFactors() {
  const { t } = useLanguage();

  return (
    <section className="py-10 bg-slate-50" id="factors">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="text-center mb-7">
          <span className="inline-block text-[11px] font-bold tracking-[0.12em] uppercase text-blue-600 bg-blue-600/[0.08] border border-blue-600/25 px-3 py-1 rounded-full mb-4">
            {t.notion.pricingFactors.sectionLabel}
          </span>
          <h2
            className="font-extrabold leading-tight text-slate-900 mb-4"
            style={{ fontSize: 'clamp(22px, 3.5vw, 34px)' }}
          >
            {t.notion.pricingFactors.title}
          </h2>
          <div className="w-12 h-[3px] bg-blue-600 rounded mx-auto mt-4 mb-4" />
          <p className="text-slate-600 text-[15px] max-w-[600px] mx-auto">
            {t.notion.pricingFactors.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {t.notion.pricingFactors.factors.map((f) => (
            <div
              key={f.point}
              className="bg-white border border-black/[0.08] rounded-2xl p-7 transition-all duration-200 hover:border-blue-600/25 hover:-translate-y-0.5"
            >
              <div className="text-[11px] font-bold tracking-[0.1em] text-blue-600 mb-2">
                {f.point}
              </div>
              <div className="text-[28px] mb-3">{f.icon}</div>
              <div className="text-[17px] font-bold text-slate-900 mb-2">
                {f.title}
              </div>
              <div className="text-[13px] text-blue-600 font-semibold mb-3">
                {f.analogy}
              </div>
              <p className="text-sm text-slate-600 leading-[1.7] mb-4">
                {f.desc}
              </p>

              <table className="w-full border-collapse text-[13px]">
                <thead>
                  <tr>
                    {f.tableHeaders.map((h, i) => (
                      <th
                        key={i}
                        className={`py-1.5 border-b border-black/[0.08] text-slate-400 font-semibold ${
                          i === f.tableHeaders.length - 1
                            ? 'text-right text-blue-600'
                            : 'text-left pr-2'
                        }`}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {f.tableRows.map((row, ri) => (
                    <tr key={ri}>
                      {row.cols.map((col, ci) => (
                        <td
                          key={ci}
                          className={`py-[7px] border-b border-black/[0.04] text-slate-600 ${
                            ci === row.cols.length - 1
                              ? 'text-right text-blue-600 font-semibold'
                              : 'pr-2'
                          }`}
                        >
                          {col}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>

              {f.footnote && (
                <p className="text-xs text-slate-400 mt-2.5">{f.footnote}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

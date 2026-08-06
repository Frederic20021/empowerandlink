'use client';

import { useLanguage } from '@/lib/i18n';

export default function IndustryExamples() {
  const { t } = useLanguage();

  return (
    <section
      className="py-10"
      id="industry"
      style={{
        background:
          'linear-gradient(180deg, transparent 0%, rgba(37,99,235,0.04) 50%, transparent 100%)',
      }}
    >
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="text-center mb-6">
          <span className="inline-block text-[11px] font-bold tracking-[0.12em] uppercase text-blue-600 bg-blue-600/[0.08] border border-blue-600/25 px-3 py-1 rounded-full mb-4">
            {t.notion.industryExamples.sectionLabel}
          </span>
          <h2
            className="font-extrabold leading-tight text-slate-900 mb-3"
            style={{ fontSize: 'clamp(22px, 3.5vw, 34px)' }}
          >
            {t.notion.industryExamples.title
              .split('\n')
              .map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
          </h2>
          <p className="text-slate-600 text-[15px] max-w-[600px] mx-auto">
            {t.notion.industryExamples.subtitle}
          </p>
        </div>

        {/* Summary table */}
        <div className="overflow-x-auto rounded-2xl border border-black/[0.08] mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-blue-50">
                {t.notion.industryExamples.tableHeaders.map((h, i) => (
                  <th
                    key={i}
                    className="px-5 py-3.5 text-left text-[12px] text-slate-400 font-bold tracking-[0.05em] border-b border-black/[0.08]"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t.notion.industryExamples.tableRows.map((row, i) => (
                <tr
                  key={i}
                  className="hover:bg-blue-600/[0.02] transition-colors"
                >
                  <td className="px-5 py-4 text-slate-600 border-b border-black/[0.08] last:border-0">
                    {row.industry}
                  </td>
                  <td className="px-5 py-4 text-slate-600 border-b border-black/[0.08]">
                    {row.dbCount}
                  </td>
                  <td className="px-5 py-4 text-blue-600 font-bold border-b border-black/[0.08]">
                    {row.price}
                  </td>
                  <td className="px-5 py-4 text-slate-600 border-b border-black/[0.08]">
                    {row.themes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Detail cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {t.notion.industryExamples.cards.map((card) => (
            <div
              key={card.title}
              className="bg-white border border-black/[0.08] rounded-2xl p-7"
            >
              <div className="text-[15px] font-bold text-slate-900 mb-1.5">
                {card.title}
              </div>
              <div
                className="text-[13px] text-slate-400 mb-4 px-3.5 py-2.5 rounded-r-lg"
                style={{
                  background: 'rgba(37,99,235,0.03)',
                  borderLeft: '3px solid #2563eb',
                }}
              >
                {card.pain}
              </div>
              <p className="text-xs text-slate-400 mb-2.5">{card.dbNote}</p>
              <table className="w-full text-[13px]">
                <tbody>
                  {card.rows.map((row, i) => (
                    <tr key={i}>
                      <td className="py-[5px] text-slate-600">{row.label}</td>
                      <td className="py-[5px] text-right text-blue-600 font-semibold">
                        {row.val}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-3 pt-2.5 border-t border-black/[0.08] flex justify-between font-bold text-sm">
                <span>月額合計</span>
                <span className="text-blue-600">{card.total}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

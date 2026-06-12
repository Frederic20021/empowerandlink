const contracts = [
  {
    term: '6ヶ月契約',
    dbNote: '無料DBは2つまで',
    add: '+¥30,000',
    addSub: '/追加DB・月',
    reason: 'まずは半年で効果を見たい / 中規模での試行',
    recommended: false,
  },
  {
    term: '12ヶ月契約',
    dbNote: '無料DBは3つまで',
    add: '+¥20,000',
    addSub: '/追加DB・月',
    reason: '本気で業務改善に取り組みたい / 長く一緒に育てていきたい方に',
    recommended: true,
  },
  {
    term: '月ごと契約',
    dbNote: '初回の1つまで（一回限り）',
    add: '+¥35,000',
    addSub: '/追加DB・月',
    reason: '短期間だけ集中的にお試ししたい / 短期プレミアム（価格高め）',
    recommended: false,
  },
];

export default function ContractTerms() {
  return (
    <section className="py-10 bg-slate-50" id="contract">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="text-center mb-8">
          <span className="inline-block text-[11px] font-bold tracking-[0.12em] uppercase text-blue-600 bg-blue-600/[0.08] border border-blue-600/25 px-3 py-1 rounded-full mb-4">
            4. 契約期間によるおすすめプラン
          </span>
          <h2
            className="font-extrabold leading-tight text-slate-900"
            style={{ fontSize: 'clamp(22px, 3.5vw, 34px)' }}
          >
            長くお付き合いいただく前提で、<br />
            丁寧に作り込みたいため、<br />
            12ヶ月契約を最もお得に設計しています
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {contracts.map((c) => (
            <div
              key={c.term}
              className={`relative rounded-2xl px-7 py-8 ${
                c.recommended
                  ? 'border border-blue-600'
                  : 'bg-white border border-black/[0.08]'
              }`}
              style={
                c.recommended
                  ? { background: 'linear-gradient(160deg, rgba(37,99,235,0.06) 0%, #ffffff 100%)' }
                  : {}
              }
            >
              {c.recommended && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[11px] font-extrabold px-3.5 py-1 rounded-full whitespace-nowrap"
                >
                  おすすめ
                </div>
              )}
              <div className="text-xs font-bold text-blue-600 tracking-[0.08em] mb-2">{c.term}</div>
              <div className="text-[13px] text-slate-400 mb-1">{c.dbNote}</div>
              <div className={`text-[22px] font-extrabold text-slate-900 mb-1 ${c.recommended ? 'font-black' : ''}`}>
                {c.add}
                <span className={`text-[13px] font-medium text-slate-600 ${c.recommended ? 'font-semibold' : ''}`}>
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

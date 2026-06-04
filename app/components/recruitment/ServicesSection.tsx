const services = [
  {
    id: "a",
    title: "書類翻訳＆在留資格申請サポート",
    description:
      "外国人材採用に必要な各種書類の翻訳から申請手続きまで、専門の行政書士と連携し、トータルサポートします。",
    tags: ["書類翻訳", "在留資格申請", "行政書士連携"],
    gradient: "from-[#0e2d6e] to-[#1976d2]",
  },
  {
    id: "b",
    title: "ビジネス研修＆生活サポート",
    description:
      "特定技能の人材向けに、登録支援機関と連携した法定の義務的支援を提供します。日本語教育・銀行口座開設・公的手続き同行も含みます。",
    tags: ["生活支援", "日本語研修", "登録支援機関連携"],
    gradient: "from-[#0057b8] to-[#0099e6]",
  },
  {
    id: "c",
    title: "通訳・継続フォロー",
    description:
      "言語の壁を解消し、企業様と外国人材の円滑なコミュニケーションをサポート。採用後の定着率向上に貢献します。",
    tags: ["職場通訳", "定期面談", "トラブル対応"],
    gradient: "from-[#0099e6] to-[#00bbe0]",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-8 lg:py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-12 md:px-18">
        <div className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.22em] text-[#0099e6] uppercase mb-4">
          <span className="w-[18px] h-[2px] bg-[#0099e6]" />
          サービス内容
        </div>
        <div className="w-12 h-1 rounded mb-5" />
        <h2 className="text-[clamp(1.7rem,3.5vw,2.6rem)] font-black text-white leading-tight mb-2">
          採用から<span className="text-[#1976d2]">定着まで</span>、ワンストップ対応
        </h2>
        <p className="text-[#5a738a] max-w-[580px] mb-10">
          3つのサービスで、外国人材の採用に伴う全ての課題を解消します。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.id}
              className="rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(14,45,110,0.10)] hover:shadow-[0_8px_40px_rgba(14,45,110,0.16)] hover:-translate-y-1 transition-all duration-[0.28s] bg-white"
            >
              <div className={`bg-gradient-to-br ${s.gradient} p-8 pb-5`}>
                <div className="text-[2.8rem] font-black text-white/20 leading-none mb-2">
                  {s.id.toUpperCase()}
                </div>
                <h3 className="text-white font-bold text-base">{s.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-[#5a738a] text-sm leading-relaxed mb-5">
                  {s.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[0.7rem] font-semibold bg-[#e8eef8] text-[#0057b8] border border-[#d0dce8]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

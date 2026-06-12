const countries = [
  {
    flag: "🇱🇰",
    name: "スリランカ",
    meta: "Sri Lanka｜平均年齢 32〜35歳",
    points: [
      { num: "01", title: "高い基礎学力で教育コスト低減", desc: "公教育無償で整備された南アジア有数の教育水準。業務理解が早く指導負担を軽減します。" },
      { num: "02", title: "親日・仏教文化による高い定着率", desc: "親日的な国民性と仏教文化の価値観の近さで、日本の職場環境にスムーズに適応します。" },
      { num: "03", title: "高い英語力でコミュニケーション対応", desc: "旧英国領として英語教育が浸透。多国籍職場や海外取引がある企業での活躍が期待できます。" },
    ],
  },
  {
    flag: "🇲🇲",
    name: "ミャンマー",
    meta: "Myanmar｜平均年齢 27〜28歳",
    points: [
      { num: "01", title: "同じ仏教国で円滑な職場適応", desc: "思いやり精神と目上を敬う価値観が根付いており、日本の職場文化への適応がスムーズです。" },
      { num: "02", title: "英語力でコミュニケーション対応", desc: "高校から英語で学ぶ教育環境。日本語に加えて英語での意思疎通も可能な人材が多い。" },
      { num: "03", title: "忍耐強さと協調性", desc: "農業主要国ならではの忍耐力と協調性。長期的で安定した就業継続が期待できます。" },
    ],
  },
];

export default function Countries() {
  return (
    <section id="countries" className="py-16 lg:py-24 bg-white px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.22em] text-[#0099e6] uppercase mb-4 before:content-[''] before:w-[18px] before:h-[2px] before:bg-[#0099e6]">
          対応国籍
        </div>
        <div className="w-12 h-1 bg-[#0099e6] rounded mb-5" />
        <h2 className="text-[clamp(1.7rem,3.5vw,2.6rem)] font-black text-[#0e2d6e] leading-tight mb-2">
          スリランカ・<span className="text-[#1976d2]">ミャンマーを中心に</span>
        </h2>
        <p className="text-[#5a738a] max-w-[580px] mb-10">
          豊富な教育水準と親日的な国民性を持つ人材をご紹介します。上記２ヶ国の他、インドネシア等に対応します。
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {countries.map((c) => (
            <div
              key={c.name}
              className="rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(14,45,110,0.10)]"
            >
              <div className="flex items-center gap-4 p-6 bg-[#f4f7fc] border-b border-[#d0dce8]">
                <span className="text-[2.2rem]">{c.flag}</span>
                <div>
                  <h3 className="text-[#0e2d6e] font-bold">{c.name}</h3>
                  <span className="text-[#5a738a] text-sm">{c.meta}</span>
                </div>
              </div>
              <div className="p-6 flex flex-col gap-4">
                {c.points.map((p) => (
                  <div key={p.num} className="flex gap-4 items-start text-sm">
                    <span className="text-[0.7rem] font-bold text-[#0099e6] min-w-[1.5rem] mt-0.5">
                      {p.num}
                    </span>
                    <div>
                      <div className="font-bold text-[#0e2d6e] mb-0.5">
                        {p.title}
                      </div>
                      <div className="text-[#5a738a] leading-relaxed">
                        {p.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

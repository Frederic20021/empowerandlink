const visaItems = [
  {
    title: "即戦力外国人材の採用",
    subtitle: "特定技能ビザ",
    headClass: "bg-[#0e2d6e]",
    description:
      "浜松・静岡エリアの製造業・物流・自動車整備分野に特化した即戦力人材をご紹介。人材のご紹介から在留資格申請手続きまで、ワンストップでサポートいたします。",
    checks: [
      "工業製品製造（エンジン部品等サプライヤー様向け）",
      "ドライバー（浜松エリア・物流需要増加対応）",
      "自動車整備（各国人材対応）",
    ],
  },
  {
    title: "専門人材・DX人材の採用",
    subtitle: "技術・人文知識・国際業務（技人国）",
    headClass: "bg-gradient-to-r from-[#0057b8] to-[#0099e6]",
    description:
      "エンジニア・通訳翻訳など専門性の高い分野の即戦力人材をご紹介。DX・IT・観光ビジネス分野に特化した人材確保を支援します。",
    checks: [
      "DX・IT（プログラミング・サイバーセキュリティ・CAD）",
      "日本語能力N2レベルのデジタル人材",
      "観光ビジネス（ホテル・ツアーガイド等）",
      "通訳案内士（観光ガイド)・各種通訳・翻訳サービス",
    ],
  },
];

export default function Visas() {
  return (
    <section id="visas" className="py-16 lg:py-24 bg-white px-12 md:px-18">
      <div className="max-w-[1200px] mx-auto">
        <div className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.22em] text-[#0099e6] uppercase mb-4 before:content-[''] before:w-[18px] before:h-[2px] before:bg-[#0099e6]">
          対応ビザ種別
        </div>
        <div className="w-12 h-1 bg-[#0099e6] rounded mb-5" />
        <h2 className="text-[clamp(1.7rem,3.5vw,2.6rem)] font-black text-[#0e2d6e] leading-tight mb-2">
          各種人材の<span className="text-[#1976d2]">採用支援</span>
        </h2>
        <p className="text-[#5a738a] max-w-[580px] mb-10">
          特定技能・技人国の両ビザに対応。採用から在留資格申請まで一貫サポートします。
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {visaItems.map((v) => (
            <div
              key={v.title}
              className="rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(14,45,110,0.10)]"
            >
              <div className={`${v.headClass} p-8`}>
                <div className="text-[0.68rem] font-bold tracking-[0.15em] text-white/65 uppercase mb-2">
                  {v.subtitle}
                </div>
                <h3 className="text-white font-bold text-lg">{v.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-[#5a738a] text-sm leading-relaxed mb-5">
                  {v.description}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {v.checks.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-3 text-sm text-[#1a2b4a] leading-snug"
                    >
                      <span className="w-5 h-5 bg-[#00bbe0] text-white rounded-full flex items-center justify-center text-[0.65rem] font-bold flex-shrink-0 mt-0.5">
                        ✓
                      </span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { num: "01", title: "お問い合わせ", desc: "HPまたは直接ご連絡ください。「外国人材採用の概要を知りたい」等のお問い合わせも歓迎です。" },
  { num: "02", title: "ご商談", desc: "希望職種・採用人数・国籍・在留資格（特定技能・技人国）などのニーズをヒアリングします。" },
  { num: "03", title: "お見積もり・ご契約", desc: "お見積もりをご検討いただき、契約を締結します。" },
  { num: "04", title: "求人開始", desc: "現地ネットワーク・データベースを活用した候補者の募集・選抜を開始します。" },
  { num: "05", title: "書類選考・面接", desc: "弊社通訳スタッフが同席し、言語・文化ギャップによるミスコミュニケーションを防止します。" },
  { num: "06", title: "人材確定", desc: "内定通知・雇用条件の最終確認。採用者へのフォロー・意思確認も弊社にて行います。" },
];

export default function Process() {
  return (
    <section id="process" className="py-14 md:py-18 bg-[#f4f7fc] px-12 md:px-18">
      <div className="max-w-[1200px] mx-auto">
        <div className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.22em] text-[#0099e6] uppercase mb-4 before:content-[''] before:w-[18px] before:h-[2px] before:bg-[#0099e6]">
          ご利用の流れ
        </div>
        <div className="w-12 h-1 bg-[#0099e6] rounded mb-5" />
        <h2 className="text-[clamp(1.7rem,3.5vw,2.6rem)] font-black text-[#0e2d6e] leading-tight mb-2">
          採用まで<span className="text-[#1976d2]">6つのステップ</span>
        </h2>
        <p className="text-[#5a738a] max-w-[580px] mb-10">
          お問い合わせから人材確定まで、一貫してサポートいたします。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((s) => (
            <div
              key={s.num}
              className="bg-white rounded-xl p-7 shadow-[0_4px_24px_rgba(14,45,110,0.10)] relative"
            >
              <div className="absolute top-6 right-6 text-[3rem] font-black text-[#e8eef8] leading-none pointer-events-none">
                {s.num}
              </div>
              <div className="w-9 h-9 bg-gradient-to-br from-[#0e2d6e] to-[#1976d2] text-white font-bold text-sm rounded-full flex items-center justify-center mb-4 flex-shrink-0 relative">
                {s.num}
              </div>
              <h3 className="text-[#0e2d6e] font-bold text-base mb-2 relative">
                {s.title}
              </h3>
              <p className="text-[#5a738a] text-sm leading-relaxed relative">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 p-5 bg-[rgba(0,87,184,0.06)] border border-[rgba(0,87,184,0.2)] rounded-lg text-center mx-auto">
          <p className="text-sm text-[#0057b8] font-semibold">
            ※ステップ1〜6は全て無償でサービス提供。<strong>成功報酬型</strong>のため、労働契約締結時のみ会社様へご請求いたします。
          </p>
        </div>
      </div>
    </section>
  );
}

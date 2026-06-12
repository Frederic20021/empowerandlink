const problems = [
  {
    icon: '🗂️',
    gradient: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
    title: '情報が散らばって\nすぐに探せない',
    desc: '顧客情報・案件状況・会議記録がExcel・チャット・メール・紙資料に分散。必要な情報を探すだけで時間が奪われています。',
  },
  {
    icon: '📊',
    gradient: 'linear-gradient(135deg, #06b6d4, #0284c7)',
    title: '進捗が見えず、\n引き継ぎが機能しない',
    desc: 'タスクや案件の管理が担当者個人に依存し、チームで進捗が共有できない。退職・異動のたびに引き継ぎが一からになる。',
  },
  {
    icon: '🔧',
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
    title: 'ツールが多いのに\n使いこなせていない',
    desc: '複数のツールを導入したが連携できておらず、AIも単発利用にとどまる。結局、Excel・紙の業務フローから抜け出せない。',
  },
];

export default function Problems() {
  return (
    <section className="bg-slate-50" id="problems">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="text-center mb-10">
          <span className="inline-block text-[11px] font-bold tracking-[0.12em] uppercase text-blue-600 bg-blue-600/[0.08] border border-blue-600/25 px-3 py-1 rounded-full mb-4">
            PROBLEM
          </span>
          <h2
            className="font-extrabold leading-tight text-slate-900 mb-3"
            style={{ fontSize: 'clamp(22px, 3.5vw, 34px)' }}
          >
            こんな<span className="text-blue-600">課題</span>ありませんか？
          </h2>
          <p className="text-slate-600 text-[15px] max-w-[600px] mx-auto">
            多くの中小企業が、同じ業務上の課題に直面しています。
          </p>
          <div className="w-12 h-[3px] bg-blue-600 rounded mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl py-8 px-4 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)]"
              style={{
                border: '1px solid rgba(0,0,0,0.08)',
                borderTop: '3px solid #06b6d4',
              }}
            >
              <div
                className="w-[90px] h-[90px] rounded-[18px] flex items-center justify-center text-[30px] mx-auto mb-5"
                style={{ background: p.gradient }}
              >
                {p.icon}
              </div>
              <div className="text-base font-bold mb-2.5 leading-snug text-slate-900 whitespace-pre-line">
                {p.title}
              </div>
              <p className="text-sm text-slate-600 leading-[1.8]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

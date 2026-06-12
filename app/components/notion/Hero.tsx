export default function Hero() {
  return (
    <section className="py-[50px] pb-10 text-center relative overflow-hidden bg-slate-50">
      {/* Background glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-120px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '700px',
          background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)',
        }}
      />
      <div className="max-w-[1080px] mx-auto px-6 relative z-10">
        <div className="mb-6">
          <span className="inline-block text-[11px] font-bold tracking-[0.12em] uppercase text-blue-600 bg-blue-600/[0.08] border border-blue-600/25 px-3 py-1 rounded-full">
            Notion業務改善サブスクリプション
          </span>
        </div>
        <h1
          className="font-black leading-tight tracking-tight text-slate-900 mb-5"
          style={{ fontSize: 'clamp(28px, 5vw, 52px)' }}
        >
          御社の業務を、<br />
          <em className="not-italic text-blue-600">Notionで変える。</em>
        </h1>
        <p className="text-slate-600 text-base max-w-[580px] mx-auto mb-10 leading-[1.7]">
          情報の分散・業務の属人化・ツールの乱立——<br />
          よくある課題を、Notionひとつで整理・見える化します。
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="/contact"
            className="bg-blue-600 text-white text-md font-bold py-2 px-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] shadow-[0_0_28px_rgba(37,99,235,0.35)] no-underline"
          >
            無料ヒアリングを申し込む（60分）
          </a>
          <a
            href="#plan"
            className="text-slate-900 text-[15px] font-semibold py-2 px-4 rounded-full border border-black/[0.08] transition-all duration-200 hover:bg-blue-600 hover:text-white no-underline"
          >
            料金を確認する
          </a>
        </div>
        <p className="mt-5 text-xs text-slate-400">
          ※本資料は素案です。正式なお見積りは初回ヒアリング後にご提示いたします。
        </p>
      </div>
    </section>
  );
}

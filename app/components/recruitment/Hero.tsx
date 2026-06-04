export default function Hero() {
  return (
    <section
      id="hero-new"
      className="relative flex items-center overflow-hidden bg-white py-12 md:py-16 px-12 md:px-18"
    >
      <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-br from-[#f4f7fc] to-[#e8eef8] clip-hero z-0 max-lg:hidden" />
      <div className="relative z-10 w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <div className="hero-badge">
            <span className="badge-pulse" />
            人材紹介サービス
          </div>
          <h1 className="text-[#0e2d6e] text-[clamp(2rem,5vw,3.8rem)] font-black leading-[1.12] tracking-tight mb-6">
            優秀な外国人材と
            <br />
            <em className="not-italic text-[#1976d2]">日本企業をつなぐ</em>
          </h1>
          <p className="text-[#5a738a] text-base lg:text-lg leading-relaxed max-w-[460px] mb-10">
            採用から定着まで、ワンストップでサポート。
            経験豊富なスタッフが貴社の人材課題を解決します。
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#cta-new"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#0057b8] text-white font-bold text-sm tracking-wider rounded shadow-[0_4px_20px_rgba(0,87,184,0.3)] hover:bg-[#0e2d6e] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(0,87,184,0.4)] transition-all duration-[0.28s]"
            >
              無料で相談する
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#problems"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent text-[#0057b8] font-bold text-sm tracking-wider rounded border-2 border-[#0057b8] hover:bg-[#0057b8] hover:text-white hover:-translate-y-0.5 transition-all duration-[0.28s]"
            >
              課題を見る
            </a>
          </div>
          <div className="flex flex-wrap gap-4 items-center pt-6 max-w-[470px] justify-center border-t border-[#d0dce8]">
            {["契約書類翻訳無料", "見積り・相談無料", "初期費用ゼロ"].map(
              (item) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 text-sm text-[#5a738a]"
                >
                  <svg
                    className="w-3.5 h-3.5 text-[#0099e6]"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z" />
                  </svg>
                  {item}
                </span>
              ),
            )}
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="bg-white rounded-2xl p-8 shadow-[0_8px_40px_rgba(14,45,110,0.16)] relative before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-[#0e2d6e] before:to-[#0099e6] before:rounded-t-2xl">
            <div className="text-[0.75rem] font-bold tracking-[0.1em] text-[#5a738a] uppercase mb-5">
              人材紹介 サービス一覧
            </div>
            <ul className="flex flex-col gap-3">
              {[
                { icon: "🌏", text: "外国人材の採用支援（特定技能・技人国）" },
                { icon: "📋", text: "在留資格申請サポート・書類翻訳代行" },
                { icon: "🎓", text: "ビジネス研修・生活サポート" },
                { icon: "🗣️", text: "通訳・翻訳サービス" },
                { icon: "🔄", text: "採用後の定着フォロー" },
              ].map((item) => (
                <li
                  key={item.text}
                  className="flex items-start gap-3 p-3.5 rounded-lg bg-[#f4f7fc] text-sm text-[#1a2b4a]"
                >
                  <span className="text-lg flex-shrink-0">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
            <a href="#cta-new">
              <div className="mt-6 p-4 bg-gradient-to-br from-[#0e2d6e] to-[#1976d2] rounded-lg text-center">
                <div className="text-sm font-bold text-white">
                  まずは無料でご相談ください
                </div>
                <div className="text-[0.7rem] font-normal text-white/80 mt-1">
                  ※採用成功まで費用はかかりません
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

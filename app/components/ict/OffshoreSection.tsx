function OffshoreIllustration() {
  return (
    <svg viewBox="0 0 540 400" xmlns="http://www.w3.org/2000/svg" className="block w-full h-auto">
      <defs>
        <linearGradient id="os-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e0f2fe" />
          <stop offset="100%" stopColor="#bae6fd" />
        </linearGradient>
      </defs>
      <rect width="540" height="400" fill="url(#os-bg)" />
      {/* OFFSHORE watermark */}
      <text x="270" y="230" fontFamily="sans-serif" fontSize="60" fontWeight="900"
        fill="#0ea5e9" opacity="0.07" textAnchor="middle" letterSpacing="-2">OFFSHORE</text>
      {/* Globe rings */}
      <circle cx="270" cy="192" r="138" fill="none" stroke="#0ea5e9" strokeWidth="1.5" opacity="0.3" />
      <circle cx="270" cy="192" r="104" fill="none" stroke="#0ea5e9" strokeWidth="1" opacity="0.2" />
      <ellipse cx="270" cy="192" rx="138" ry="46" fill="none" stroke="#0ea5e9" strokeWidth="1" opacity="0.18" />
      <ellipse cx="270" cy="192" rx="138" ry="92" fill="none" stroke="#0ea5e9" strokeWidth="1" opacity="0.18" />
      <ellipse cx="270" cy="192" rx="46" ry="138" fill="none" stroke="#0ea5e9" strokeWidth="1" opacity="0.18" />
      <ellipse cx="270" cy="192" rx="92" ry="138" fill="none" stroke="#0ea5e9" strokeWidth="1" opacity="0.18" />
      <line x1="132" y1="192" x2="408" y2="192" stroke="#0ea5e9" strokeWidth="1" opacity="0.25" />
      <line x1="270" y1="54" x2="270" y2="330" stroke="#0ea5e9" strokeWidth="1" opacity="0.25" />
      {/* Japan HQ */}
      <circle cx="346" cy="152" r="12" fill="#2563eb" />
      <circle cx="346" cy="152" r="22" fill="#2563eb" opacity="0.18" />
      <circle cx="346" cy="152" r="32" fill="#2563eb" opacity="0.07" />
      <text x="346" y="156" fontFamily="sans-serif" fontSize="9" fill="white" fontWeight="800" textAnchor="middle">JP</text>
      {/* Node: Southeast Asia */}
      <circle cx="392" cy="226" r="9" fill="#0ea5e9" />
      <circle cx="392" cy="226" r="17" fill="#0ea5e9" opacity="0.15" />
      <circle cx="392" cy="218" r="5.5" fill="white" />
      <ellipse cx="392" cy="233" rx="8" ry="4.5" fill="white" opacity="0.65" />
      <rect x="360" y="244" width="66" height="18" rx="9" fill="white" opacity="0.88" />
      <text x="393" y="257" fontFamily="sans-serif" fontSize="9.5" fill="#0ea5e9" fontWeight="600" textAnchor="middle">東南アジア</text>
      {/* Node: India */}
      <circle cx="298" cy="268" r="9" fill="#0ea5e9" />
      <circle cx="298" cy="268" r="17" fill="#0ea5e9" opacity="0.15" />
      <circle cx="298" cy="260" r="5.5" fill="white" />
      <ellipse cx="298" cy="275" rx="8" ry="4.5" fill="white" opacity="0.65" />
      <rect x="272" y="286" width="54" height="18" rx="9" fill="white" opacity="0.88" />
      <text x="299" y="299" fontFamily="sans-serif" fontSize="9.5" fill="#0ea5e9" fontWeight="600" textAnchor="middle">インド</text>
      {/* Node: Europe */}
      <circle cx="180" cy="154" r="9" fill="#0ea5e9" />
      <circle cx="180" cy="154" r="17" fill="#0ea5e9" opacity="0.15" />
      <circle cx="180" cy="146" r="5.5" fill="white" />
      <ellipse cx="180" cy="161" rx="8" ry="4.5" fill="white" opacity="0.65" />
      <rect x="148" y="172" width="65" height="18" rx="9" fill="white" opacity="0.88" />
      <text x="180" y="185" fontFamily="sans-serif" fontSize="9.5" fill="#0ea5e9" fontWeight="600" textAnchor="middle">ヨーロッパ</text>
      {/* Node: Americas */}
      <circle cx="146" cy="228" r="9" fill="#0ea5e9" />
      <circle cx="146" cy="228" r="17" fill="#0ea5e9" opacity="0.15" />
      <circle cx="146" cy="220" r="5.5" fill="white" />
      <ellipse cx="146" cy="235" rx="8" ry="4.5" fill="white" opacity="0.65" />
      <rect x="120" y="246" width="52" height="18" rx="9" fill="white" opacity="0.88" />
      <text x="146" y="259" fontFamily="sans-serif" fontSize="9.5" fill="#0ea5e9" fontWeight="600" textAnchor="middle">米州</text>
      {/* Connection lines */}
      <line x1="346" y1="152" x2="392" y2="226" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="6,4" opacity="0.45" />
      <line x1="346" y1="152" x2="298" y2="268" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="6,4" opacity="0.45" />
      <line x1="346" y1="152" x2="180" y2="154" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="6,4" opacity="0.45" />
      <line x1="346" y1="152" x2="146" y2="228" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="6,4" opacity="0.38" />
      {/* Stats row */}
      <rect x="28" y="334" width="152" height="46" rx="12" fill="white" opacity="0.88" />
      <text x="104" y="352" fontFamily="sans-serif" fontSize="9.5" fill="#64748b" textAnchor="middle">コスト削減率</text>
      <text x="44" y="372" fontFamily="sans-serif" fontSize="19" fill="#2563eb" fontWeight="900">〜40%</text>
      <text x="120" y="372" fontFamily="sans-serif" fontSize="10" fill="#94a3b8">削減</text>
      <rect x="194" y="334" width="152" height="46" rx="12" fill="white" opacity="0.88" />
      <text x="270" y="352" fontFamily="sans-serif" fontSize="9.5" fill="#64748b" textAnchor="middle">日本品質基準</text>
      <text x="210" y="372" fontFamily="sans-serif" fontSize="19" fill="#2563eb" fontWeight="900">100%</text>
      <text x="288" y="372" fontFamily="sans-serif" fontSize="10" fill="#94a3b8">対応</text>
      <rect x="360" y="334" width="152" height="46" rx="12" fill="white" opacity="0.88" />
      <text x="436" y="352" fontFamily="sans-serif" fontSize="9.5" fill="#64748b" textAnchor="middle">対応技術スタック</text>
      <text x="376" y="372" fontFamily="sans-serif" fontSize="19" fill="#2563eb" fontWeight="900">20+</text>
      <text x="414" y="372" fontFamily="sans-serif" fontSize="10" fill="#94a3b8">種類</text>
    </svg>
  );
}

const features = [
  '世界水準のITエンジニア',
  'コスト最大40%削減',
  '日本品質基準での開発',
  '確かなマネジメント体制',
  '多言語・多タイムゾーン対応',
  '柔軟なチーム規模調整',
];

export default function OffshoreSection() {
  return (
    <section id="offshore" className="py-24 bg-white">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Illustration */}
          <div className="rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
            <OffshoreIllustration />
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-[38px] h-[38px] rounded-[10px] flex items-center justify-center text-white text-base font-black shrink-0"
                style={{ background: 'linear-gradient(135deg, #2563eb, #1d4ed8)' }}
              >
                03
              </div>
              <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-blue-600 bg-blue-50 border border-blue-200/50 px-3 py-0.5 rounded-full">
                グローバル開発
              </span>
            </div>
            <h2
              className="font-black leading-tight tracking-tight text-[#1a3562] mb-4"
              style={{ fontSize: 'clamp(26px, 3.5vw, 40px)' }}
            >
              オフショア
              <br />
              開発
            </h2>
            <p className="text-[15px] text-slate-600 leading-[1.9] mb-7">
              世界中の優秀なITエンジニアを、確かなマネジメントのもとで提供。
              日本の品質基準を守りながらコストを最適化し、
              開発を加速させます。
              <br />
              あなたのチームの一員として、確かな成果を共に創り上げます。
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 list-none mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-[13.5px] text-slate-600 leading-snug">
                  <span className="block w-[7px] h-[7px] rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="https://empowerandlink.com/offshore" target="_parent"
              className="inline-flex items-center gap-2 bg-blue-600 text-white text-sm font-bold py-3 px-7 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(37,99,235,0.42)] shadow-[0_4px_20px_rgba(37,99,235,0.28)]"
            >
              詳細を見る
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

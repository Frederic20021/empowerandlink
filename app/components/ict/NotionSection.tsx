import { getAssetPath } from '@/app/utils/paths';

function NotionIllustration() {
  return (
    <svg viewBox="0 0 540 400" xmlns="http://www.w3.org/2000/svg" className="block w-full h-auto">
      <defs>
        <linearGradient id="n-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#eff6ff" />
          <stop offset="100%" stopColor="#dbeafe" />
        </linearGradient>
      </defs>
      <rect width="540" height="400" fill="url(#n-bg)" />
      {/* Browser chrome */}
      <rect x="24" y="28" width="492" height="344" rx="14" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
      <rect x="24" y="28" width="492" height="44" rx="14" fill="#f8fafc" />
      <rect x="24" y="56" width="492" height="16" fill="#f8fafc" />
      {/* Traffic lights */}
      <circle cx="52" cy="50" r="6" fill="#fca5a5" />
      <circle cx="70" cy="50" r="6" fill="#fcd34d" />
      <circle cx="88" cy="50" r="6" fill="#86efac" />
      {/* URL bar */}
      <rect x="112" y="42" width="280" height="16" rx="8" fill="#e2e8f0" />
      <text x="252" y="54" fontFamily="sans-serif" fontSize="9" fill="#94a3b8" textAnchor="middle">notion.so / workspace</text>
      {/* Sidebar */}
      <rect x="24" y="72" width="118" height="300" fill="#f8fafc" stroke="#f1f5f9" strokeWidth="1" />
      <rect x="36" y="94" width="82" height="8" rx="4" fill="#cbd5e1" />
      <rect x="36" y="112" width="70" height="8" rx="4" fill="#e2e8f0" />
      <rect x="36" y="126" width="78" height="8" rx="4" fill="#e2e8f0" />
      <rect x="30" y="144" width="100" height="26" rx="6" fill="#dbeafe" />
      <rect x="42" y="151" width="64" height="8" rx="4" fill="#2563eb" opacity="0.7" />
      <rect x="36" y="182" width="72" height="8" rx="4" fill="#e2e8f0" />
      <rect x="36" y="198" width="88" height="8" rx="4" fill="#e2e8f0" />
      <rect x="36" y="214" width="60" height="8" rx="4" fill="#e2e8f0" />
      {/* Main panel title */}
      <text x="152" y="104" fontFamily="sans-serif" fontSize="17" fontWeight="700" fill="#0f172a">案件管理データベース</text>
      <rect x="152" y="110" width="52" height="3" rx="2" fill="#2563eb" />
      {/* Table header */}
      <rect x="152" y="122" width="348" height="30" rx="6" fill="#f1f5f9" />
      <text x="164" y="141" fontFamily="sans-serif" fontSize="10.5" fill="#64748b" fontWeight="600">案件名</text>
      <text x="294" y="141" fontFamily="sans-serif" fontSize="10.5" fill="#64748b" fontWeight="600">ステータス</text>
      <text x="388" y="141" fontFamily="sans-serif" fontSize="10.5" fill="#64748b" fontWeight="600">担当</text>
      <text x="460" y="141" fontFamily="sans-serif" fontSize="10.5" fill="#64748b" fontWeight="600">期限</text>
      {/* Row 1 */}
      <text x="164" y="172" fontFamily="sans-serif" fontSize="11" fill="#1e293b">山田商事 DX推進</text>
      <rect x="288" y="159" width="62" height="22" rx="11" fill="#dbeafe" />
      <text x="298" y="174" fontFamily="sans-serif" fontSize="10" fill="#2563eb" fontWeight="600">進行中</text>
      <text x="388" y="172" fontFamily="sans-serif" fontSize="11" fill="#64748b">田中</text>
      <text x="455" y="172" fontFamily="sans-serif" fontSize="11" fill="#64748b">6/30</text>
      <line x1="152" y1="184" x2="500" y2="184" stroke="#f1f5f9" strokeWidth="1" />
      {/* Row 2 */}
      <text x="164" y="208" fontFamily="sans-serif" fontSize="11" fill="#1e293b">ABC株式会社 Notion導入</text>
      <rect x="288" y="195" width="52" height="22" rx="11" fill="#dcfce7" />
      <text x="298" y="210" fontFamily="sans-serif" fontSize="10" fill="#16a34a" fontWeight="600">完了</text>
      <text x="388" y="208" fontFamily="sans-serif" fontSize="11" fill="#64748b">鈴木</text>
      <text x="455" y="208" fontFamily="sans-serif" fontSize="11" fill="#64748b">5/20</text>
      <line x1="152" y1="220" x2="500" y2="220" stroke="#f1f5f9" strokeWidth="1" />
      {/* Row 3 */}
      <text x="164" y="244" fontFamily="sans-serif" fontSize="11" fill="#1e293b">DEF工業 業務フロー整備</text>
      <rect x="288" y="231" width="62" height="22" rx="11" fill="#fef9c3" />
      <text x="296" y="246" fontFamily="sans-serif" fontSize="10" fill="#ca8a04" fontWeight="600">準備中</text>
      <text x="388" y="244" fontFamily="sans-serif" fontSize="11" fill="#64748b">佐藤</text>
      <text x="455" y="244" fontFamily="sans-serif" fontSize="11" fill="#64748b">7/10</text>
      <line x1="152" y1="256" x2="500" y2="256" stroke="#f1f5f9" strokeWidth="1" />
      {/* Row 4 */}
      <text x="164" y="280" fontFamily="sans-serif" fontSize="11" fill="#1e293b">GHI商店 在庫管理</text>
      <rect x="288" y="267" width="62" height="22" rx="11" fill="#f1f5f9" />
      <text x="298" y="282" fontFamily="sans-serif" fontSize="10" fill="#64748b" fontWeight="600">未着手</text>
      <text x="388" y="280" fontFamily="sans-serif" fontSize="11" fill="#64748b">山田</text>
      <text x="455" y="280" fontFamily="sans-serif" fontSize="11" fill="#64748b">8/01</text>
      {/* AI badge */}
      <rect x="152" y="306" width="260" height="50" rx="12" fill="white" stroke="#2563eb" strokeWidth="1" opacity="0.9" />
      <text x="172" y="324" fontFamily="sans-serif" fontSize="10" fill="#2563eb" fontWeight="700">✦ AI自動化が稼働中</text>
      <text x="172" y="342" fontFamily="sans-serif" fontSize="11" fill="#475569">ステータス変更 → 自動リマインド送信</text>
      {/* Notion N watermark */}
      <text x="488" y="366" fontFamily="serif" fontSize="72" fontWeight="900" fill="#2563eb" opacity="0.05" textAnchor="end">N</text>
    </svg>
  );
}

const features = [
  '情報を一元管理・即座に検索',
  '業務フローの可視化',
  'AI活用で定型作業を自動化',
  '属人化・引き継ぎ問題の解消',
  '月次定例で継続改善',
  '月額 ¥40,000〜（税別）',
];

export default function NotionSection() {
  return (
    <section id="notion" className="py-24 bg-white">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Illustration */}
          <div className="rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
            <NotionIllustration />
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-[38px] h-[38px] rounded-[10px] flex items-center justify-center text-white text-base font-black shrink-0"
                style={{ background: 'linear-gradient(135deg, #2563eb, #1d4ed8)' }}
              >
                01
              </div>
              <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-blue-600 bg-blue-50 border border-blue-200/50 px-3 py-0.5 rounded-full">
                業務DX
              </span>
            </div>
            <h2
              className="font-black leading-tight tracking-tight text-[#1a3562] mb-4"
              style={{ fontSize: 'clamp(26px, 3.5vw, 40px)' }}
            >
              Notion業務改善
              <br />
              顧問料
            </h2>
            <p className="text-[15px] text-slate-600 leading-[1.9] mb-7">
              情報の分散・業務の属人化・ツールの乱立——よくある課題を、
              Notionひとつで整理・見える化します。
              <br />
              月額¥40,000から始められる伴走型サポートで、
              御社の業務基盤をAIとともに継続的に改善します。
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
              href={getAssetPath('/notion')}
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

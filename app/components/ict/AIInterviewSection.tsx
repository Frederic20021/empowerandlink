import Image from 'next/image';
import { getAssetPath } from '@/app/utils/paths';

function AIInterviewIllustration() {
  return (
    <Image
      src={getAssetPath('/ict/ai-interviewer.png')}
      alt="AI面接官イラスト"
      width={980}
      height={980}
      className="block w-full h-auto"
      priority
    />
  );
}

const features = [
  '一次面接を完全自動化',
  '24時間365日対応',
  'AI自動スコアリング',
  '面接ログの自動生成',
  '採用工数を大幅削減',
  '多言語対応（日本語・英語）',
];

export default function AIInterviewSection() {
  return (
    <section id="ai-interview" className="py-24 bg-slate-50">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Illustration — right on desktop (order-2), natural on mobile */}
          <div className="md:order-2 rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
            <AIInterviewIllustration />
          </div>

          {/* Content — left on desktop (order-1) */}
          <div className="md:order-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-[38px] h-[38px] rounded-[10px] flex items-center justify-center text-white text-base font-black shrink-0"
                style={{ background: 'linear-gradient(135deg, #2563eb, #1d4ed8)' }}
              >
                02
              </div>
              <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-blue-600 bg-blue-50 border border-blue-200/50 px-3 py-0.5 rounded-full">
                採用DX
              </span>
            </div>
            <h2
              className="font-black leading-tight tracking-tight text-[#1a3562] mb-4"
              style={{ fontSize: 'clamp(26px, 3.5vw, 40px)' }}
            >
              AI面接
              <br />
              自動化システム
            </h2>
            <p className="text-[15px] text-slate-600 leading-[1.9] mb-7">
              一次面接の工数をゼロに——AIが24時間365日、
              候補者の一次面接を代行します。
              <br />
              自動スコアリング・面接ログ生成により、採用担当者は
              より重要なコア業務に集中できます。
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
              href={getAssetPath('/smartMensetsu')}
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

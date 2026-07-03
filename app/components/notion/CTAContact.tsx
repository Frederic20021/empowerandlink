import { getAssetPath } from '@/app/utils/paths';

export default function CTAContact() {
  return (
    <section className="py-[50px] bg-slate-50" id="contact">
      <div className="max-w-[1080px] mx-auto px-6">
        <div
          className="rounded-3xl px-16 py-[72px] text-center relative overflow-hidden sm:px-6 sm:py-10"
          style={{
            background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
            border: '1px solid rgba(37,99,235,0.25)',
          }}
        >
          {/* Background glow */}
          <div
            className="absolute pointer-events-none"
            style={{
              bottom: '-100px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '600px',
              height: '300px',
              background: 'radial-gradient(ellipse, rgba(37,99,235,0.06) 0%, transparent 70%)',
            }}
          />

          <div className="relative z-10">
            <span className="inline-block text-[11px] font-bold tracking-[0.12em] uppercase text-blue-600 bg-blue-600/[0.08] border border-blue-600/25 px-3 py-1 rounded-full mb-6">
              お問い合わせのご依頼
            </span>
            <h2
              className="font-black leading-tight text-slate-900 mb-4"
              style={{ fontSize: 'clamp(22px, 3.5vw, 38px)' }}
            >
              まずは無料の初回ヒアリングより<br />
              御社の現状と理想を伺ったうえで、<br />
              最適なプランをご提案いたします。
            </h2>
            <p className="text-slate-600 text-[15px] mb-10">
              初回ヒアリングは<strong className="text-blue-600">無料・60分</strong>です。お気軽にご連絡ください。
            </p>
            <div className="inline-flex flex-col items-center gap-1 mb-10">
              <span className="text-[18px] font-extrabold text-slate-900">担当：栗田（クリタ）</span>
              <span className="text-[13px] text-slate-400">業務改善・AI×システム構築</span>
            </div>
            <div>
              <a
                href={getAssetPath('/contact')}
                className="inline-flex items-center gap-2 bg-blue-600 text-white text-[15px] font-bold py-3.5 px-8 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] shadow-[0_0_28px_rgba(37,99,235,0.35)] no-underline"
              >
                問い合わせ申し込む
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

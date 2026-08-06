'use client';

import { useLanguage } from '@/lib/i18n';
import { getAssetPath } from '@/app/utils/paths';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="py-[50px] pb-10 text-center relative overflow-hidden bg-slate-50">
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-120px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '700px',
          background:
            'radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)',
        }}
      />
      <div className="max-w-[1080px] mx-auto px-6 relative z-10">
        <div className="mb-6">
          <span className="inline-block text-[11px] font-bold tracking-[0.12em] uppercase text-blue-600 bg-blue-600/[0.08] border border-blue-600/25 px-3 py-1 rounded-full">
            {t.notion.hero.badge}
          </span>
        </div>
        <h1
          className="font-black leading-tight tracking-tight text-slate-900 mb-5"
          style={{ fontSize: 'clamp(28px, 5vw, 52px)' }}
        >
          {t.notion.hero.title.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i === 0 && <br />}
            </span>
          ))}
        </h1>
        <p className="text-slate-600 text-base max-w-[580px] mx-auto mb-10 leading-[1.7]">
          {t.notion.hero.subtitle}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href={getAssetPath('/contact')}
            className="bg-blue-600 text-white text-md font-bold py-2 px-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] shadow-[0_0_28px_rgba(37,99,235,0.35)] no-underline"
          >
            {t.notion.hero.ctaPrimary}
          </a>
          <a
            href="#plan"
            className="text-slate-900 text-[15px] font-semibold py-2 px-4 rounded-full border border-black/[0.08] transition-all duration-200 hover:bg-blue-600 hover:text-white no-underline"
          >
            {t.notion.hero.ctaSecondary}
          </a>
        </div>
        <p className="mt-5 text-xs text-slate-400">
          {t.notion.hero.footnote}
        </p>
      </div>
    </section>
  );
}

'use client';

import { useLanguage } from '@/lib/i18n';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      className="relative overflow-hidden text-white text-center py-24 pb-28"
      style={{
        background:
          'linear-gradient(140deg, #0d1f3c 0%, #1a3562 60%, #1e4a8a 100%)',
      }}
    >
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-40%',
          left: '30%',
          width: '600px',
          height: '600px',
          background:
            'radial-gradient(circle, rgba(37,99,235,0.35) 0%, transparent 65%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 max-w-[1080px] mx-auto px-6">
        <span className="inline-block text-xs font-bold tracking-[0.15em] text-cyan-400 border border-cyan-400/40 bg-cyan-400/10 px-5 py-1 rounded-full mb-6">
          {t.ict.hero.badge}
        </span>
        <h1
          className="font-black leading-tight tracking-tight mb-5"
          style={{ fontSize: 'clamp(36px, 6vw, 64px)' }}
        >
          {t.ict.hero.title.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i < t.ict.hero.title.split('\n').length - 1 && <br />}
            </span>
          ))}
        </h1>
        <p
          className="text-base max-w-[520px] mx-auto leading-[1.85]"
          style={{ color: 'rgba(255,255,255,0.72)' }}
        >
          {t.ict.hero.subtitle.split('\n').map((line, i) => (
            <span key={i}>
              {line}
              {i < t.ict.hero.subtitle.split('\n').length - 1 && <br />}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

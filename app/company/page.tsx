'use client';

import { useEffect, useRef } from 'react';
import { getAssetPath } from '../utils/paths';
import { useLanguage } from '@/lib/i18n';

export default function NewCompanyPage() {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    type Star = { x: number; y: number; r: number; a: number; speed: number; phase: number; hue: number };
    let stars: Star[] = [];
    let animFrameId: number;
    let frame = 0;

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function initStars(n: number) {
      if (!canvas) return;
      stars = Array.from({ length: n }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.3 + 0.2,
        a: Math.random() * 0.7 + 0.1,
        speed: Math.random() * 0.014 + 0.004,
        phase: Math.random() * Math.PI * 2,
        hue: Math.random() < 0.15 ? 195 : 210,
      }));
    }

    function draw() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame += 0.007;
      stars.forEach(s => {
        const flicker = s.a * (0.65 + 0.35 * Math.sin(frame * s.speed * 90 + s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${s.hue},80%,88%,${flicker})`;
        ctx.fill();
      });
      animFrameId = requestAnimationFrame(draw);
    }

    resize();
    initStars(200);
    draw();

    const handleResize = () => { resize(); initStars(200); };
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  /* ── SCROLL FADE-IN ── */
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.fi').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="new-company-wrapper">

      {/* ═══ STARFIELD ═══ */}
      <canvas ref={canvasRef} id="nc-starfield" />

      {/* ════════════ HERO ════════════ */}
      <section id="nc-hero" className="text-center">
        <div className="nc-hero-content">
          <div className="hero-badge">
            <span className="badge-pulse" />
            {t.company.hero.badge}
          </div>
          <h1 className="hero-title">
            {t.company.hero.title.split('\n').map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </h1>
        </div>
      </section>

      {/* ════════════ VIDEO ════════════ */}
      <section id="nc-video" className="nc-dark-section">
        <div className="nc-container">
          <div className="sec-head">
            <div className="label label-w">{t.company.video.sectionLabel}</div>
            <h2 className="sec-title-w">{t.company.video.title}</h2>
            <p className="sec-sub-w">{t.company.video.subtitle}</p>
            <div className="acc-line" />
          </div>
          <div className="nc-video-wrap">
            <iframe
              src="https://www.youtube.com/embed/TvR8DCBHiVM"
              title="Company Introduction Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ═══ WAVE ═══ */}
      <div className="wave-down" style={{ position: 'relative', zIndex: 1 }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,20 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f2f6fc" />
        </svg>
      </div>

      {/* ════════════ CEO ════════════ */}
      <section id="nc-ceo" className="nc-light-section">
        <div className="nc-container">
          <div className="sec-head">
            <div className="label label-b">{t.company.ceo.sectionLabel}</div>
            <h2 className="sec-title-b">{t.company.ceo.title}</h2>
            <div className="acc-line acc-line-b" />
          </div>
          <div className="nc-ceo-grid bg-[#0d2462] text-white">
            <div className="nc-ceo-photo">
              <img
                src={getAssetPath('/hero/CEO.jpg')}
                alt="CEO"
                className="nc-ceo-img"
                onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <div className="nc-ceo-role">{t.company.ceo.role}</div>
              <div className="nc-ceo-name">{t.company.ceo.name}</div>
            </div>
            <div className="nc-ceo-text">
              {t.company.ceo.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WAVE ═══ */}
      <div className="wave-up" style={{ backgroundColor: '#061540', position: 'relative', zIndex: 1 }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,20 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f2f6fc" />
        </svg>
      </div>

      {/* ════════════ COMPANY INFO ════════════ */}
      <section id="nc-info" className="nc-dark-section">
        <div className="nc-container">
          <div className="sec-head">
            <div className="label label-w">{t.company.companyInfo.sectionLabel}</div>
            <h2 className="sec-title-w">{t.company.companyInfo.title}</h2>
            <p className="sec-sub-w">{t.company.companyInfo.subtitle}</p>
            <div className="acc-line" />
          </div>
          <div className="nc-info-table ">
            {[
              [t.company.companyInfo.labels.companyName, t.company.companyInfo.values.companyName],
              [t.company.companyInfo.labels.ceo, t.company.companyInfo.values.ceo],
              [t.company.companyInfo.labels.address, t.company.companyInfo.values.address],
              [t.company.companyInfo.labels.phone, t.company.companyInfo.values.phone],
              [t.company.companyInfo.labels.capital, t.company.companyInfo.values.capital],
              [t.company.companyInfo.labels.established, t.company.companyInfo.values.established],
              [t.company.companyInfo.labels.business, t.company.companyInfo.values.business],
              [t.company.companyInfo.labels.banks, t.company.companyInfo.values.banks],
            ].map(([label, value]) => (
              <div className="nc-info-row" key={label}>
                <div className="nc-info-label">{label}</div>
                <div className="nc-info-value">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WAVE ═══ */}
      <div className="wave-down" style={{ position: 'relative', zIndex: 1 }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,20 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f2f6fc" />
        </svg>
      </div>

      {/* ════════════ ACCESS ════════════ */}
      <section id="nc-access" className="nc-light-section">
        <div className="nc-container">
          <div className="sec-head">
            <div className="label label-b">{t.company.access.sectionLabel}</div>
            <h2 className="sec-title-b">{t.company.access.title}</h2>
            <p className="sec-sub-b">{t.company.access.subtitle}</p>
            <div className="acc-line acc-line-b" />
          </div>
          <div className="nc-access-grid fi">
            <div className="nc-map-wrap">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3266.8!2d137.7364!3d34.7074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQyJzI2LjYiTiAxMzfCsDQ0JzExLjAiRQ!5e0!3m2!1sja!2sjp!4v1695465000000!5m2!1sja!2sjp"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="nc-access-cards">
              <div className="nc-access-card">
                <h3><span className="nc-tag-blue">{t.company.access.cards.location.title}</span></h3>
                <p>{t.company.access.cards.location.content.split('\n').map((line, i) => (
                  <span key={i}>{line}{i < t.company.access.cards.location.content.split('\n').length - 1 && <br />}</span>
                ))}</p>
              </div>
              <div className="nc-access-card">
                <h3><span className="nc-tag-blue">{t.company.access.cards.transport.title}</span></h3>
                <div>{t.company.access.cards.transport.content.split('\n').map((line, i) => (
                  <span key={i}>{line}{i < t.company.access.cards.transport.content.split('\n').length - 1 && <br />}</span>
                ))}</div>
              </div>
              <div className="nc-access-card">
                <h3><span className="nc-tag-blue">{t.company.access.cards.parking.title}</span></h3>
                <p>{t.company.access.cards.parking.content}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WAVE ═══ */}
      <div className="wave-down" style={{ backgroundColor: '#f2f6fc', position: 'relative', zIndex: 1 }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,20 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#061540" />
        </svg>
      </div>

      {/* ════════════ CTA ════════════ */}
      <section id="nc-cta">
        <div className="nc-cta-ring nc-cr-1" />
        <div className="nc-cta-ring nc-cr-2" />
        <div className="nc-cta-inner">
          <div className="nc-cta-eyebrow">{t.company.cta.eyebrow}</div>
          <h2>{t.company.cta.title}</h2>
          <p>
            {t.company.cta.body.split('\n').map((line, i) => (
              <span key={i}>{line}{i < t.company.cta.body.split('\n').length - 1 && <br />}</span>
            ))}
          </p>
          <div className="nc-cta-btns">
            <a href={getAssetPath('/contact')} className="btn btn-glow">
              {t.company.cta.button}
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

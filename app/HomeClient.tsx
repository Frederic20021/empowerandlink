'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import BlogSection from './components/blog/BlogSection';
import { useLanguage } from '@/lib/i18n';

type PostSummary = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
};

export default function HomeClient({ blogPosts }: { blogPosts: PostSummary[] }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const canvasRef                   = useRef<HTMLCanvasElement>(null);
  const { t } = useLanguage();

  /* ── STAR FIELD ── */
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
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function initStars(n: number) {
      if (!canvas) return;
      stars = Array.from({ length: n }, () => ({
        x:     Math.random() * canvas!.width,
        y:     Math.random() * canvas!.height,
        r:     Math.random() * 1.3 + 0.2,
        a:     Math.random() * 0.7 + 0.1,
        speed: Math.random() * 0.014 + 0.004,
        phase: Math.random() * Math.PI * 2,
        hue:   Math.random() < 0.15 ? 195 : 210,
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
    initStars(280);
    draw();

    const handleResize = () => { resize(); initStars(280); };
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  /* ── NAV SCROLL ── */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── SCROLL FADE-IN (IntersectionObserver) ── */
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible', 'anim-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });

    document.querySelectorAll('.fi').forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${(i % 4) * 0.09}s`;
      io.observe(el);
    });

    document.querySelectorAll('.svc-card, .why-card, .data-card, .phi-row, .prob-item, .blog-card').forEach((el, i) => {
      const el2 = el as HTMLElement;
      el2.style.opacity   = '0';
      el2.style.transform = 'translateY(24px)';
      el2.style.transition = `opacity .55s ease ${(i % 5) * 0.1}s, transform .55s ease ${(i % 5) * 0.1}s`;
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  return (
    <div className="home-wrapper">
      <canvas ref={canvasRef} id="starfield" />

      {/* ════════════ HERO ════════════ */}
      <section id="hero">
        <div className="nebula neb-1" />
        <div className="nebula neb-2" />
        <div className="nebula neb-3" />
        <div className="hero-ring hr1" />
        <div className="hero-ring hr2" />
        <div className="hero-ring hr3" />
        <div className="planet-horizon" />

        <div className="hero-content">
          <div className="hero-left bg-[#0d2462]/90 p-4 rounded-xl">
            <div className="hero-badge">
              <span className="badge-pulse" />
              {t.hero.badge}
            </div>
            <h1 className="hero-title">
              {t.hero.titleLine1}<br />
              <em>{t.hero.titleEm}</em>
            </h1>
            <p className="hero-sub">
              {t.hero.sub}
            </p>
            <div className="hero-btns">
              <a href="#cta" className="btn btn-glow">
                {t.hero.cta}
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#services" className="btn btn-ghost">{t.hero.viewServices}</a>
            </div>
            <div className="hero-pills">
              {t.hero.pills.map(pill => (
                <span className="pill" key={pill}>{pill}</span>
              ))}
            </div>
          </div>

          <div className="hero-right">
            {[
              { icon: '👥', title: t.hero.cards.recruitment.title, href: '/recruitment', body: t.hero.cards.recruitment.body },
              { icon: '🌐', title: t.hero.cards.english.title, href: '/english', body: t.hero.cards.english.body },
              { icon: '📖', title: t.hero.cards.japanese.title, href: '/japanese', body: t.hero.cards.japanese.body },
              { icon: '💻', title: t.hero.cards.ict.title, href: '/ict', body: t.hero.cards.ict.body },
            ].map(card => (
              <Link href={card.href} key={card.title}>
                <div className="data-card">
                  <div className="dc-head">
                    <div className="dc-icon">{card.icon}</div>
                    <div className="dc-title">{card.title}</div>
                  </div>
                  <div className="dc-sub">{card.body}</div>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ STATS BAND ════════════ */}
      <div className="wave-down" style={{ background: 'linear-gradient(145deg,#061540 0%,#0c2060 45%,#0e368a 100%)' }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,30 C480,70 960,0 1440,30 L1440,60 L0,60 Z" fill="#ffffff" />
        </svg>
      </div>

      <div className="stats-band">
        <div className="container">
          <div className="stats-row">
            {[
              { num: '0',  sup: t.stats.noFeeSup,     label: t.stats.noFee },
              { num: '4',  sup: t.stats.businessesSup, label: t.stats.businesses },
              { num: '6',  sup: t.stats.countriesSup,  label: t.stats.countries },
              { num: '2',  sup: t.stats.schoolsSup,    label: t.stats.schools },
            ].map((s, i, arr) => (
              <span key={s.label} style={{ display: 'contents' }}>
                <div className="stat">
                  <div className="stat-num">{s.num}<sup>{s.sup}</sup></div>
                  <div className="stat-label">{s.label}</div>
                </div>
                {i < arr.length - 1 && <div className="stat-div" />}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════ PROBLEMS ════════════ */}
      <section id="problems" className="fi">
        <div className="container">
          <div className="prob-layout">
            <div>
              <div className="label label-b">{t.problems.label}</div>
              <h2 className="prob-title">
                {t.problems.title1}<span>{t.problems.title2}{t.problems.title3}</span>
              </h2>
              <p className="prob-body">
                {t.problems.body}
              </p>
              <a href="#cta" className="btn btn-solid-b">{t.problems.cta}</a>
            </div>

            <div className="prob-list">
              {t.problems.items.map(item => (
                <div className="prob-item" key={item.text}>
                  <span className="pi-icon">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ SERVICES ════════════ */}
      <section id="services">
        <div className="container">
          <div className="sec-head">
            <div className="label label-w">{t.services.sectionLabel}</div>
            <h2 className="sec-title-w">
              {t.services.title}
              <em style={{ fontStyle: 'normal', background: 'linear-gradient(90deg,#00c3e8,#00e0ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {t.services.titleEm}
              </em>
            </h2>
            <p className="sec-sub-w">{t.services.sub}</p>
            <div className="acc-line" />
          </div>

          <div className="svc-grid fi">
            {[
              { num: '01', icon: '👥', title: t.services.recruitment.title, body: t.services.recruitment.body, tags: t.services.recruitment.tags, link: t.services.recruitment.link, href: '/recruitment' },
              { num: '02', icon: '🌐', title: t.services.english.title, body: t.services.english.body, tags: t.services.english.tags, link: t.services.english.link, href: '/english' },
              { num: '03', icon: '📖', title: t.services.japanese.title, body: t.services.japanese.body, tags: t.services.japanese.tags, link: t.services.japanese.link, href: '/japanese' },
              { num: '04', icon: '💻', title: t.services.ict.title, body: t.services.ict.body, tags: t.services.ict.tags, link: t.services.ict.link, href: '/ict' },
            ].map(svc => (
              <div className="svc-card" key={svc.num}>
                <div className="svc-num">SERVICE · {svc.num}</div>
                <div className="svc-icon-ring">
                  <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <h3>{svc.title}</h3>
                <p>{svc.body}</p>
                <div className="svc-tags">
                  {svc.tags.map(tag => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <Link href={svc.href} className="svc-link">{svc.link}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ PHILOSOPHY ════════════ */}
      <div className="wave-down" style={{ background: 'linear-gradient(160deg,#061540 0%,#0d2462 50%,#0e2e78 100%)' }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,20 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#ffffff" />
        </svg>
      </div>

      <section id="philosophy">
        <div className="container">
          <div className="sec-head">
            <div className="label label-b">{t.philosophy.sectionLabel}</div>
            <h2 className="sec-title-b">{t.philosophy.title}</h2>
            <p className="sec-sub-b">{t.philosophy.sub}</p>
            <div className="acc-line acc-line-b" />
          </div>

          <div className="phi-timeline fi">
            {t.philosophy.pillars.map(pillar => (
              <div className="phi-row" key={pillar.title}>
                <div className="phi-dot-wrap">
                  <div className="phi-dot">{pillar.icon}</div>
                </div>
                <div className="phi-body">
                  <h3>{pillar.title}</h3>
                  <p>{pillar.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ WHY CHOOSE US ════════════ */}
      <div className="wave-up" style={{ background: '#ffffff' }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,20 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#0b1e50" />
        </svg>
      </div>

      <section id="why">
        <div className="container">
          <div className="sec-head">
            <div className="label label-w">{t.why.sectionLabel}</div>
            <h2 className="sec-title-w">
              {t.why.title}
              <em style={{ fontStyle: 'normal', background: 'linear-gradient(90deg,#00c3e8,#00e0ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {t.why.titleEm}
              </em>
            </h2>
            <p className="sec-sub-w">{t.why.sub}</p>
            <div className="acc-line" />
          </div>

          <div className="why-grid fi">
            {t.why.cards.map(card => (
              <div className="why-card" key={card.num}>
                <div className={`why-head ${card.num === '01' ? 'a' : card.num === '02' ? 'b' : card.num === '03' ? 'c' : 'd'}`}>
                  <div className="why-num">{card.num}</div>
                  <h3>{card.heading}</h3>
                </div>
                <div className="why-body">
                  <p>{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ BLOG SECTION ════════════ */}
      <div className="wave-up" style={{ background: '#ffffff' }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,20 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#0b1e50" />
        </svg>
      </div>

      <BlogSection posts={blogPosts} blog={t.blog} />

      <div className="wave-down" style={{ background: 'linear-gradient(160deg,#061540 0%,#0d2462 50%,#0e2e78 100%)' }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,20 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#061540" />
        </svg>
      </div>

      <section id="cta">
        <div className="cta-ring cr1" />
        <div className="cta-ring cr2" />
        <div className="cta-ring cr3" />
        <div className="inner">
          <div className="cta-eyebrow">{t.cta.eyebrow}</div>
          <h2>{t.cta.title.replace('\n', '\n')}</h2>
          <p>
            {t.cta.body.replace('\n', '\n')}
          </p>
          <div className="cta-btns">
            <Link href="/contact" className="btn btn-glow">
              {t.cta.btn}
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

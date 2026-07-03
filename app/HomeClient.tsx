'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import BlogSection from './components/blog/BlogSection';

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
              人材紹介 · 言語サービス · ICTソリューション
            </div>
            <h1 className="hero-title">
              日本と世界を繋ぎ、<br />
              <em>活力ある社会を創造する</em>
            </h1>
            <p className="hero-sub">
              エンパワー＆リンク株式会社は、外国人材の採用支援から言語サービス・ICT活用まで、
              企業の成長と多文化共生社会の実現を一貫してサポートします。
            </p>
            <div className="hero-btns">
              <a href="#cta" className="btn btn-glow">
                お問い合わせ
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#services" className="btn btn-ghost">サービスを見る</a>
            </div>
            <div className="hero-pills">
              {['厚生労働省許可','外国人材対応','転職支援','オンライン教育','通訳・翻訳','オフショア開発','AI導入支援'].map(t => (
                <span className="pill" key={t}>{t}</span>
              ))}
            </div>
          </div>

          <div className="hero-right">
            {[
              { icon: '👥', title: '職業・人材紹介', href: '/recruitment', body: '法人向け：東南・南アジアの優秀な人材を採用から定着まで一貫サポート。個人向け：キャリアカウンセリング・転職支援サービス。'},
              { icon: '🌐', title: '英語教育', href: '/english', body: 'グローバル人材を目指す社会人・学生向けに、TOEIC対策やビジネス会話を指導。' },
              { icon: '📖', title: '日本語教育', href: '/japanese', body: '採用後の語学サポートで定着率を向上。JLPT対応のビジネス語学指導を提供。' },
              { icon: '💻', title: 'ICT事業', href: '/ict', body: 'AI活用・クラウド導入など最先端ICTソリューションで企業の業務変革を支援。' },
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
              { num: '0',  sup: '円',   label: '採用成功まで費用なし（人材紹介）' },
              { num: '4',  sup: '事業', label: '人材紹介・英語教育・日本語教育・ICT事業' },
              { num: '6',  sup: 'ヶ国', label: '多国籍人材ネットワーク' },
              { num: '2',  sup: '校',   label: '静岡県内提携専門学校' },
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
              <div className="label label-b">課題解決</div>
              <h2 className="prob-title">
                こんな<span>お悩み</span>、<br />ありませんか？
              </h2>
              <p className="prob-body">
                多くの企業様が直面する採用・定着の課題。エンパワー＆リンクは
                採用検討から入社後のフォローまで、一貫してパートナーとして解決を支援します。
              </p>
              <a href="#cta" className="btn btn-solid-b">無料で解決策を相談する</a>
            </div>

            <div className="prob-list">
              {[
                { icon: '😓', text: '外国人雇用の手続き・制度が複雑でわからない' },
                { icon: '📢', text: '求人広告を出しても応募がなく採用できない' },
                { icon: '👥', text: '若手・成長意欲の高い人材が入ってこない' },
                { icon: '⏰', text: '残業・休日対応をいとわない人材がほしい' },
                { icon: '🔄', text: '採用してもすぐ辞める・定着しない' },
                { icon: '🌐', text: '多言語・異文化コミュニケーションが不安' },
              ].map(item => (
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
            <div className="label label-w">Our Services</div>
            <h2 className="sec-title-w">
              4つのサービスで、
              <em style={{ fontStyle: 'normal', background: 'linear-gradient(90deg,#00c3e8,#00e0ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                企業と人材をつなぐ
              </em>
            </h2>
            <p className="sec-sub-w">採用から定着まで — 外国人材に関わる全ての課題に対応します。</p>
            <div className="acc-line" />
          </div>

          <div className="svc-grid fi">
            <div className="svc-card">
              <div className="svc-num">SERVICE · 01</div>
              <div className="svc-icon-ring">
                <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3>職業・人材紹介</h3>
              <p>企業ニーズに合った外国人材をご提案。採用から在留資格手続き・入社後の定着支援まで一貫対応。</p>
              <div className="svc-tags">
                <span className="tag">特定技能</span><span className="tag">技人国</span><span className="tag">転職支援</span>
              </div>
              <Link href="/recruitment" className="svc-link">詳しく見る →</Link>
            </div>

            <div className="svc-card">
              <div className="svc-num">SERVICE · 02</div>
              <div className="svc-icon-ring">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </div>
              <h3>英語教育</h3>
              <p>ビジネス英語・TOEIC対策を実践重視で指導。グローバル人材を目指す社会人・学生を支援。</p>
              <div className="svc-tags">
                <span className="tag">TOEIC対策</span><span className="tag">ビジネス英語</span><span className="tag">オンライン対応</span>
              </div>
              <Link href="/english" className="svc-link">詳しく見る →</Link>
            </div>

            <div className="svc-card">
              <div className="svc-num">SERVICE · 03</div>
              <div className="svc-icon-ring">
                <svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><line x1="9" y1="9" x2="15" y2="9"/><line x1="9" y1="13" x2="13" y2="13"/></svg>
              </div>
              <h3>日本語教育</h3>
              <p>外国人材向けの実践的な日本語指導。職場コミュニケーション力とJLPT合格を同時にサポート。</p>
              <div className="svc-tags">
                <span className="tag">JLPT対策</span><span className="tag">職場用日本語</span><span className="tag">人材定着支援</span>
              </div>
              <Link href="/japanese" className="svc-link">詳しく見る →</Link>
            </div>

            <div className="svc-card">
              <div className="svc-num">SERVICE · 04</div>
              <div className="svc-icon-ring">
                <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><polyline points="6 9 9 12 6 15"/><line x1="12" y1="15" x2="16" y2="15"/></svg>
              </div>
              <h3>ICT事業</h3>
              <p>AI活用・クラウド導入・IT人材紹介を展開。業務分析から最適なテクノロジー導入まで支援。</p>
              <div className="svc-tags">
                <span className="tag">AI面接</span><span className="tag">ノーションAI</span><span className="tag">IT人材紹介</span>
              </div>
              <Link href="/ict" className="svc-link">詳しく見る →</Link>
            </div>
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
            <div className="label label-b">Corporate Philosophy</div>
            <h2 className="sec-title-b">企業理念</h2>
            <p className="sec-sub-b">働く人の夢と日本企業の活性化、多文化共生社会の実現を３本柱に掲げます。</p>
            <div className="acc-line acc-line-b" />
          </div>

          <div className="phi-timeline fi">
            {[
              { icon: '💡', title: '働く人の夢を実現',     body: '外国人の方・グローバル人材をはじめ多くの人々の夢の実現を後押しします。一人ひとりの希望に寄り添い、最適なキャリアを見つけるお手伝いをいたします。' },
              { icon: '🏢', title: '日本企業の活性化',     body: '外国人材やICTの導入による変化への対応力で、日本の会社を元気にします。多様な視点・業務見直しがイノベーションをもたらし、企業の成長を促進します。' },
              { icon: '🌏', title: '多文化共生社会の創造', body: '日本と世界を繋いで、日本を多文化が共生できる社会にします。異なる背景を持つ人々が互いに尊重し、力を発揮し合える環境を創り上げます。' },
            ].map(row => (
              <div className="phi-row" key={row.title}>
                <div className="phi-dot-wrap">
                  <div className="phi-dot">{row.icon}</div>
                </div>
                <div className="phi-body">
                  <h3>{row.title}</h3>
                  <p>{row.body}</p>
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
            <div className="label label-w">Why Choose Us</div>
            <h2 className="sec-title-w">
              選ばれる
              <em style={{ fontStyle: 'normal', background: 'linear-gradient(90deg,#00c3e8,#00e0ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                4つの理由
              </em>
            </h2>
            <p className="sec-sub-w">単なる「人材紹介」にとどまらず、人材不足・業務課題に寄り添うトータルソリューションを提供します。</p>
            <div className="acc-line" />
          </div>

          <div className="why-grid fi">
            {[
              { variant: 'a', num: '01', heading: '「つなぐ力」に基づくマッチング',         body: '代表の角谷は、教職（進路指導）・グローバル企業（海外営業・経営企画）を経て、異なる立場の人や組織をつなぐ役割を担ってきました。「聞く力」「立場の違いを理解する力」「繋げる力」を基盤に、条件だけに依らない、納得感のあるマッチングを実現します。' },
              { variant: 'b', num: '02', heading: '言語教育・サービスの活用による定着支援', body: '英語教育・日本語教育も展開しており、日本人・外国人双方に紹介して終わりではなく、キャリアアップ・就業後のコミュニケーション支援まで見据えた体制を整えています。採用後の継続フォローで長期的な定着を実現します。' },
              { variant: 'c', num: '03', heading: '専門学校・全国ネットワークとの連携',     body: '静岡県内専門学校2校と提携し、技人国対応の人材を選抜・ご紹介します。さらに全国をカバーする人材エージェント専門プラットフォームにも加盟し、国内在住・日本語能力N2取得済みなど、ニーズに合わせた人材をご提案します。' },
              { variant: 'd', num: '04', heading: 'AI活用による省力化支援',                 body: '人材不足への解決策は人材採用に限りません。AI活用やITシステム導入など、テクノロジーも活用した包括的な課題解決を目指します。御社の業務課題を構造的に捉え、最小のコストで最大の効果を発揮できるソリューションを提案します。' },
            ].map(card => (
              <div className="why-card" key={card.num}>
                <div className={`why-head ${card.variant}`}>
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
      {/*
      <div className="wave-up" style={{ background: '#ffffff' }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,20 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#0b1e50" />
        </svg>
      </div>

      <BlogSection posts={blogPosts} />

      <div className="wave-down" style={{ background: 'linear-gradient(160deg,#061540 0%,#0d2462 50%,#0e2e78 100%)' }}>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,20 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#061540" />
        </svg>
      </div>
      */}

      <section id="cta">
        <div className="cta-ring cr1" />
        <div className="cta-ring cr2" />
        <div className="cta-ring cr3" />
        <div className="inner">
          <div className="cta-eyebrow">今すぐ始める</div>
          <h2>採用課題から言語サービス・AI導入まで、<br />まずはご相談ください</h2>
          <p>
            サービス概要を知りたい、見積もりを依頼したい等のお問い合わせも歓迎です。<br />
            経験豊富なスタッフが丁寧にご対応いたします。
          </p>
          <div className="cta-btns">
            <Link href="/contact" className="btn btn-glow">
              無料でお問い合わせ
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

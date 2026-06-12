'use client';

import { useEffect, useRef } from 'react';
import { getAssetPath } from '../utils/paths';

export default function NewCompanyPage() {
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
            会社概要
          </div>
          <h1 className="hero-title">
            人と人とを<em>つなぐ</em><br />
            それが私たちの使命です。
          </h1>
        </div>
      </section>

      {/* ════════════ VIDEO ════════════ */}
      <section id="nc-video" className="nc-dark-section">
        <div className="nc-container">
          <div className="sec-head">
            <div className="label label-w">Company Video</div>
            <h2 className="sec-title-w">紹介動画</h2>
            <p className="sec-sub-w">エンパワー＆リンクの事業内容をご紹介します。</p>
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
            <div className="label label-b">CEO Message</div>
            <h2 className="sec-title-b">代表挨拶</h2>
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
              <div className="nc-ceo-role">代表取締役社長</div>
              <div className="nc-ceo-name">角谷 寛人</div>
            </div>
            <div className="nc-ceo-text">
              <p>エンパワー＆リンク㈱のウェブサイトをご覧頂き、ありがとうございます。</p>
              <p>私は、学生時代に沢木耕太郎の『深夜特急』や海外映画の影響を受け、東京外国語大学に進学。卒業後は、埼玉県の私立高校で英語科主任・進路指導、三菱製紙㈱で海外営業・経営企画、本田技研工業㈱で事業企画の経験を積ませて頂き、英語×海外×人との繋がりをキャリアの軸として歩んできました。</p>
              <p>転勤をきっかけに浜松で生活をすると、日本が少子高齢化により、外国の方に労働者、日本社会の一員として来日してもらっていることを肌で実感しました。ただ、日本は長年「移民」を受け入れてこなかったため、国の制度面だけでなくまだまだ民間や地域社会の側にも受け入れのノウハウが整っていないように思います。</p>
              <p>そこで、多文化共生という課題に先進的に取り組んできた浜松の地から、企業の多様性・グローバル化促進、外国の方の定住をサポートする事業をスタートしたいと思い、エンパワー＆リンク㈱を立ち上げました。</p>
              <p>日本人・外国人、男性・女性、健常者・障がい者といった枠に捉われず、互いに信頼し合える組織を創り、個人が本来持つ力を発揮することで最高のアイディア、パフォーマンスが生まれると信じています。資源は有限でも繋がりは無限です。</p>
              <p>新たな一歩を踏み出す勇気を与え、人と人との繋がりを生み出す会社でありたいという想いを社名には込めております。皆さまと共に歩み、ご期待に沿えるよう邁進して参ります。ご愛顧のほど、よろしくお願い申し上げます。</p>
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
            <div className="label label-w">Company Info</div>
            <h2 className="sec-title-w">会社情報</h2>
            <p className="sec-sub-w">エンパワー＆リンク株式会社の基本情報</p>
            <div className="acc-line" />
          </div>
          <div className="nc-info-table ">
            {[
              ['会社名', 'エンパワー&リンク株式会社'],
              ['代表取締役', '角谷 寛人'],
              ['所在地', '〒430-0949\n静岡県浜松市中央区\n尾張町124-6\n浜松士業ビル 4階E号室'],
              ['電話番号', '070-6616-0410'],
              ['資本金', '500万円'],
              ['設立', '2025年4月'],
              ['事業内容', '有料職業紹介事業\n(22-ユ-300927)\n日本語教育\n英語教育\nICTサービス'],
              ['取引銀行', '三井住友銀行\n浜松磐田信用金庫\nPayPay銀行'],
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
            <div className="label label-b">Access</div>
            <h2 className="sec-title-b">アクセス</h2>
            <p className="sec-sub-b">浜松士業ビル 4階E号室</p>
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
                <h3><span className="nc-tag-blue">所在地</span></h3>
                <p>〒430-0949<br />静岡県浜松市中央区尾張町124-6<br />浜松士業ビル 4階E号室</p>
              </div>
              <div className="nc-access-card">
                <h3><span className="nc-tag-blue">交通アクセス</span></h3>
                <div>JR浜松駅から徒歩10分<br />遠鉄電車「新浜松駅」から徒歩8分</div>
              </div>
              <div className="nc-access-card">
                <h3><span className="nc-tag-blue">駐車場</span></h3>
                <p>周辺の有料駐車場をご利用ください</p>
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
          <div className="nc-cta-eyebrow">お問い合わせ</div>
          <h2>まずはお気軽にご相談ください</h2>
          <p>
            サービス概要を知りたい、見積もりを依頼したい等のお問い合わせも歓迎です。<br />
            経験豊富なスタッフが丁寧にご対応いたします。
          </p>
          <div className="nc-cta-btns">
            <a href="/contact" className="btn btn-glow">
              無料でお問い合わせ
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

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function CosmosNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const pathname = usePathname();
  const isHome   = pathname === '/';

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const servicesHref = isHome ? '#services' : '/#services';
  const whyHref      = isHome ? '#why'      : '/#why';

  return (
    <>
      {/* ════════════ NAV ════════════ */}
      <nav id="nav" className={isScrolled ? 'scrolled' : ''}>
        <div className="nav-inner">
          <Link className="logo" href="/">
            <div className="logo-orb">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.jpg" className="logo-design" alt="エンパワー＆リンク ロゴ" />
            </div>
            <div className="logo-texts">
              <span className="logo-en">Empower&amp;Link Co., Ltd.</span>
              <span className="logo-jp">エンパワー＆リンク株式会社</span>
            </div>
          </Link>

          <ul className="nav-links">
            <li><a href={servicesHref}>提供サービス</a></li>
            <li><a href={whyHref}>４つの強み</a></li>
            <li><Link href="/company">会社概要</Link></li>
            <li><Link href="/contact" className="nav-cta">お問い合わせ</Link></li>
          </ul>

          <div className="hbg" onClick={() => setMenuOpen(v => !v)}>
            <span /><span /><span />
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mob-menu${menuOpen ? ' open' : ''}`}>
        <ul>
          <li><a href={servicesHref} onClick={() => setMenuOpen(false)}>サービス</a></li>
          <li><a href={whyHref}      onClick={() => setMenuOpen(false)}>選ばれる理由</a></li>
          <li><Link href="/company" onClick={() => setMenuOpen(false)}>会社概要</Link></li>
          <li><Link href="/contact" onClick={() => setMenuOpen(false)}>お問い合わせ</Link></li>
        </ul>
      </div>
    </>
  );
}

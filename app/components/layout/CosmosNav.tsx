'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getAssetPath } from '../../utils/paths';

export default function CosmosNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const [isInIframe, setIsInIframe] = useState(false);
  const pathname = usePathname();
  const isHome   = pathname === '/';
  const logoSrc  = getAssetPath('/logo.jpg');

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Detect iframe — only then do we need target="_top" to break out
  useEffect(() => {
    setIsInIframe(window.self !== window.top);
  }, []);

  // When inside an iframe, page links must target the parent window.
  // Hash links (#services, #why) scroll within the iframe so they don't need it.
  const pageTarget = isInIframe ? '_top' : undefined;

  // Anchor links work as in-page scrolls on home, full-path on other pages
  const servicesHref = isHome ? '#services' : '/#services';
  const whyHref      = isHome ? '#why'      : '/#why';

  return (
    <>
      {/* ════════════ NAV ════════════ */}
      <nav id="nav" className={isScrolled ? 'scrolled' : ''}>
        <div className="nav-inner">
          <Link className="logo" href="https://empowerandlink.com/" target={pageTarget}>
            <div className="logo-orb">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logoSrc} className="logo-design" alt="エンパワー＆リンク ロゴ" />
            </div>
            <div className="logo-texts">
              <span className="logo-en">Empower&amp;Link Co., Ltd.</span>
              <span className="logo-jp">エンパワー＆リンク株式会社</span>
            </div>
          </Link>

          <ul className="nav-links">
            <li><a href={servicesHref}>提供サービス</a></li>
            <li><a href={whyHref}>４つの強み</a></li>
            <li><Link href="https://empowerandlink.com/company" target={pageTarget}>会社概要</Link></li>
            <li><Link href="https://empowerandlink.com/contact" className="nav-cta" target={pageTarget}>お問い合わせ</Link></li>
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
          <li><Link href="https://empowerandlink.com/company" target={pageTarget} onClick={() => setMenuOpen(false)}>会社概要</Link></li>
          <li><Link href="https://empowerandlink.com/contact" target={pageTarget} onClick={() => setMenuOpen(false)}>お問い合わせ</Link></li>
        </ul>
      </div>
    </>
  );
}

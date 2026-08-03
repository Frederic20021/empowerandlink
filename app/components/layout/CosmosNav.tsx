'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getAssetPath } from '@/app/utils/paths';
import { useLanguage } from '@/lib/i18n';

export default function CosmosNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const pathname = usePathname();
  const isHome   = pathname === '/';
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const base       = getAssetPath('/');
  const servicesHref = isHome ? '#services' : `${base}#services`;
  const whyHref      = isHome ? '#why'      : `${base}#why`;

  const langToggle = (
    <div className="lang-toggle py-2 ">
      <button
        type="button"
        className={`lang-btn${lang === 'ja' ? ' active' : ''}`}
        onClick={() => setLang('ja')}
      >
        JA
      </button>
      <span className="lang-divider">/</span>
      <button
        type="button"
        className={`lang-btn${lang === 'en' ? ' active' : ''}`}
        onClick={() => setLang('en')}
      >
        EN
      </button>
    </div>
  );

  return (
    <>
      {/* ════════════ NAV ════════════ */}
      <nav id="nav" className={isScrolled ? 'scrolled' : ''}>
        <div className="nav-inner">
          <Link className="logo" href="/">
            <div className="logo-orb">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={getAssetPath('/logo.jpg')} className="logo-design" alt="エンパワー＆リンク ロゴ" />
            </div>
            <div className="logo-texts">
              <span className="logo-en">Empower&amp;Link Co., Ltd.</span>
              <span className="logo-jp">エンパワー＆リンク株式会社</span>
            </div>
          </Link>

          <ul className="nav-links">
            <li><a href={servicesHref}>{t.nav.services}</a></li>
            <li><a href={whyHref}>{t.nav.why}</a></li>
            <li><Link href="/company">{t.nav.company}</Link></li>
            <li><Link href="/contact" className="nav-cta">{t.nav.contact}</Link></li>
            <li>{langToggle}</li>
          </ul>

          <div className="hbg" onClick={() => setMenuOpen(v => !v)}>
            <span /><span /><span />
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mob-menu${menuOpen ? ' open' : ''}`}>
        <ul>
          <li><a href={servicesHref} onClick={() => setMenuOpen(false)}>{t.mobNav.services}</a></li>
          <li><a href={whyHref}      onClick={() => setMenuOpen(false)}>{t.mobNav.why}</a></li>
          <li><Link href="/company" onClick={() => setMenuOpen(false)}>{t.mobNav.company}</Link></li>
          <li><Link href="/contact" onClick={() => setMenuOpen(false)}>{t.mobNav.contact}</Link></li>
          <li>{langToggle}</li>
        </ul>
      </div>
    </>
  );
}

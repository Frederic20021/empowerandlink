'use client';

import Link from 'next/link';
import { getAssetPath } from '@/app/utils/paths';
import { useLanguage } from '@/lib/i18n';

export default function CosmosFooter() {
  const { t } = useLanguage();

  return (
    <footer className="cosmos-footer" id="about">
      <div className="container mx-auto">
        <div className="ft-grid px-12 md:px-18">
          <div className="ft-brand">
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
            <p>
              {t.footer.desc}<br />
              {t.footer.license}
            </p>
          </div>

          <div className="ft-col">
            <h4>{t.footer.services}</h4>
            <ul className="ft-links">
              <li><Link href="/recruitment">{t.footer.recruitment}</Link></li>
              <li><Link href="/english">{t.footer.english}</Link></li>
              <li><Link href="/japanese">{t.footer.japanese}</Link></li>
              <li><Link href="/ict">{t.footer.ict}</Link></li>
            </ul>
          </div>

          <div className="ft-col">
            <h4>{t.footer.company}</h4>
            <ul className="ft-links">
              <li><Link href="/company">{t.footer.overview}</Link></li>
              <li><Link href="/contact">{t.footer.contact}</Link></li>
            </ul>
          </div>
        </div>

        <div className="ft-bottom">
          <span>{t.footer.copyright}</span>
        </div>
      </div>
    </footer>
  );
}

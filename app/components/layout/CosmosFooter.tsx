import Link from 'next/link';
import { getAssetPath } from '../../utils/paths';

export default function CosmosFooter() {
  const logoSrc = getAssetPath('/logo.jpg');

  return (
    <footer className="cosmos-footer" id="about">
      <div className="container mx-auto">
        <div className="ft-grid">
          <div className="ft-brand">
            <Link className="logo" href="https://empowerandlink.com/">
              <div className="logo-orb">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logoSrc} className="logo-design" alt="エンパワー＆リンク ロゴ" />
              </div>
              <div className="logo-texts">
                <span className="logo-en">Empower&amp;Link Co., Ltd.</span>
                <span className="logo-jp">エンパワー＆リンク株式会社</span>
              </div>
            </Link>
            <p>
              日本と世界を繋ぎ、企業の活性化と多文化共生社会の実現に貢献します。<br />
              有料職業紹介事業者（厚生労働省許可）
            </p>
          </div>

          <div className="ft-col">
            <h4>サービス</h4>
            <ul className="ft-links">
              <li><Link href="https://empowerandlink.com/recruitment">人材紹介</Link></li>
              <li><Link href="https://empowerandlink.com/english">英語教育</Link></li>
              <li><Link href="https://empowerandlink.com/japanese">日本語教育</Link></li>
              <li><Link href="https://empowerandlink.com/ict">ICT事業</Link></li>
            </ul>
          </div>

          <div className="ft-col">
            <h4>会社情報</h4>
            <ul className="ft-links">
              <li><Link href="https://empowerandlink.com/company">会社概要</Link></li>
              <li><Link href="https://empowerandlink.com/contact">お問い合わせ</Link></li>
            </ul>
          </div>
        </div>

        <div className="ft-bottom">
          <span>© 2025 エンパワー＆リンク株式会社 All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}

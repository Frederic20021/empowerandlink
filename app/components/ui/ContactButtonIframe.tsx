'use client';

import Link from 'next/link';

interface ContactButtonIframeProps {
  pageName?: string;
  buttonText?: string;
  className?: string;
  wrapperClassName?: string;
  breakOutOfIframe?: boolean;
}

export default function ContactButtonIframe({ 
  pageName = '',
  buttonText = 'お問い合わせ・ご相談はこちら',
  className = '',
  wrapperClassName = 'bg-white flex justify-center py-8',
  breakOutOfIframe = false
}: ContactButtonIframeProps) {
  // Use absolute URL to prevent GitHub Pages navigation
  const baseUrl = 'https://empowerandlink.com';
  const path = pageName ? `/contact?from=${encodeURIComponent(pageName)}` : '/contact';
  const href = `${baseUrl}${path}`;
  
  const handleClick = (e: React.MouseEvent) => {
    if (breakOutOfIframe && window.top !== window.self) {
      // We're in an iframe, break out to parent
      e.preventDefault();
      window.top!.location.href = href;
    }
    // Otherwise, let Next.js Link handle it normally
  };
  
  return (
    <div className={wrapperClassName}>
      <Link
        href={href}
        onClick={handleClick}
        className={`bg-blue-600 hover:bg-blue-700 text-white p-4 font-bold rounded-lg transition-colors duration-300 shadow-lg ${className}`}
      >
        {buttonText}
      </Link>
    </div>
  );
}

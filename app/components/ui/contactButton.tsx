import Link from "next/link";

interface ContactButtonProps {
  pageName?: string;
  buttonText?: string;
  className?: string;
  wrapperClassName?: string;
}

export default function ContactButton({ 
  pageName = '',
  buttonText = 'お問い合わせ・ご相談はこちら',
  className = '',
  wrapperClassName = ' flex justify-center'
}: ContactButtonProps) {
  // Use absolute URL to prevent GitHub Pages navigation
  const baseUrl = 'https://empowerandlink.com';
  const path = pageName ? `/contact?from=${encodeURIComponent(pageName)}` : '/contact';
  const href = `${baseUrl}${path}`;
  
  return (
    <div className={wrapperClassName}>
      <Link
        href={href}
        className={`bg-blue-600 hover:bg-blue-700 text-white p-4 font-bold rounded-lg transition-colors duration-300 shadow-lg ${className}`}
      >
        {buttonText}
      </Link>
    </div>
  );
}

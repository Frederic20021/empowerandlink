interface ContactButtonProps {
  pageName?: string;
  buttonText?: string;
  className?: string;
  wrapperClassName?: string;
}

export default function ContactButton({ 
  pageName = '',
  buttonText = 'お問い合わせ・ご相談はこちら',
  className = 'bg-blue-600 text-white hover:bg-blue-700 py-8',
  wrapperClassName = 'bg-white flex justify-center'
}: ContactButtonProps) {
  const href = pageName ? `/contact?from=${encodeURIComponent(pageName)}` : '/contact';
  
  return (
    <div className={`${wrapperClassName}`}>
      <a
        href={href}
        target="_parent"
        className={`p-4 font-bold rounded-lg transition-colors duration-300 shadow-lg ${className}`}
      >
        {buttonText}
      </a>
    </div>
  );
}

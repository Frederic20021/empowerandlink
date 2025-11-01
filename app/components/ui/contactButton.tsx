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
  wrapperClassName = 'bg-white flex justify-center'
}: ContactButtonProps) {
  const href = pageName ? `/contact?from=${encodeURIComponent(pageName)}` : '/contact';
  
  return (
    <div className={wrapperClassName}>
      <a
        href={href}
        target="_parent"
        className={`bg-blue-600 hover:bg-blue-700 text-white p-4 font-bold rounded-lg transition-colors duration-300 shadow-lg ${className}`}
      >
        {buttonText}
      </a>
    </div>
  );
}

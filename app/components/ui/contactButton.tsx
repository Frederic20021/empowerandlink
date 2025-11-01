'use client';

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
  wrapperClassName = 'bg-white flex justify-center rounded-lg'
}: ContactButtonProps) {
  const href = pageName ? `/contact?from=${encodeURIComponent(pageName)}` : '/contact';
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Try to navigate parent window if in iframe
    if (window.parent && window.parent !== window) {
      try {
        window.parent.location.href = href;
      } catch (error) {
        // Fallback for cross-origin iframe restrictions
        window.top!.location.href = href;
      }
    } else {
      // Not in iframe, navigate normally
      window.location.href = href;
    }
  };
  
  return (
    <div className={wrapperClassName}>
      <a
        href={href}
        onClick={handleClick}
        className={`bg-blue-600 hover:bg-blue-700 text-white p-4 font-bold rounded-lg transition-colors duration-300 shadow-lg ${className}`}
      >
        {buttonText}
      </a>
    </div>
  );
}

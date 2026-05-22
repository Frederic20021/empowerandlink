export default function CTASection() {
  return (
    <section
      className="relative overflow-hidden text-white text-center py-[88px]"
      style={{ background: 'linear-gradient(140deg, #0d1f3c 0%, #1a3562 60%, #1e4a8a 100%)' }}
    >
      {/* Radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-60%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(37,99,235,0.3) 0%, transparent 65%)',
        }}
      />
      <div className="relative z-10 max-w-[1080px] mx-auto px-6">
        <h2
          className="font-black mb-4"
          style={{ fontSize: 'clamp(24px, 4vw, 42px)' }}
        >
          まずは無料相談から
          <br />
          始めてみませんか？
        </h2>
        <p
          className="text-base mb-10 max-w-[480px] mx-auto leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.7)' }}
        >
          御社の課題やご要望をお聞きし、最適なICTソリューションをご提案します。
          <br />
          お気軽にお問い合わせください。
        </p>
        <a
          href="https://empowerandlink.com/contact" target="_parent"
          className="inline-flex items-center gap-2 bg-white text-[#1a3562] text-[15px] font-extrabold py-4 px-10 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_36px_rgba(0,0,0,0.28)]"
        >
          無料相談を申し込む →
        </a>
      </div>
    </section>
  );
}

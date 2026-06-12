export default function Hero() {
  return (
    <section
      className="relative overflow-hidden text-white text-center py-24 pb-28"
      style={{ background: 'linear-gradient(140deg, #0d1f3c 0%, #1a3562 60%, #1e4a8a 100%)' }}
    >
      {/* Radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-40%',
          left: '30%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(37,99,235,0.35) 0%, transparent 65%)',
        }}
      />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 max-w-[1080px] mx-auto px-6">
        <span className="inline-block text-xs font-bold tracking-[0.15em] text-cyan-400 border border-cyan-400/40 bg-cyan-400/10 px-5 py-1 rounded-full mb-6">
          ICT SERVICE
        </span>
        <h1
          className="font-black leading-tight tracking-tight mb-5"
          style={{ fontSize: 'clamp(36px, 6vw, 64px)' }}
        >
          テクノロジーで
          <br />
          <em className="not-italic text-cyan-400">企業の未来を拓く。</em>
        </h1>
        <p className="text-base max-w-[520px] mx-auto leading-[1.85]" style={{ color: 'rgba(255,255,255,0.72)' }}>
          Notion業務改善・AI採用自動化・オフショア開発
          <br />
          3つのサービスを提供し、あなたの企業のDX推進を支援します。
        </p>
      </div>
    </section>
  );
}

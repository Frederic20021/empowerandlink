import { useLanguage } from "@/lib/i18n";
import { getAssetPath } from '@/app/utils/paths';

export default function CTASection() {
  const { t } = useLanguage();
  const { cta } = t.recruitment;

  return (
    <section id="cta-new" className="py-14 md:py-18 bg-[#0e2d6e] px-12 md:px-18">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.22em] text-[#00bbe0] uppercase mb-4 before:content-[''] before:w-[18px] before:h-[2px] before:bg-[#00bbe0]">
              {cta.eyebrow}
            </div>
            <div className="w-12 h-1 bg-[#0099e6] rounded mb-5" />
            <h2 className="text-[clamp(20px,5vw,35px)] font-black text-white leading-tight mb-3">
              {cta.title}
            </h2>
            <p className="text-white/70 text-base leading-relaxed max-w-[540px]">
              {cta.subtitle}
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center mx-auto">
            <a
              href={getAssetPath('/contact')}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#0e2d6e] font-bold text-sm tracking-wider rounded shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] transition-all duration-[0.28s] text-center"
            >
              {cta.button}
            </a>
            <a
              href="#process"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent text-white/80 font-bold text-sm tracking-wider rounded border-2 border-white/40 hover:bg-white/10 hover:text-white transition-all duration-[0.28s]"
            >
              {cta.secondaryButton}
            </a>
            <p className="text-white/55 text-sm text-right">
              {cta.footnote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

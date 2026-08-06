import { useLanguage } from "@/lib/i18n";

export default function Problems() {
  const { t } = useLanguage();
  const { problems } = t.recruitment;

  return (
    <section id="problems" className="py-16 lg:py-24 bg-[#f4f7fc] px-12 md:px-18">
      <div className="max-w-[1200px] mx-auto px-12 md:px-18">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.22em] text-[#0099e6] uppercase mb-4 before:content-[''] before:w-[18px] before:h-[2px] before:bg-[#0099e6]">
              {problems.sectionLabel}
            </div>
            <div className="w-12 h-1 bg-[#0099e6] rounded mb-5" />
            <h2 className="text-[clamp(1.5rem,3vw,2.3rem)] font-black text-[#0e2d6e] leading-tight mb-4">
              {problems.title}
            </h2>
            <p className="text-[#5a738a] leading-relaxed mb-6">
              {problems.subtitle}
            </p>
            <a
              href="#cta-new"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0057b8] text-white font-bold text-sm rounded shadow-[0_4px_18px_rgba(19,82,181,0.3)] hover:bg-[#0e2d6e] hover:-translate-y-0.5 transition-all duration-[0.28s]"
            >
              {problems.cta}
            </a>
          </div>
          <div className="flex flex-col gap-3">
            {problems.items.map((p) => (
              <div
                key={p.text}
                className="flex items-center gap-3.5 p-4 bg-white rounded-lg border-l-4 shadow-[0_2px_8px_rgba(14,45,110,0.06)] text-sm text-[#1a2b4a] transition-transform duration-[0.28s] hover:translate-x-1"
                style={{ borderColor: problems.items.indexOf(p) % 2 === 0 ? "#0057b8" : "#0099e6" }}
              >
                <span className="text-lg flex-shrink-0">{p.icon}</span>
                {p.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

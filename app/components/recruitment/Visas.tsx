import { useLanguage } from "@/lib/i18n";

export default function Visas() {
  const { t } = useLanguage();
  const { visas } = t.recruitment;

  const headClasses = [
    "bg-[#0e2d6e]",
    "bg-gradient-to-r from-[#0057b8] to-[#0099e6]",
  ];

  return (
    <section id="visas" className="py-16 lg:py-24 bg-white px-12 md:px-18">
      <div className="max-w-[1200px] mx-auto">
        <div className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.22em] text-[#0099e6] uppercase mb-4 before:content-[''] before:w-[18px] before:h-[2px] before:bg-[#0099e6]">
          {visas.sectionLabel}
        </div>
        <div className="w-12 h-1 bg-[#0099e6] rounded mb-5" />
        <h2 className="text-[clamp(1.7rem,3.5vw,2.6rem)] font-black text-[#0e2d6e] leading-tight mb-2">
          {visas.title}
        </h2>
        <p className="text-[#5a738a] max-w-[580px] mb-10">
          {visas.subtitle}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {visas.items.map((v, index) => (
            <div
              key={v.title}
              className="rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(14,45,110,0.10)]"
            >
              <div className={`${headClasses[index]} p-8`}>
                <div className="text-[0.68rem] font-bold tracking-[0.15em] text-white/65 uppercase mb-2">
                  {v.subtitle}
                </div>
                <h3 className="text-white font-bold text-lg">{v.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-[#5a738a] text-sm leading-relaxed mb-5">
                  {v.description}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {v.checks.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-3 text-sm text-[#1a2b4a] leading-snug"
                    >
                      <span className="w-5 h-5 bg-[#00bbe0] text-white rounded-full flex items-center justify-center text-[0.65rem] font-bold flex-shrink-0 mt-0.5">
                        ✓
                      </span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

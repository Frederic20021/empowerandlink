import { useLanguage } from "@/lib/i18n";

export default function Countries() {
  const { t } = useLanguage();
  const { countries } = t.recruitment;

  return (
    <section id="countries" className="py-16 lg:py-24 bg-white px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.22em] text-[#0099e6] uppercase mb-4 before:content-[''] before:w-[18px] before:h-[2px] before:bg-[#0099e6]">
          {countries.sectionLabel}
        </div>
        <div className="w-12 h-1 bg-[#0099e6] rounded mb-5" />
        <h2 className="text-[clamp(1.7rem,3.5vw,2.6rem)] font-black text-[#0e2d6e] leading-tight mb-2">
          {countries.title}
        </h2>
        <p className="text-[#5a738a] max-w-[580px] mb-10">
          {countries.subtitle}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {countries.items.map((c) => (
            <div
              key={c.name}
              className="rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(14,45,110,0.10)]"
            >
              <div className="flex items-center gap-4 p-6 bg-[#f4f7fc] border-b border-[#d0dce8]">
                <span className="text-[2.2rem]">{c.flag}</span>
                <div>
                  <h3 className="text-[#0e2d6e] font-bold">{c.name}</h3>
                  <span className="text-[#5a738a] text-sm">{c.meta}</span>
                </div>
              </div>
              <div className="p-6 flex flex-col gap-4">
                {c.points.map((p) => (
                  <div key={p.num} className="flex gap-4 items-start text-sm">
                    <span className="text-[0.7rem] font-bold text-[#0099e6] min-w-[1.5rem] mt-0.5">
                      {p.num}
                    </span>
                    <div>
                      <div className="font-bold text-[#0e2d6e] mb-0.5">
                        {p.title}
                      </div>
                      <div className="text-[#5a738a] leading-relaxed">
                        {p.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

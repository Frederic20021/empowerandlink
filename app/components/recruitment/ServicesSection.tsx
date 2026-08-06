import { useLanguage } from "@/lib/i18n";

export default function ServicesSection() {
  const { t } = useLanguage();
  const { services } = t.recruitment;

  const gradients = [
    "from-[#0e2d6e] to-[#1976d2]",
    "from-[#0057b8] to-[#0099e6]",
    "from-[#0099e6] to-[#00bbe0]",
  ];

  return (
    <section id="services" className="py-8 lg:py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-12 md:px-18">
        <div className="inline-flex items-center gap-2 text-[0.68rem] font-bold tracking-[0.22em] text-[#0099e6] uppercase mb-4">
          <span className="w-[18px] h-[2px] bg-[#0099e6]" />
          {services.sectionLabel}
        </div>
        <div className="w-12 h-1 rounded mb-5" />
        <h2 className="text-[clamp(1.7rem,3.5vw,2.6rem)] font-black text-white leading-tight mb-2">
          {services.title}
        </h2>
        <p className="text-[#5a738a] max-w-[580px] mb-10">
          {services.subtitle}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.items.map((s, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-[0_4px_24px_rgba(14,45,110,0.10)] hover:shadow-[0_8px_40px_rgba(14,45,110,0.16)] hover:-translate-y-1 transition-all duration-[0.28s] bg-white"
            >
              <div className={`bg-gradient-to-br ${gradients[index]} p-8 pb-5`}>
                <div className="text-[2.8rem] font-black text-white/20 leading-none mb-2">
                  {String.fromCharCode(65 + index)}
                </div>
                <h3 className="text-white font-bold text-base">{s.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-[#5a738a] text-sm leading-relaxed mb-5">
                  {s.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[0.7rem] font-semibold bg-[#e8eef8] text-[#0057b8] border border-[#d0dce8]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

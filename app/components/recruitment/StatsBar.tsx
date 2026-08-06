import { useLanguage } from "@/lib/i18n";

export default function StatsBar() {
  const { t } = useLanguage();
  const { stats } = t.recruitment;

  return (
    <div className="bg-[#0e2d6e] py-10 px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-around items-center flex-wrap gap-8">
          {stats.items.map((s, i) => (
            <span key={s.label} className="flex items-center contents">
              <div className="text-center">
                <div className="text-[2.4rem] font-black text-white leading-none">
                  {s.num}
                  <sub className="text-base font-medium text-white/80">{s.unit}</sub>
                </div>
                <div className="text-xs text-white/60 mt-1 tracking-wide">
                  {s.label}
                </div>
              </div>
              {i < stats.items.length - 1 && (
                <div className="w-px h-[50px] bg-white/15 max-md:hidden" />
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const stats = [
  { num: "0", unit: "円", label: "採用成功まで費用なし" },
  { num: "2", unit: "種類", label: "ビザ対応（特定技能・技人国）" },
  { num: "3", unit: "分野", label: "製造・ドライバー・自動車整備" },
  { num: "6", unit: "ヶ国", label: "対応言語" },
];

export default function StatsBar() {
  return (
    <div className="bg-[#0e2d6e] py-10 px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-around items-center flex-wrap gap-8">
          {stats.map((s, i) => (
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
              {i < stats.length - 1 && (
                <div className="w-px h-[50px] bg-white/15 max-md:hidden" />
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

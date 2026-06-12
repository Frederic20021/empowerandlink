const steps = [
  {
    num: '01',
    label: 'Notion業務改善',
    sub: '業務フローを整え、DX基盤をつくる',
    href: '#notion',
  },
  {
    num: '02',
    label: 'AI面接自動化',
    sub: '採用プロセスをAIで効率化する',
    href: '#ai-interview',
  },
  {
    num: '03',
    label: 'オフショア開発',
    sub: '世界のエンジニアで開発を加速',
    href: '#offshore',
  },
];

export default function FlowBar() {
  return (
    <div className="bg-white border-slate-200">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="flex items-stretch flex-col sm:flex-row">
          {steps.map((step, i) => (
            <div key={step.num} className="flex items-center flex-1">
              <a
                href={step.href}
                className="flex-1 flex items-center my-4 text-slate-900 no-underline transition-colors rounded-2xl hover:bg-blue-50 border-b sm:border-b-0 sm:border-r border-slate-200 last:border-0"
              >
              <div className="mx-auto flex items-center gap-3 px-4 py-5">
                <div
                  className="w-[34px] h-[34px] shrink-0 rounded-full flex items-center justify-center text-white text-[13px] font-extrabold"
                  style={{ background: 'linear-gradient(135deg, #2563eb, #1d4ed8)' }}
                >
                  {step.num}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold leading-tight">{step.label}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{step.sub}</div>
                </div>
              </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

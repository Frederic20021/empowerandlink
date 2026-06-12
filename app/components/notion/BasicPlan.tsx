const includes = [
  'Notionワークスペースの初期構築',
  'オンライン定例ミーティング 月3回まで（各60分）',
  'チャットでのご相談対応（原則営業日）',
  '既存のExcel・スプレッドシートからの軽量データ移行（1〜2ファイル目安）',
  '基本的なView・テンプレートの作成',
  'データベース 1〜3つまで（契約期間により異なる）',
];

export default function BasicPlan() {
  return (
    <section className="py-10 bg-slate-50" id="plan">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="text-center mb-10">
          <span className="inline-block text-[11px] font-bold tracking-[0.12em] uppercase text-blue-600 bg-blue-600/[0.08] border border-blue-600/25 px-3 py-1 rounded-full mb-4">
            1. 基本プラン
          </span>
          <h2
            className="font-extrabold leading-tight text-slate-900"
            style={{ fontSize: 'clamp(22px, 3.5vw, 34px)' }}
          >
            基本プランに含まれるもの
          </h2>
        </div>

        <div
          className="rounded-3xl p-14 text-center relative overflow-hidden sm:p-9 xs:p-5"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #eff6ff 100%)',
            border: '1px solid rgba(0,0,0,0.08)',
          }}
        >
          {/* background glow */}
          <div
            className="absolute pointer-events-none"
            style={{
              bottom: '-80px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '500px',
              height: '200px',
              background: 'radial-gradient(ellipse, rgba(37,99,235,0.05) 0%, transparent 70%)',
            }}
          />
          <div className="relative z-10">
            <div
              className="font-black tracking-tight text-blue-600 leading-none"
              style={{ fontSize: 'clamp(36px, 8vw, 60px)', letterSpacing: '-0.03em' }}
            >
              <sup className="text-[0.35em] font-bold align-super">¥</sup>
              40,000
              <sub className="text-[0.28em] font-semibold text-slate-600">/月（税別）</sub>
            </div>
            <p className="text-slate-600 text-sm mt-2 mb-8">
              以下のサービスはすべて<strong className="text-slate-900">基本料金内</strong>でご提供します
            </p>
            <p className="text-base font-bold text-slate-900 mb-5">
              ✅ 基本プランに含まれるサービス
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left mt-2">
              {includes.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2.5 bg-white/60 border border-black/[0.08] rounded-lg px-4 py-3.5 text-sm text-slate-600"
                >
                  <span className="text-blue-600 font-bold shrink-0 mt-0.5">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-5 text-[13px] text-slate-400 text-center">
          まずは「最小構成」から始めて、必要に応じて拡張していく運用が、最も無理なく定着します。
        </p>
      </div>
    </section>
  );
}

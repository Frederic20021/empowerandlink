const tableRows = [
  {
    industry: '① 製造業',
    dbCount: '6〜8',
    price: '¥145,000〜¥205,000',
    themes: '日報・在庫・品質記録・設備保全',
  },
  {
    industry: '② 建設業（工務店・設備）',
    dbCount: '7〜10',
    price: '¥169,500〜¥229,500',
    themes: '現場写真・原価管理・2024年問題対応',
  },
  {
    industry: '③ 士業（行政書士・税理士など）',
    dbCount: '5〜7',
    price: '¥88,000〜¥128,000',
    themes: '期限管理・書類テンプレート',
  },
];

const industryCards = [
  {
    title: '① 製造業 — 20名・年商3億の町工場の場合',
    pain: 'よくあるお悩み：現場日報が紙 → Excel転記で二重入力 / 在庫・仕掛品が見えない / 技能伝承の属人化 / ISO品質記録',
    dbNote: '構築するデータベース（7個）：案件 / 作業日報 / 在庫 / 設備管理 / 品質記録 / 顧客 / 仕入先',
    rows: [
      { label: '従業員20人（16〜30名枠）', val: '+¥20,000' },
      { label: '外部連携（Gmail+Slack+freee）', val: '+¥15,000' },
      { label: 'DB追加（4個 × ¥20,000）', val: '+¥80,000' },
      { label: '初期データ移行（中〜一括）', val: '¥80,000' },
    ],
    total: '¥155,000〜',
  },
  {
    title: '② 建設業 — 15名・年商2億の工務店の場合',
    pain: 'よくあるお悩み：現場写真がLINEにバラバラ / 2024年問題の労務時間管理 / 見積→原価→請求の標準管理 / 安全書類',
    dbNote: '構築するデータベース（8個）：案件 / 見積 / 発注・原価 / 請求 / 職人・協力会社 / 社員 / 写真・図面 / 工程表',
    rows: [
      { label: '従業員15人', val: '+¥10,000' },
      { label: '写真・図面ストレージ対応', val: '+¥10,000' },
      { label: '訪問サポート（月1回・1時間想定）', val: '+¥16,500' },
    ],
    total: '¥189,500',
  },
  {
    title: '③ 士業 — 5名・行政書士事務所の場合',
    pain: 'よくあるお悩み：案件期限の管理が命 / 書類テンプレートの氾濫 / 顧客ステータスが頭の中 / 秘匿情報の取扱い',
    dbNote: '構築するデータベース（5個）：顧客 / 案件 / 期限・タスク / 書類テンプレート / 請求',
    rows: [
      { label: '従業員5人', val: '¥0' },
      { label: 'サポート（月1オンライン）', val: '¥0' },
    ],
    total: '¥88,000',
  },
];

export default function IndustryExamples() {
  return (
    <section
      className="py-10"
      id="industry"
      style={{
        background: 'linear-gradient(180deg, transparent 0%, rgba(37,99,235,0.04) 50%, transparent 100%)',
      }}
    >
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="text-center mb-6">
          <span className="inline-block text-[11px] font-bold tracking-[0.12em] uppercase text-blue-600 bg-blue-600/[0.08] border border-blue-600/25 px-3 py-1 rounded-full mb-4">
            3. 業種別の参考プラン例
          </span>
          <h2
            className="font-extrabold leading-tight text-slate-900 mb-3"
            style={{ fontSize: 'clamp(22px, 3.5vw, 34px)' }}
          >
            業種ごとの典型的な<br />ご利用イメージ
          </h2>
          <p className="text-slate-600 text-[15px] max-w-[600px] mx-auto">
            業種ごとに必要なデータベースの数や運用の難しさが違います。実際にご支援することの多い12業種について典型的なご利用イメージをまとめました。※下記はすべて12ヶ月契約をベースとした参考額です。
          </p>
        </div>

        {/* Summary table */}
        <div className="overflow-x-auto rounded-2xl border border-black/[0.08] mb-6">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-blue-50">
                <th className="px-5 py-3.5 text-left text-[12px] text-slate-400 font-bold tracking-[0.05em] border-b border-black/[0.08]">業種</th>
                <th className="px-5 py-3.5 text-left text-[12px] text-slate-400 font-bold tracking-[0.05em] border-b border-black/[0.08]">典型DB数</th>
                <th className="px-5 py-3.5 text-left text-[12px] text-slate-400 font-bold tracking-[0.05em] border-b border-black/[0.08]">月額目安（12ヶ月契約）</th>
                <th className="px-5 py-3.5 text-left text-[12px] text-slate-400 font-bold tracking-[0.05em] border-b border-black/[0.08]">主な支援テーマ</th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, i) => (
                <tr key={i} className="hover:bg-blue-600/[0.02] transition-colors">
                  <td className="px-5 py-4 text-slate-600 border-b border-black/[0.08] last:border-0">{row.industry}</td>
                  <td className="px-5 py-4 text-slate-600 border-b border-black/[0.08]">{row.dbCount}</td>
                  <td className="px-5 py-4 text-blue-600 font-bold border-b border-black/[0.08]">{row.price}</td>
                  <td className="px-5 py-4 text-slate-600 border-b border-black/[0.08]">{row.themes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Detail cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {industryCards.map((card) => (
            <div
              key={card.title}
              className="bg-white border border-black/[0.08] rounded-2xl p-7"
            >
              <div className="text-[15px] font-bold text-slate-900 mb-1.5">{card.title}</div>
              <div
                className="text-[13px] text-slate-400 mb-4 px-3.5 py-2.5 rounded-r-lg"
                style={{
                  background: 'rgba(37,99,235,0.03)',
                  borderLeft: '3px solid #2563eb',
                }}
              >
                {card.pain}
              </div>
              <p className="text-xs text-slate-400 mb-2.5">{card.dbNote}</p>
              <table className="w-full text-[13px]">
                <tbody>
                  {card.rows.map((row, i) => (
                    <tr key={i}>
                      <td className="py-[5px] text-slate-600">{row.label}</td>
                      <td className="py-[5px] text-right text-blue-600 font-semibold">{row.val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-3 pt-2.5 border-t border-black/[0.08] flex justify-between font-bold text-sm">
                <span>月額合計</span>
                <span className="text-blue-600">{card.total}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

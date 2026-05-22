type TableRow = { cols: string[] };

interface Factor {
  point: string;
  icon: string;
  title: string;
  analogy: string;
  desc: string;
  tableHeaders: string[];
  tableRows: TableRow[];
  footnote?: string;
}

const factors: Factor[] = [
  {
    point: 'POINT 01',
    icon: '👨‍👩‍👧‍👦',
    title: '従業員数',
    analogy: '🎒 家族旅行 と 団体ツアー',
    desc: '家族4人なら宿の手配で旅は成立します。でも30人の団体ツアーになると、バス手配・食事の流れ・集合時間のルール...と「運営そのもの」が仕事の大半になります。利用者が増えるほど権限設計・命名ルール・教育コストが大きくなります。',
    tableHeaders: ['従業員数', '追加料金/月'],
    tableRows: [
      { cols: ['1〜5人', '¥0（基本料金内）'] },
      { cols: ['6〜15人', '+¥10,000'] },
      { cols: ['16〜30人', '+¥20,000'] },
      { cols: ['31〜50人', '+¥35,000'] },
      { cols: ['51人以上', '個別お見積もり'] },
    ],
  },
  {
    point: 'POINT 02',
    icon: '📱',
    title: 'データベース(DB)の数',
    analogy: '📱 スマホの年割プラン',
    desc: 'DBを追加するということは「新しい収納棚と仕切り」を設けるイメージです。何をどこに入れるか、誰が出し入れしてよいかのルールを一式決める手間が発生します。料金体系はスマホの年割プランと同じで、長期契約ほどお得な設計にしています。',
    tableHeaders: ['契約期間', '無料DB数', '追加/個あたり'],
    tableRows: [
      { cols: ['12ヶ月契約（おすすめ）', '3つまで', '+¥20,000/月'] },
      { cols: ['6ヶ月契約', '2つまで', '+¥30,000/月'] },
      { cols: ['月ごと契約', '初回の1つまで', '+¥35,000/月'] },
    ],
  },
  {
    point: 'POINT 03',
    icon: '📦',
    title: '初期データ移行の量',
    analogy: '🚚 引越し業者のプラン選び',
    desc: 'ダンボール10箱なら自分で詰められます。100箱を超えたら業者のおまかせプランに。Excel・スプレッドシート・紙台帳をNotionの形に整え直す作業は、まさに引越しの荷造りと同じです。',
    tableHeaders: ['移行ボリューム', '初期費用（一括）', '具体例'],
    tableRows: [
      { cols: ['中型（Standard）', '¥80,000', '5ファイル / 1〜3,000行'] },
      { cols: ['大規模（Enterprise）', '¥400,000〜', '複数システム / 名寄せ・データ整備が必要'] },
    ],
    footnote: '紙台帳のデータ化は +¥50,000/100枚 を別途加算（スキャン+入力代行費用）',
  },
  {
    point: 'POINT 04',
    icon: '🔌',
    title: '外部ツール連携の数',
    analogy: '📱 スマホに繋ぐ周辺機器',
    desc: 'イヤホン1個ならBluetoothで繋いで終わりです。でもスマートウォッチ・ワイヤレス充電器・カーナビ・スマート家電...と繋ぎ先が増えるほどペアリング設定や保守の手間が積み上がります。Notionの外部連携（Google・Slack・freee・kintoneなど）も同じ構造です。',
    tableHeaders: ['連携数', '追加料金/月', '例'],
    tableRows: [
      { cols: ['2〜3個', '+¥8,000', 'Slack / Gmail を追加'] },
      { cols: ['6個以上', '+¥25,000〜', 'API自前構築を含む高度連携'] },
    ],
  },
  {
    point: 'POINT 05',
    icon: '🤖',
    title: '自動化・AIエージェント',
    analogy: '🗺️ カーナビのルート設定',
    desc: '「目的地に着くだけ」なら住所を入れて終わりです。でも「高速優先・渋滞回避・燃費重視・ETC割引」と条件を重ねるほど計算と検証が複雑になります。Notionの自動化も同じく、条件分岐が増えるほど設計・テストのコストが膨らみます。',
    tableHeaders: ['自動化レベル', '追加料金/月', '内容'],
    tableRows: [
      { cols: ['シンプル', '¥0（基本料金内）', 'ステータス変更で日付自動記録など'] },
      { cols: ['中級', '+¥10,000', 'AIエージェント1体 / 定期リマインド'] },
      { cols: ['上級', '+¥25,000', '複雑なFormula / 複数AIエージェント / 条件分岐多数'] },
    ],
  },
  {
    point: 'POINT 06',
    icon: '🏋️',
    title: '定例ミーティング・追加サポート',
    analogy: '💪 ジムの月会費プラン',
    desc: '「月会費でグループレッスンが月3回まで無料、4回目以降は1回ずつ追加料金」—— そんなジムの月会費プランをイメージしてください。オンライン定例ミーティングは月3回まで基本料金に含まれます。4回目以降は時間制で別途加算します。',
    tableHeaders: ['形式', '追加料金（税込）/回'],
    tableRows: [
      { cols: ['オンライン', '¥11,000'] },
      { cols: ['訪問（静岡西部地区）', '¥16,500 ＋交通費実費'] },
    ],
    footnote: '対象エリア：浜松市・湖西市・磐田市・袋井市・掛川市・菊川市・御前崎市・森町',
  },
];

export default function PricingFactors() {
  return (
    <section className="py-10 bg-slate-50" id="factors">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="text-center mb-7">
          <span className="inline-block text-[11px] font-bold tracking-[0.12em] uppercase text-blue-600 bg-blue-600/[0.08] border border-blue-600/25 px-3 py-1 rounded-full mb-4">
            2. 料金が決まる仕組み
          </span>
          <h2
            className="font-extrabold leading-tight text-slate-900 mb-4"
            style={{ fontSize: 'clamp(22px, 3.5vw, 34px)' }}
          >
            料金が決まる「6つのポイント」
          </h2>
          <div className="w-12 h-[3px] bg-blue-600 rounded mx-auto mt-4 mb-4" />
          <p className="text-slate-600 text-[15px] max-w-[600px] mx-auto">
            基本料金に対して、以下の6つの観点からカスタマイズ料金が加算されます。それぞれを身近な比喩でご説明します。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {factors.map((f) => (
            <div
              key={f.point}
              className="bg-white border border-black/[0.08] rounded-2xl p-7 transition-all duration-200 hover:border-blue-600/25 hover:-translate-y-0.5"
            >
              <div className="text-[11px] font-bold tracking-[0.1em] text-blue-600 mb-2">{f.point}</div>
              <div className="text-[28px] mb-3">{f.icon}</div>
              <div className="text-[17px] font-bold text-slate-900 mb-2">{f.title}</div>
              <div className="text-[13px] text-blue-600 font-semibold mb-3">{f.analogy}</div>
              <p className="text-sm text-slate-600 leading-[1.7] mb-4">{f.desc}</p>

              <table className="w-full border-collapse text-[13px]">
                <thead>
                  <tr>
                     {f.tableHeaders.map((h, i) => (
                      <th
                        key={i}
                        className={`py-1.5 border-b border-black/[0.08] font-semibold ${
                          i === f.tableHeaders.length - 1
                            ? 'text-right text-blue-600'
                            : 'text-left text-slate-400 pr-2'
                        }`}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {f.tableRows.map((row, ri) => (
                    <tr key={ri}>
                      {row.cols.map((col, ci) => (
                        <td
                          key={ci}
                          className={`py-[7px] border-b border-black/[0.04] ${
                            ci === row.cols.length - 1
                              ? 'text-right text-blue-600 font-semibold'
                              : 'text-slate-600 pr-2'
                          }`}
                        >
                          {col}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>

              {f.footnote && (
                <p className="text-xs text-slate-400 mt-2.5">
                  {f.footnote}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

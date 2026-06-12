const reasons = [
  {
    icon: '📁',
    num: '01',
    title: '情報をひとつの環境に集約',
    desc: '顧客情報・案件進捗・会議記録・入金状況・社内ナレッジをNotionに統合。検索・共有・更新がひとつの画面で完結します。',
  },
  {
    icon: '👁️',
    num: '02',
    title: '業務を見える化し、属人化を解消',
    desc: '個人の頭の中に依存していた業務フローを可視化。進捗確認・抜け漏れ防止・引き継ぎの標準化が、チーム全体で実現できます。',
  },
  {
    icon: '🎯',
    num: '03',
    title: '必要な情報を、必要な人に',
    desc: '同じデータベースから、営業担当・管理職・現場スタッフそれぞれの役割に合ったビューを即座に提供。情報収集の手間がなくなります。',
  },
  {
    icon: '🤖',
    num: '04',
    title: 'AIを日常業務に溶け込ませる',
    desc: '議事録整理・メール下書き・タスク抽出などをNotion内のデータと直接連携。ブラウザを介さずAIを継続的に業務へ活用できます。',
  },
  {
    icon: '📚',
    num: '05',
    title: 'ナレッジが会社の資産になる',
    desc: '担当者個人の経験・ノウハウ・対応履歴を体系的に蓄積。誰でも参照・活用できる組織の知的資産として残していきます。',
  },
  {
    icon: '🌱',
    num: '06',
    title: 'スモールスタートで着実に定着',
    desc: 'まず一部の業務管理から始め、使い勝手を確認しながら段階的に拡張できます。大規模な初期投資や全社導入は不要です。',
  },
];

export default function Reasons() {
  return (
    <section className="py-14 bg-blue-50" id="reasons">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="text-center mb-10">
          <span className="inline-block text-[11px] font-bold tracking-[0.12em] uppercase text-blue-600 bg-blue-600/[0.08] border border-blue-600/25 px-3 py-1 rounded-full mb-4">
            WHY NOTION
          </span>
          <h2
            className="font-extrabold leading-tight text-slate-900 mb-3"
            style={{ fontSize: 'clamp(22px, 3.5vw, 34px)' }}
          >
            Notion業務改善が<br />
            <span className="text-blue-600">選ばれる理由</span>
          </h2>
          <p className="text-slate-600 text-[15px] max-w-[600px] mx-auto">
            課題の根本に向き合い、御社の業務を「仕組み」として整える。それが私たちのアプローチです。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {reasons.map((r) => (
            <div
              key={r.num}
              className="bg-white border border-black/[0.08] rounded-2xl p-7 flex gap-5 items-start transition-all duration-200 hover:border-blue-600/25 hover:-translate-y-0.5"
            >
              <div
                className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-[22px] shrink-0"
                style={{ background: 'linear-gradient(135deg, #2563eb, #1d4ed8)' }}
              >
                {r.icon}
              </div>
              <div>
                <div className="text-[11px] font-bold text-blue-600 tracking-[0.08em] mb-1">{r.num}</div>
                <div className="text-[15px] font-bold mb-1.5 leading-snug text-slate-900">{r.title}</div>
                <p className="text-sm text-slate-600 leading-[1.75]">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

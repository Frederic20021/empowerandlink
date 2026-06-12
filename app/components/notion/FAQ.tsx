'use client';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <details className="group text-black max-w-[600px] bg-white border border-black/[0.08] rounded-2xl overflow-hidden">
      <summary className="px-6 py-5 text-[15px] font-semibold cursor-pointer flex justify-between items-start gap-4 select-none list-none [&::-webkit-details-marker]:hidden group-open:text-blue-600 group-open:border-b group-open:border-black/[0.08]">
        {question}
        <span className="text-xl font-light text-slate-400 shrink-0 leading-none group-open:hidden">+</span>
        <span className="hidden text-xl font-light text-blue-600 shrink-0 leading-none group-open:inline">−</span>
      </summary>
      <div className="px-6 py-5 text-sm text-slate-600 leading-[1.8]">{answer}</div>
    </details>
  );
}

const faqs: FAQItemProps[] = [
  {
    question: 'Q. 途中でDBやサポートを追加・減らすことはできますか？',
    answer: 'はい、原則として翌月から反映いたします。なお、12ヶ月契約期間中の総月数（12ヶ月分）は維持していただく前提となります。',
  },
  {
    question: 'Q. 初期構築期間中にも月額料金は発生しますか？',
    answer: '初期構築の開始月から月額料金が発生します。初期データ移行費用は別途、構築完了時に一括でご請求いたします。',
  },
  {
    question: 'Q. Notion自体のライセンス料金は別途必要ですか？',
    answer: 'はい、Notion本体のサブスクリプション（Plus/Business/Enterprise）は別途、御社で直接ご契約いただきます。本サービスは「Notionを最大限活用するための構築・運用支援」が対象です。',
  },
  {
    question: 'Q. データの所有権はどちらにありますか？',
    answer: '作成したワークスペースおよび内部データは、すべて御社に帰属します。契約終了後もそのままお使いいただけます。',
  },
  {
    question: 'Q. 契約期間の途中で解約することはできますか？',
    answer: (
      <>
        やむを得ない事情（廃業・事業変更・経営的な大変更など）による中途解約は、書面でのご相談ベースで対応いたします。一般的な中途解約の場合、原則として
        <strong className="text-slate-900">契約期間の月額料金の50%相当</strong>
        を解約金としてご請求いたします（例：残4ヶ月で月額¥120,000の場合、¥240,000）。ご解約後には、構築済みのNotionワークスペース・データをすべて御社に残します。
      </>
    ),
  },
  {
    question: 'Q. 機密情報・個人情報の取り扱いはどうなりますか？',
    answer: (
      <>
        必要に応じて秘密保持契約（NDA）を別途締結いたします（御社のご希望の場合も可能）。御社雛形での締結も可能です。サービス提供にあたっては、必要最低限の情報のみアクセスし、作業ログを残す運用とします。御社作業アカウントは常に「ゲスト権限」にて作業員の名前で登録し、
        <strong className="text-slate-900">契約終了時に即座にアクセス権を削除</strong>
        いただけます。個人情報（医療・介護）を扱う場合は、別途
        <strong className="text-slate-900">個人情報コンプラ対応（+¥15,000/月）</strong>
        にて、権限設計・監査ログ運用まで一式を構築いたします。
      </>
    ),
  },
];

export default function FAQ() {
  return (
    <section className="py-10 bg-slate-50" id="faq">
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="text-center mb-6">
          <span className="inline-block text-[11px] font-bold tracking-[0.12em] uppercase text-blue-600 bg-blue-600/[0.08] border border-blue-600/25 px-3 py-1 rounded-full mb-4">
            6. よくあるご質問
          </span>
          <h2
            className="font-extrabold leading-tight text-slate-900 mb-4"
            style={{ fontSize: 'clamp(22px, 3.5vw, 34px)' }}
          >
            よくあるご質問
          </h2>
          <div className="w-12 h-[3px] bg-blue-600 rounded mx-auto" />
        </div>

        <div className="flex flex-col gap-3 md:px-40 sm:px-20 px-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

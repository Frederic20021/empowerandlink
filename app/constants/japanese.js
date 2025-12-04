export const coursePoint = [
  {
    id: 1,
    question: "無料体験は、どこまでできますか？",
    answer: "無料体験では、実際の授業に加えてお客様の現在のレベルチェックします。目標設定、学習プランの計画を立てた上で、体験後に詳細なフィードバックもお渡しします。",
    image: '/japanese/study1.jpg'
  },
  {
    id: 2,
    question: "レッスン予約のキャンセルはいつまでできますか？",
    answer: "予約キャンセルは24時間前まで可能です。急な予定変更の場合は、できるだけ早めにご連絡ください。当日キャンセルの場合は1回分消化となります。",
    image: '/japanese/study2.jpg',
  },
  {
    id: 3,
    question: "月額と単発プランの違いは何ですか？",
    answer: "月額プランは定期的な学習を継続したい方におすすめです。レッスン料金がお得になり、予約も優先的に取れます。単発プランは必要な時だけ受講したい方向けで、1回ずつお支払いいただくプランです。",
    image: '/japanese/study3.jpg',
  },
]

export const staffMessage = {
  message: "日本では出会うことのなかった文化や価値観に触れながら、英語だけでなく将来のキャリアに向けたスキルアップができる場所がILACです。\n個性的で熱心な教師陣、各部署のスペシャリスト、世界中から集まる学生のみなさまがILACをユニークなものにしてくれます。\n様々な文化を持つカナダは外国人にも対等なチャンスがあり、夢を実現するのはみなさまの頑張り次第！ここで人生を変えてみませんか？",
  name: "山田太郎",
  image: '/hero/avatar1.jpg',
}
 
export const ProfInfo = [
  /*{
    id: 1,
    name: "",
    kana: "",
    sections: [
      {
        title: "【免許・資格】",
        items: [
          "中学・高等学校教論一種免許状 (英語)",
          "実用英語技能検定1級",
          "TOEIC 960点",
        ]
      },
      {
        title: "【経歴】",
        items: [
          "私立高校の英語科専任教諭\n\t(進路指導部・国際教育委員会)",
          "大手日本メーカーにて海外営業\n\t経営・事業企画を担当"
        ]
      }
    ],
    image: "placeholder.jpg",
  },*/
  {
    id: 1,
    name: "Si Thu Lin",
    kana: "シ トゥ リン",
    sections: [
      {
        title: "【免許・資格】",
        items: [
          "JLPT (日本語能力試験) N1",
          "TOEIC 940点",
        ]
      },
      {
        title: "【経歴】",
        items: [
          "日本語通訳・翻訳 3年",
          "留学生論文コンテスト(2024) 銅賞",
        ]
      }
    ],
    image: "/english/prof2.jpg",
  },
];

export const courses = [
  {
  // You can add more courses here
    id: 1,
    prof: "Si Thu Lin",
    tags: ["企業向け", "単発"],
    payType: "単発",
    title: "セミナー、講習の通訳",
    image: "/japanese/interpretation.jpg",
    description:
      "外国籍社員、実習生向けのセミナー、研修や講習会での通訳サービスを提供します。専門用語にも対応し、スムーズなコミュニケーションをサポートいたします。",
    features: {
      language: "日本語⇔英語⇔ミャンマー語",
      
      important: [
        "時間単位で調整可能",
        "静岡県内は交通費無料",
      ],
    },
    pricing: {
      duration: "一日",
      price: "¥18,000",
    },
  },
]
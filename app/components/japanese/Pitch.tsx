import Image from "next/image";

export default function Pitch() {
  return (
    <section className="bg-[#e5eaff] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            日本語コース
          </h1>
          <p className="text-gray-600 text-lg">
            世界75カ国以上から学生が集まるグローバルな大規模校
          </p>
          <div className="inline-block mt-4">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
              1ヶ月　無料体験
            </span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              エンパワービジネス
              <br />
              日本語なら
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              基礎部署・空席提前のある通勤によるマンツーマン指導で、ビジネス不安当に焦る必要を効果として言語、一人ひとりのレベルや目的に合わせてレッスンを超越化できるから、短期間でも確かな成果が期待できます。さらに、日程に予約できる余剰時スケジュールと、継続しやすい料金プランで、自分のペースで無理なく続けられます。
            </p>

            {/* Feature Icons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mb-2">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                  </svg>
                </div>
                <p className="text-xs font-semibold text-gray-700">
                  マンツーマンで
                  <br />
                  無制限
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mb-2">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
                  </svg>
                </div>
                <p className="text-xs font-semibold text-gray-700">
                  1レッスン
                  <br />
                  30分
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mb-2">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" />
                  </svg>
                </div>
                <p className="text-xs font-semibold text-gray-700">
                  選べる
                  <br />
                  スケジュール
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center mb-2">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-xs font-semibold text-gray-700">
                  続けやすい
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/japanese/japanese1.jpg"
                alt="日本語教育 - オンライン学習"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";
import { getAssetPath } from "../../utils/paths";

export default function Pitch() {
  return (
      <div className="text-black relative overflow-hidden min-h-screen">
        {/* Curved Background - Full Width & Height */}
        <div className="pointer-events-none absolute left-0 right-0 top-0 bottom-0">
          <svg className="w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none">
            <path fill="#ebf8ff" d="M0,96L60,90.7C120,85,240,75,360,80C480,85,600,107,720,122.7C840,139,960,149,1080,138.7C1200,128,1320,96,1380,80L1440,64V900H1380C1320,900,1200,900,1080,900C960,900,840,900,720,900C600,900,480,900,360,900C240,900,120,900,60,900H0Z" />
          </svg>
        </div>
        {/* Main Content Grid */}
        <div className="relative z-10 max-w-4xl grid md:grid-cols-2 mx-auto px-3 gap-8 items-center py-20">
          {/* Left Content */}
        <div className="space-y-4 py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            日本語コース
          </h1>
          <p className="text-gray-600 text-lg">
            世界75カ国以上から学生が集まるグローバルな日本語教育サービス
          </p>
          <div className="flex mt-4 gap-4">
            <span className="bg-blue-100 px-4 py-2 rounded-full text-sm font-semibold">
              1ヶ月
            </span>
            <span className="bg-blue-100 px-4 py-2 rounded-full text-sm font-semibold">
              無料体験
            </span>
          </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              エンパワービジネス
              <br />
              日本語なら
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              基礎部署・空席提前のある通勤によるマンツーマン指導で、ビジネス不安当に焦る必要を効果として言語、一人ひとりのレベルや目的に合わせてレッスンを超越化できるから、短期間でも確かな成果が期待できます。さらに、日程に予約できる余剰時スケジュールと、継続しやすい料金プランで、自分のペースで無理なく続けられます。
            </p>

            <Image 
              src={getAssetPath("/japanese/pitch.jpg")}
              alt="pitchImage"
              width={100}
              height={100}
              className="w-full object-cover"
              />
          </div>

          {/* Right Image */}
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={getAssetPath("/japanese/japanese1.jpg")}
                alt="日本語教育 - オンライン学習"
                width={300}
                height={300}
                className=""
              />
          </div>
        </div>
      </div>
  );
}
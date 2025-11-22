import Image from "next/image";
import { getAssetPath } from "../../utils/paths";

export default function Pitch() {
  return (
    <>
    <div className="text-black relative overflow-hidden min-h-screen px-8 md:px-16">
      {/* Curved Background - Full Width & Height */}
      <div className="pointer-events-none absolute left-0 right-0 top-15 bottom-0 z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,96L60,90.7C120,85,240,75,360,80C480,85,600,107,720,122.7C840,139,960,149,1080,138.7C1200,128,1320,96,1380,80L1440,64V900H1380C1320,900,1200,900,1080,900C960,900,840,900,720,900C600,900,480,900,360,900C240,900,120,900,60,900H0Z"
          />
        </svg>
      </div>
      {/* Main Content Grid */}
      <div className="relative z-10 max-w-4xl grid md:grid-cols-2 mx-auto px-3 gap-8 items-center py-20">
        <div className="space-y-8 mt-20 text-black">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            日本語コース
          </h1>
          <p className="text-base sm:text-sm md:text-lg lg:text-xl">
            世界75カ国以上から学生が集まるグローバルな日本語教育サービス
          </p>
          <div className="flex mt-4 gap-4">
            <span className="bg-[#ebf8ff] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm md:text-base font-semibold">
              1ヶ月
            </span>
            <span className="bg-[#ebf8ff] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm md:text-base font-semibold">
              無料体験
            </span>
          </div>
          <h2 className="text-xl  md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
            エンパワービジネス
            <br />
            日本語なら
          </h2>

          <p className="text-sm md:text-lg lg:text-lg text-gray-700 leading-relaxed ">
            基礎部署・空席提前のある通勤によるマンツーマン指導で、ビジネス不安当に焦る必要を効果として言語、一人ひとりのレベルや目的に合わせてレッスンを超越化できるから、短期間でも確かな成果が期待できます。さらに、日程に予約できる余剰時スケジュールと、継続しやすい料金プランで、自分のペースで無理なく続けられます。
          </p>
        </div>

        <div className="rounded-lg overflow-hidden shadow-2xl">
          <Image
            src={getAssetPath("/japanese/japaneseTeaching.jpg")}
            alt="日本語教育 - オンライン学習"
            width={500}
            height={500}
            className="max-w-2xl max-h-96 object-center object-cover w-full"
          />
        </div>
      </div>

    </div>
      <div className="relative z-20 py-4 bg-[#e5eaff] w-full rounded-t-lg">
        <Image
          src={getAssetPath("/japanese/pitchtest.jpg")}
          alt="pitchImage"
          width={600}
          height={500}
          className="object-fit mx-auto max-w-[300px] md:max-w-2xl"
        />
      </div>
      </>
  );
}

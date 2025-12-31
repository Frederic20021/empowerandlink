import Image from "next/image";
import Link from "next/link";

import { courses } from "@/app/constants/japanese";
import { getAssetPath } from "@/app/utils/paths";

export default function Hero() {
  const tags = Array.from(
    new Set(
      courses.flatMap((course) => course.tags ?? [])
    )
  ).slice(0, 6);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-4 py-2 shadow-sm ring-1 ring-gray-200">
              <span className="text-xs font-semibold text-blue-700">
                日本語サービス
              </span>
              <span className="text-xs text-gray-500">個別サポート</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              <span className="inline">
                仕事で使える<span className="text-blue-700"> 日本語</span>を、
              </span>
              必要な形で。
            </h1>

            <p className="text-base md:text-lg font-medium text-gray-600 leading-relaxed">
              外国籍社員・実習生向けの研修、セミナー・講習での通訳、学習サポートまで。
              目的・現場に合わせて内容を設計し、スムーズなコミュニケーションと成果を支えます。
            </p>

            <div className="flex flex-wrap gap-2">
              {(tags.length ? tags : ["企業向け", "単発"]).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-blue-100 text-blue-800 px-3 py-1 text-xs font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-blue-400 px-5 py-3 text-sm font-bold text-white shadow-sm hover:bg-blue-700"
              >
                お問い合わせ
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-bold text-blue-700 ring-1 ring-blue-200 shadow-sm hover:bg-blue-50"
              >
                無料体験・無料相談
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-200">
              <Image
                src={getAssetPath("/japanese/japaneseTeaching.jpg")}
                alt="日本語サービス"
                width={960}
                height={720}
                className="h-[280px] sm:h-[360px] lg:h-[420px] w-full object-cover"
                priority
              />
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-200">
                <p className="text-xs text-gray-500">対応</p>
                <p className="mt-1 text-sm font-extrabold text-gray-900">法人・個人</p>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-200">
                <p className="text-xs text-gray-500">形式</p>
                <p className="mt-1 text-sm font-extrabold text-gray-900">オンライン中心</p>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-200">
                <p className="text-xs text-gray-500">内容</p>
                <p className="mt-1 text-sm font-extrabold text-gray-900">現場に最適化</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

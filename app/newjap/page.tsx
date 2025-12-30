"use client";

import Image from "next/image";
import Link from "next/link";
import { Noto_Sans_JP } from "next/font/google";
import { useMemo } from "react";
import { FaCheckCircle, FaPhone, FaCheck } from "react-icons/fa";

import { getAssetPath } from "@/app/utils/paths";
import {
  commonChallenges,
  courses,
  coursePoint,
  ProfInfo,
  recommendedFor,
  staffMessage,
} from "@/app/constants/japanese";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export default function JapanesePage() {

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    for (const course of courses) {
      for (const tag of course.tags ?? []) tags.add(tag);
    }
    return Array.from(tags);
  }, []);

  return (
    <div
      className={`${notoSans.className} min-h-screen bg-white text-gray-900`}
    >
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-4 py-2 shadow-sm ring-1 ring-gray-200">
                <span className="text-xs font-semibold text-blue-700">
                  日本語サービス
                </span>
                <span className="text-xs text-gray-500">
                  個別サポート
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                <span className="inline">仕事で使える<span className="text-blue-700"> 日本語</span>を、</span>
                必要な形で。
              </h1>

              <p className="text-base md:text-lg font-medium text-gray-600 leading-relaxed">
                外国籍社員・実習生向けの研修、セミナー・講習での通訳、学習サポートまで。
                目的・現場に合わせて内容を設計し、スムーズなコミュニケーションと成果を支えます。
              </p>

              <div className="flex flex-wrap gap-2">
                {(allTags.length ? allTags : ["企業向け", "単発"])
                  .slice(0, 6)
                  .map((tag) => (
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
                  <p className="mt-1 text-sm font-extrabold text-gray-900">
                    法人・個人
                  </p>
                </div>
                <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-200">
                  <p className="text-xs text-gray-500">形式</p>
                  <p className="mt-1 text-sm font-extrabold text-gray-900">
                    オンライン中心
                  </p>
                </div>
                <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-200">
                  <p className="text-xs text-gray-500">内容</p>
                  <p className="mt-1 text-sm font-extrabold text-gray-900">
                    現場に最適化
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="bg-white">
        <div className="mx-auto text-center max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="rounded-2xl bg-blue-50 p-6 md:p-8 ring-1 ring-blue-100">
            <h3 className="text-2xl md:text-4xl my-2 font-bold text-blue-900">
              こんなことに
              <span className="underline underline-offset-4">困って</span>
              いませんか？
            </h3>
            <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
              <Image
                src={getAssetPath("/japanese/struggle1.jpg")}
                alt="困っている外国人社員"
                width={400}
                height={250}
                className="hidden md:block rounded-lg mt-4 shadow-sm ring-1 ring-blue-100"
              />
              <div className="mt-4 grid gap-3 font-bold w-full md:max-w-2xl">
                {commonChallenges.map((text) => (
                  <div
                    key={text}
                    className="w-full rounded-xl text-left mx-auto bg-white p-4 shadow-sm ring-1 ring-blue-100"
                  >
                    <p className="text-sm flex gap-2 text-gray-700">
                      <FaCheck />
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECOMMENDED + QUICK CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="text-center font-bold">
            <h2 className="text-xl md:text-3xl font-extrabold">{recommendedFor.title}</h2>
            <p className="mt-3 text-sm md:text-lg text-gray-600">{recommendedFor.description}</p>
            <ul className="mt-6 space-y-3 inline-block text-left">
              {recommendedFor.items.map((text) => (
                <li key={text} className="flex items-start gap-3">
                  <FaCheckCircle className="mt-1 h-4 w-4 text-green-600" />
                  <span className="text-gray-700">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 grid justify-items-center gap-4 rounded-2xl bg-blue-50 p-6 ring-1 ring-blue-100 text-center">
            <h2 className="font-extrabold text-lg md:text-xl">まずは無料相談・体験から</h2>
            <button
              onClick={() => window.location.href = "#profIntro"}
              className="w-full sm:w-auto bg-blue-700 px-6 py-4 cursor-pointer rounded-2xl hover:bg-blue-800 transition-colors duration-300"
            >
              <Link href="/contact" className="text-white font-bold">
                問い合わせする
              </Link>
            </button>
          </div>
        </div>
      </section>


      {/* PROFESSORS */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-extrabold">講師紹介</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {ProfInfo.map((prof) => (
              <article
                key={prof.id}
                className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 overflow-hidden"
              >
                <div className="font-bold grid gap-4 bg-blue-700 px-6 py-5 text-white items-center justify-center justify-items-center text-center">
                  <div className="md:h-40 md:w-40 w-20 h-20 overflow-hidden rounded-full ring-2 ring-white/30">
                    <Image
                      src={getAssetPath(prof.image)}
                      alt={prof.name}
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="">
                    <p className="md:text-2xl text-lg font-bold">
                      {prof.name}{" "}
                      <span className="text-sm font-semibold text-blue-100">
                        講師
                      </span>
                    </p>
                    <p className="text-sm text-blue-100">({prof.kana})</p>
                  </div>
                </div>

                <div className="p-6 font-black mx-auto space-y-5 text-center">
                  {prof.sections.map((section, idx) => (
                    <div key={`${prof.id}-sec-${idx}`}>
                      <p className="text-sm font-extrabold text-blue-800">
                        {section.title}
                      </p>
                      <ul className="mt-2 space-y-2">
                        {section.items.map((item, itemIdx) => (
                          <li
                            key={`${prof.id}-item-${itemIdx}`}
                            className="flex items-start justify-center gap-2 text-sm text-gray-700"
                          >
                            <FaCheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                            <span className="whitespace-pre-line">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES / COURSES */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold">
                サービス一覧
              </h2>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {courses.map((course) => (
              <article
                key={course.id}
                className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={getAssetPath(course.image)}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {course.tags.map((tag, idx) => (
                      <span
                        key={`${course.id}-tag-${idx}`}
                        className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
                      {course.payType}
                    </span>
                  </div>

                  <h3 className="mt-3 text-lg font-extrabold">
                    {course.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {course.description}
                  </p>

                  {course.features && (
                  <div className="mt-4 rounded-xl bg-blue-50 p-4 ring-1 ring-blue-100">
                    <p className="text-xs font-bold text-blue-900">対応言語</p>
                    <p className="mt-1 text-sm text-gray-800">
                      {course.features.language}
                    </p>
                    {course.features.important?.length ? (
                      <ul className="mt-3 space-y-2">
                        {course.features.important.map((item, idx) => (
                          <li
                            key={`${course.id}-imp-${idx}`}
                            className="flex items-start gap-2 text-sm text-gray-700"
                          >
                            <FaCheckCircle className="mt-0.5 h-4 w-4 text-green-600" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>

                  )}

                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500">目安</p>
                      <p className="text-sm font-bold text-gray-900">
                        {course.pricing.duration}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">料金</p>
                      <p className="text-lg font-extrabold text-blue-700">
                        {course.pricing.price}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link
                      href="/contact"
                      className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-sm font-bold text-white hover:bg-blue-700"
                    >
                      この内容で相談する
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-blue-800">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-extrabold">
                まずは無料相談から
              </h2>
              <p className="mt-3 text-blue-100 leading-relaxed">
                研修内容や通訳の範囲、実施方法など、現場に合わせて一緒に整理します。
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 md:p-8 shadow-sm">
              <div className="grid gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-green-500 px-4 py-3 text-sm font-bold text-white hover:bg-green-600"
                >
                  Webからお問い合わせ
                </Link>
                <Link
                  href="tel:+8108003949485"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-bold text-blue-800 ring-1 ring-blue-200 hover:bg-blue-50"
                >
                  <FaPhone className="h-4 w-4" />
                  080-4931-9534
                </Link>
                <p className="text-xs text-gray-500">
                  お急ぎの場合はお電話もご利用ください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
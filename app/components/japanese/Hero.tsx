import Image from "next/image";
import Link from "next/link";

import { useLanguage } from "@/lib/i18n";
import { getAssetPath } from "@/app/utils/paths";

export default function Hero() {
  const { t } = useLanguage();
  const { hero } = t.japanesePage;
  const { serviceListing } = t.japanesePage;

  const tags = Array.from(
    new Set(
      serviceListing.courses.flatMap((course) => course.tags ?? [])
    )
  ).slice(0, 6);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-4 py-2 shadow-sm ring-1 ring-gray-200">
              <span className="text-xs font-semibold text-blue-700">
                {hero.badge}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold tracking-tight">
              {hero.title.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < hero.title.split('\n').length - 1 && <br />}
                </span>
              ))}
            </h1>

            <p className="text-base md:text-lg font-medium text-gray-600 leading-relaxed">
              {hero.subtitle}
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
                {hero.ctaPrimary}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-bold text-blue-700 ring-1 ring-blue-200 shadow-sm hover:bg-blue-50"
              >
                {hero.ctaSecondary}
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-200">
              <Image
                src={getAssetPath("/japanese/japaneseTeaching.jpg")}
                alt={hero.badge}
                width={960}
                height={720}
                className="h-[280px] sm:h-[360px] lg:h-[420px] w-full object-cover"
                priority
              />
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-200">
                <p className="text-xs text-gray-500">{hero.infoCards.audience.label}</p>
                <p className="mt-1 text-sm font-extrabold text-gray-900">{hero.infoCards.audience.value}</p>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-200">
                <p className="text-xs text-gray-500">{hero.infoCards.format.label}</p>
                <p className="mt-1 text-sm font-extrabold text-gray-900">{hero.infoCards.format.value}</p>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-200">
                <p className="text-xs text-gray-500">{hero.infoCards.content.label}</p>
                <p className="mt-1 text-sm font-extrabold text-gray-900">{hero.infoCards.content.value}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

import { FaCheckCircle } from "react-icons/fa";

import { ProfInfo } from "@/app/constants/japanese";
import { getAssetPath } from "@/app/utils/paths";

export default function Professors() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-extrabold">講師紹介</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {ProfInfo.map((prof) => (
            <article
              key={prof.id}
              className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 overflow-hidden"
            >
              <div className="font-bold grid gap-4 bg-blue-600 px-6 py-5 text-white items-center justify-center justify-items-center text-center">
                <div className="md:h-40 md:w-40 w-20 h-20 overflow-hidden rounded-full ring-2 ring-white/30">
                  <Image
                    src={getAssetPath(prof.image)}
                    alt={prof.name}
                    width={64}
                    height={64}
                    className="h-full w-full object-center"
                  />
                </div>
                <div>
                  <p className="md:text-2xl text-lg font-bold">
                    {prof.name}{" "}
                    <span className="text-sm font-semibold text-blue-100">
                      講師
                    </span>
                  </p>
                  <p className="text-sm text-blue-100">({prof.kana})</p>
                </div>
              </div>

              <div className="p-6 font-black mx-auto space-y-5">
                {prof.sections.map((section, idx) => (
                  <div key={`${prof.id}-sec-${idx}`}>
                    <p className="md:text-xl text-lg font-extrabold text-blue-700">
                      {section.title}
                    </p>
                    <ul className="mt-2 space-y-2">
                      {section.items.map((item, itemIdx) => (
                        <li
                          key={`${prof.id}-item-${itemIdx}`}
                          className="flex items-start gap-2 text-sm text-gray-700"
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
  );
}

import Image from "next/image";

import { FaCheck } from "react-icons/fa";

import { commonChallenges } from "@/app/constants/japanese";
import { getAssetPath } from "@/app/utils/paths";

export default function Challenges() {
  return (
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
  );
}

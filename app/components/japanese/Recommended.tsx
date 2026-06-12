import Link from "next/link";

import { FaCheckCircle } from "react-icons/fa";

import { recommendedFor } from "@/app/constants/japanese";

export default function Recommended() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center font-bold">
          <h2 className="text-xl md:text-3xl font-extrabold">
            {recommendedFor.title}
          </h2>
          <p className="mt-3 text-sm md:text-lg text-gray-600">
            {recommendedFor.description}
          </p>
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
          <h2 className="font-extrabold text-lg md:text-xl">
            まずは無料相談・体験から
          </h2>
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-blue-700 px-6 py-4 rounded-2xl hover:bg-blue-800 transition-colors duration-300 text-white font-bold"
          >
            問い合わせする
          </Link>
        </div>
      </div>
    </section>
  );
}

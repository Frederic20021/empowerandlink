import Link from "next/link";

import { FaPhone } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="bg-blue-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h2 className="text-2xl md:text-3xl font-extrabold">
              まずは無料相談から
            </h2>
            <p className="mt-3 text-blue-100 leading-relaxed">
              研修内容や通訳の範囲、実施方法など、現場に合わせて調整いたします。
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
                href="tel:+819045654671"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-bold text-blue-800 ring-1 ring-blue-200 hover:bg-blue-50"
              >
                <FaPhone className="h-4 w-4" />
                090-4565-4671
              </Link>
              <p className="text-xs text-gray-500">
                お急ぎの場合はお電話もご利用ください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

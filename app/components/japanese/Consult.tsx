import Link from "next/link";
import { FaPhone } from "react-icons/fa";

export default function Consult() {
    return (
      <div className="font-bold bg-blue-800 grid justify-center items-center gap-4 py-8 text-white text-center">
        <h1 className=" text-2xl">無料留学相談する！</h1>
        <span>あなたにピッタリな「留学プラン」を一緒に見つけましょう。</span>
        <div className="grid gap-4 py-4 bg-white rounded-lg">
          <span className="mt-2 text-black">Webからお問合せはこちら</span>
          <Link
            href="/contact"
            className="hover:shadow-lg bg-green-500 mx-auto px-4 py-2 font-bold rounded-lg"
          >
            お問い合わせ
          </Link>
          <span className="mt-2 text-black">お電話でのお問い合わせはこちら</span>
          <Link
            href="tel:+8108003949485"
            className="hover:shadow-lg bg-green-500 mx-auto px-4 py-2 font-bold rounded-lg"
          >
            <FaPhone className="inline mr-2" />080-4931-9534
          </Link>
        </div>
      </div>
    );
}
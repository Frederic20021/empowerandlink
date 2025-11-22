import { coursePoint } from '@/app/constants/japanese';
import Image from 'next/image';
import { getAssetPath } from '../../utils/paths';
import Link from 'next/link';

export default function Course() {
    return (
      <div className="grid justify-center space-y-8 items-center py-4">
        <div className="grid md:flex gap-4 justify-center items-center text-black py-4 bg-white">
          <div className='grid text-left'>
            <h1 className="sm:text-xl md:text-4xl lg:text-5xl font-black">こんな人におすすめ！</h1>
            <hr></hr>
            <ul className="list-disc list-inside mt-2 text-sm sm:text-base md:text-lg">
              <li>日本語能力試験（N1）まで目指したい方</li>
              <li>ビジネス日本語を上達したい方</li>
              <li>日本人のように話せるようになりたい方</li>
            </ul>
          </div>
          <div className='mx-8'>
            <Image
              src={getAssetPath('/japanese/study.jpg')}
              alt="Recommended Person"
              width={200}
              height={200}
              className="rounded-lg justify-center"
            />
            </div>
          </div>
        <div className="flex gap-4 mx-auto">
          <div className="flex justify-center items-center">
            <Link
              href="https://empowerandlink.com/contact"
              className="border-red-700 bg-white border-2 hover:bg-red-700 text-red-700 hover:text-white px-3 sm:px-4 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-bold rounded-lg transition-colors duration-300 shadow-lg"
            >
              お問い合わせ
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <Link
              href="https://empowerandlink.com/contact"
              className="border-red-700 bg-red-600 text-white border-2 hover:bg-white hover:text-red-700 px-3 sm:px-4 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-bold rounded-lg transition-colors duration-300 shadow-lg"
            >
              無料体験お試し(申し込む)
            </Link>
          </div>
        </div>
        <span className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold">
          コースのポイント
        </span>
        <div className="mt-4 grid gap-8 mx-[30px] md:mx-[150px]">
          {coursePoint.map((point, index) => (
            <div
              key={index}
              className={`mb-6 flex flex-col-reverse md:flex-row items-center gap-4 p-4 bg-white rounded-xl justify-center mx-auto ${
                point.id % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div className='max-w-2xl rounded-xl '>

              <Image
                src={getAssetPath(point.image)}
                alt={`Point Icon ${index + 1}`}
                width={500}
                height={500}
                className="px-4 object-cover rounded-xl"
              />
              </div>
              <div className="max-w-2xl space-y-2 text-black text-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-700 font-black" style={{fontFamily: 'sans serif'}}>POINT 0{point.id}</h1>
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2">{point.question}</h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 text-left">{point.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}
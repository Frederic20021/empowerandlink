import Image from 'next/image';
import { getAssetPath } from '../../utils/paths';

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
      </div>
    );
}
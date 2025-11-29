import Image from "next/image";
import { coursePoint } from '@/app/constants/japanese';
import { getAssetPath } from '../../utils/paths';

const Point = () => {
    return (
        <>
        <span className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center pt-4 font-bold">
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
        </>
    )}

export default Point;
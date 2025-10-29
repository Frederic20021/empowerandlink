'use client'

import Image from "next/image";
import { getAssetPath } from "../../utils/paths";

const image = [
  "/english/english1.jpg",
  "/english/english2.jpg",
];

export default function Pitch() {
  return (
    <>
        {image.map((img, index) => (
          <div key={index}>
          {index % 2 === 1 ? (
            <div className="grid mx-auto justify-center items-center p-4 bg-white text-black">
              <h2 className="font-extrabold text-3xl">まずは無料相談・体験から</h2>
              <button 
                onClick={() => window.location.href = '#profIntro'}
                className="bg-blue-700 mx-auto p-4 cursor-pointer rounded-2xl mt-4 hover:bg-blue-800 transition-colors duration-300">
                <span className="text-white font-bold">今すぐ予約!</span>
              </button>
            </div>
          ) : null}
          <Image
            alt={`English Service + ${index}`}
            src={getAssetPath(`${img}`)}
            width={1920}
            height={1080}
            className="object-cover w-full h-auto"
          />
          </div>
        ))}
    </>
  );
}

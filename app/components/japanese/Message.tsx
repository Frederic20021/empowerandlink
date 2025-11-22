import { staffMessage } from "@/app/constants/japanese";
import Image from "next/image";
import { getAssetPath } from "../../utils/paths";

export default function Message() {
    return (
        <div className="my-12 py-6 bg-white text-black">
                <h2 className="text-2xl font-bold mb-4 text-center">学校のスタッフメッセージ</h2>
            <div className="mx-auto grid md:flex items-center px-16 md:px-8 justify-center gap-4 max-w-2xl">
                <div className="min-w-[150px]">
            <Image
                src={getAssetPath(staffMessage.image)}
                alt="Staff Member"
                width={100}
                height={100}
                className="rounded-full size-30 mx-auto mb-6"
            />
            <h3 className="text-center text-lg font-semibold">{staffMessage.name}</h3>
            </div>
                <p className="whitespace-pre-line text-lg leading-relaxed">{staffMessage.message}</p>
            </div>
        </div>
    );
}
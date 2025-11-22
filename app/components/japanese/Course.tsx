import { coursePoint } from '@/app/constants/japanese';
import Image from 'next/image';

export default function Course() {
    return (
        <div>
            <span>コースのポイント</span>
            <div className="mt-4">
                {coursePoint.map((point, index) => (
                    <div key={index} className="mb-6">
                        <h3 className="text-xl font-bold mb-2">{point.question}</h3>
                        <p className="text-gray-700">{point.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
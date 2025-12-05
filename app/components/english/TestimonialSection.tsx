'use client';

import Image from 'next/image';
import { Noto_Sans_JP } from 'next/font/google';
import { getAssetPath } from '../../utils/paths';
import { testimonials } from '@/app/constants/english';

const notoSans = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

// Star rating component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-sm ${
            star <= rating ? "text-yellow-400" : "text-[#d1d5db]"
          }`}
        >
          ★
        </span>
      ))}
      <span className="ml-1 text-sm text-[#4b5563]">{rating}</span>
    </div>
  );
};

// Individual testimonial card component
const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonials)[number];
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full">
      {/* Header with badge and rating */}
      <div className="flex items-center justify-between mb-4">
        <span className="bg-blue-500 text-white px-3 py-1 rounded text-sm">
          {testimonial.title}
        </span>
        <div className="flex items-center gap-2">
          <span className="text-sm text-[#4b5563]">総合評価</span>
          <StarRating rating={testimonial.rating} />
        </div>
      </div>

      {/* Avatar and content */}
      <div className="md:flex grid gap-4 mb-4">
        <div className="flex-shrink-0 md:grid md:w-[100px] justify-between">
          <div className="md:grid flex gap-2 mx-auto max-md:w-16 max-md:h-16 overflow-hidden">
            <Image
              src={getAssetPath(testimonial.avatar)}
              alt={testimonial.name}
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>
            <span className="text-center font-bold text-xs text-[#6b7280]">
              {testimonial.name}
            </span>
          <div className='grid gap-2 text-white'>
              <span className="bg-gradient-to-r from-blue-400 to-blue-800 text-center p-2 font-bold mt-8 rounded-lg">
                担当講師
              </span>
              <span className="bg-gradient-to-r from-gray-600 to-black text-center p-2 font-bold rounded-lg">
                {testimonial.responsibleProf}
              </span>
            </div>
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-2 text-[#1f2937]">
            {testimonial.headline}
            <span className="ml-2 text-blue-500">›</span>
          </h3>
          <p className="text-[#4b5563] text-sm leading-relaxed mb-3">
            {testimonial.content}
          </p>
        </div>
      </div>
    </div>
  );
};

// Main testimonials section component
const TestimonialsSection = () => {
  return (
    <section className={`${notoSans.className} py-16 bg-gray-50 antialiased`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1f2937] mb-4">VOICE</h2>
          <p className="text-lg text-blue-600 font-medium">お客様の声</p>
        </div>

        {/* Testimonials grid - 1 column on mobile, 2 columns on tablet and above */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 whitespace-pre-line">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
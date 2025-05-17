'use client';
import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    name: 'Amaan Qureshi',
    date: 'March 10, 2025',
    rating: 5,
    comment: 'This attar is just amazing! Long-lasting and smells divine. My go-to daily fragrance now.',
  },
  {
    name: 'Sana Sheikh',
    date: 'March 8, 2025',
    rating: 4,
    comment: 'Very pleasant scent. Stays on clothes for more than a day. Loved the packaging too!',
  },
  {
    name: 'Imran Khan',
    date: 'March 5, 2025',
    rating: 5,
    comment: 'Truly alcohol-free and premium quality. I’ve already ordered my second bottle.',
  },
];

const ReviewSection = () => {
  return (
    <section className="py-12 px-4 md:px-10 max-w-6xl mx-auto border-t mt-14 bg-[#fefae9]">
      <h2 className="text-2xl font-bold text-[#D4AF37] mb-8 text-center">
        ⭐ Customer Reviews
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow hover:shadow-md transition duration-300"
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-white flex items-center justify-center font-bold text-sm">
                {review.name[0]}
              </div>
              <div>
                <p className="font-medium text-gray-800">{review.name}</p>
                <p className="text-xs text-gray-500">{review.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mb-2">
              {Array.from({ length: review.rating }).map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-sm" />
              ))}
            </div>
            <p className="text-sm text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
    
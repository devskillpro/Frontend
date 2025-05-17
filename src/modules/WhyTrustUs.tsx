'use client';
import { FaHeart, FaFlask, FaLeaf } from 'react-icons/fa';
import { FaDiamond } from 'react-icons/fa6';
import { GiPerfumeBottle, GiDuration } from 'react-icons/gi';

const trustItems = [
  {
    icon: <FaDiamond size={28} />,
    title: 'Premium Quality',
  },
  {
    icon: <FaHeart size={28} />,
    title: 'Cruelty Free',
  },
  {
    icon: <GiDuration size={28} />,
    title: 'Long Lasting',
  },
  {
    icon: <GiPerfumeBottle size={28} />,
    title: 'Variety of Fragrances',
  },
  {
    icon: <FaFlask size={28} />,
    title: 'Dermat Tested',
  },
  {
    icon: <FaLeaf size={28} />,
    title: '100% Vegan',
  },
];

const WhyTrustUs = () => {
  return (
    <section className="bg-[url('/BG.png')] bg-cover bg-center py-8 px-4 sm:px-4 text-white mt-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 sm:mb-12 text-[#D4AF37] drop-shadow-md">
          Why Trust Us?
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#1f1a17]/80 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="text-[#D4AF37] mb-2 sm:mb-3 text-lg sm:text-xl">
                {item.icon}
              </div>
              <p className="text-xs sm:text-sm font-medium text-center leading-tight">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTrustUs;

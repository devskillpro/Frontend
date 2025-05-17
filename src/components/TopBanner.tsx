'use client';

import { useState, useEffect } from 'react';

const bannerMessages = [
  'Welcome to AL ZAMAN – Authentic Attars Delivered to Your Door!',
  'Limited Time Offer: Buy 2 Get 1 FREE!',
  'Free Shipping on Orders Over ₹999!',
];

const TopBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerMessages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#D4AF37] text-white text-xs sm:text-sm flex justify-center items-center h-[40px] relative px-4 text-center">
      <p className="animate-fade transition-opacity">{bannerMessages[currentIndex]}</p>
    </div>
  );
}

export default TopBanner;

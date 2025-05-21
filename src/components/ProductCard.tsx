'use client';
import { FaStar } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // add this line
import AddToCartButton from '@/components/AddToCartButton';

interface Variant {
  id: string;
  label: string;
  price: number;
  originalPrice: number;
  stock: number;
}
interface ProductProps {
  id: number;
  name: string;
  images: string[];
  variants: Variant[];
  rating: number;
  reviews: number;
  isTrending?: boolean;
  category: string;
  description?: string;
  carousel?: boolean;
  products?: ProductProps[];
}

const ProductCard = ({
  carousel = false,
  products = [],
}: { carousel?: boolean; products: ProductProps[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  // Handle responsive slides per view
  useEffect(() => {
    const updateSlidesPerView = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3);
      }
    };
    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  // Auto-slide
  useEffect(() => {
    if (carousel) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3500);
      return () => clearInterval(interval);
    }
  }, [currentIndex, carousel]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  if (!products || products.length === 0) {
    return null;
  }

  if (carousel) {
    return (
      <div className="overflow-hidden relative">
        {/* Navigation Buttons */}
        <div className="flex justify-end items-center mb-4 pr-4 gap-2">
          <button
            onClick={prevSlide}
            className="bg-gradient-to-r from-[#D4AF37] to-[#b98c1d] hover:from-[#b98c1d] hover:to-[#D4AF37] text-white w-9 h-8 sm:w-12 sm:h-10 flex items-center justify-center rounded-xl shadow-lg transition-all cursor-pointer"
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="bg-gradient-to-r from-[#D4AF37] to-[#b98c1d] hover:from-[#b98c1d] hover:to-[#D4AF37] text-white w-9 h-8 sm:w-12 sm:h-10 flex items-center justify-center rounded-xl shadow-lg transition-all cursor-pointer"
          >
            &#10095;
          </button>
        </div>

        {/* Carousel Wrapper */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(100 / slidesPerView) * currentIndex}%)`,
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full px-2"
              style={{ flex: `0 0 ${100 / slidesPerView}%` }}
            >
              <SingleCard product={product} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Non-carousel (grid layout)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <SingleCard key={product.id} product={product} />
      ))}
    </div>
  );
};


const SingleCard = ({ product }: { product: ProductProps }) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  // Use the first variant and first image for the card
  const variant = product.variants[0];
  const image = product.images[0];
  const secondImage = product.images[1] || image; // fallback to first if no second image

  const discount = Math.round(
    ((variant.originalPrice - variant.price) / variant.originalPrice) * 100
  );

  const handleCardClick = () => {
    if (product.id) {
      router.push(`/products/${product.id}`);
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className="cursor-pointer bg-white rounded-xl shadow-md p-2 sm:p-4 flex flex-col justify-between w-full sm:max-w-xs md:max-w-sm transition hover:shadow-lg relative"
    >
      {product.isTrending && (
        <span className="bg-black text-white text-xs px-2 py-1 rounded-full absolute mt-2 ml-2 z-10 flex items-center gap-1">
          <span>⚡</span> Trending
        </span>
      )}

      <div
        className="relative w-full h-50 sm:h-52 md:h-70 flex items-center justify-center mb-2 sm:mb-4 border-4 border-[#D4AF37] rounded-lg overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* First image (fades out on hover) */}
        <img
          src={image}
          alt={product.name}
          className={`object-contain h-full w-full rounded-lg absolute inset-0 transition-opacity duration-700 ${isHovered ? "opacity-0" : "opacity-100"}`}
          draggable={false}
        />
        {/* Second image (fades in on hover) */}
        <img
          src={secondImage}
          alt={product.name}
          className={`object-contain h-full w-full rounded-lg absolute inset-0 transition-opacity duration-700 ${isHovered ? "opacity-100" : "opacity-0"}`}
          draggable={false}
        />
      </div>

      <p className="text-xs text-gray-400 uppercase mb-1">{product.category}</p>
      <h3 className="text-md font-semibold mb-1">{product.name}</h3>

      <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
        <FaStar className="text-yellow-400" />
        <span>{product.rating?.toFixed(1)}</span>
        <span className="text-gray-400">| {product.reviews?.toLocaleString()}</span>
      </div>

      <div className="flex items-center gap-2 mb-2">
        <p className="text-lg font-bold text-black">₹{variant.price}</p>
        <p className="line-through text-gray-400 text-sm">₹{variant.originalPrice}</p>
        <p className="text-green-600 text-sm font-semibold">{discount}% off</p>
      </div>

      {/* Use AddToCartButton here */}
      <div onClick={e => e.stopPropagation()}>
        <AddToCartButton
          product={{
            id: variant.id,
            name: `${product.name} (${variant.label})`,
            price: variant.price,
            originalPrice: variant.originalPrice,
            image,
            quantity: 1,
            stock: variant.stock,
          }}
        />
      </div>
    </div>
  );
};


export default ProductCard;

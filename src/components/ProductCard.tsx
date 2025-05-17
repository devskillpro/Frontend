'use client'
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, toggleCart } from '@/redux/slices/cartSlice';
import { useRouter } from 'next/navigation'; // add this line
import AddToCartButton from '@/app/products/[id]/AddToCartButton';


interface ProductProps {
  name?: string;
  id?: string; // <-- Add this line
  price?: number;
  originalPrice?: number;
  image?: string;
  rating?: number;
  reviews?: number;
  isTrending?: boolean;
  category?: string;

  // Carousel settings
  carousel?: boolean;
  products?: ProductProps[];
}

const ProductCard = ({
  carousel = false,
  products = [],
}: ProductProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  // Handle responsive slides per view
  useEffect(() => {
    const updateSlidesPerView = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setSlidesPerView(1); // 1 card on small screens
      } else {
        setSlidesPerView(3); // 3 cards on larger screens
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

  const dispatch = useDispatch();


  if (products.length === 0) {
    return null; // Handle empty products case
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
            &#10094; {/* Left arrow */}
          </button>
          <button
            onClick={nextSlide}
            className="bg-gradient-to-r from-[#D4AF37] to-[#b98c1d] hover:from-[#b98c1d] hover:to-[#D4AF37] text-white w-9 h-8 sm:w-12 sm:h-10 flex items-center justify-center rounded-xl shadow-lg transition-all cursor-pointer"
          >
            &#10095; {/* Right arrow */}
          </button>
        </div>

        {/* Carousel Wrapper */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(100 / slidesPerView) * currentIndex}%)`,
          }}
        >
          {products.map((product, index) => {
            const discount = Math.round(
              ((product.originalPrice! - product.price!) / product.originalPrice!) * 100
            );

            return (
              <div
                key={index}
                className="w-full px-2"
                style={{ flex: `0 0 ${100 / slidesPerView}%` }}
              >
                <SingleCard {...product} discount={discount} onAddToCart={() => {
                  dispatch(addToCart({
                    name: product.name!,
                    price: product.price!,
                    originalPrice: product.originalPrice!,
                    image: product.image!,
                    quantity: 1,
                  }));
                  dispatch(toggleCart()); // This opens the cart drawer
                }} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Non-carousel (grid layout)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => {
        const discount = Math.round(
          ((product.originalPrice! - product.price!) / product.originalPrice!) * 100
        );

        return (
          <SingleCard
            key={index}
            {...product}
            discount={discount}
            onAddToCart={() =>
              addToCart({
                name: product.name!,
                price: product.price!,
                originalPrice: product.originalPrice!,
                image: product.image!,
                quantity: 1,
              })
            }
          />
        );
      })}
    </div>
  );
};

const SingleCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviews,
  isTrending,
  category,
  discount,
  // onAddToCart,
}: any) => {

  const router = useRouter();

  const handleCardClick = () => {
    if (id) {
      router.push(`/products/${id}`);
    }
  };


  const product = {
    id,
    name,
    price,
    originalPrice,
    image,
    rating,
    reviews,
    isTrending,
    category,
  };

  return (
    <div onClick={handleCardClick}
      className="cursor-pointer bg-white rounded-xl shadow-md p-4 flex flex-col justify-between w-full max-w-sm transition hover:shadow-lg relative">
      {isTrending && (
        <span className="bg-black text-white text-xs px-2 py-1 rounded-full absolute mt-2 ml-2 z-10 flex items-center gap-1">
          <span>⚡</span> Trending
        </span>
      )}

      <div className="relative w-full h-60 flex items-center justify-center mb-4 border-4 border-[#D4AF37] rounded-lg">
        <img
          src={image}
          alt={name}
          className="object-contain h-full w-full rounded-lg"
        />
      </div>

      <p className="text-xs text-gray-400 uppercase mb-1">{category}</p>
      <h3 className="text-md font-semibold mb-1">{name}</h3>

      <div className="flex items-center gap-1 text-sm text-gray-600 mb-1">
        <FaStar className="text-yellow-400" />
        <span>{rating?.toFixed(1)}</span>
        <span className="text-gray-400">| {reviews?.toLocaleString()}</span>
      </div>

      <div className="flex items-center gap-2 mb-2">
        <p className="text-lg font-bold text-black">₹{price}</p>
        <p className="line-through text-gray-400 text-sm">₹{originalPrice}</p>
        <p className="text-green-600 text-sm font-semibold">{discount}% off</p>
      </div>


      <div onClick={e => e.stopPropagation()}>
        <AddToCartButton product={product} />
      </div>



    </div>
  );
};

export default ProductCard;
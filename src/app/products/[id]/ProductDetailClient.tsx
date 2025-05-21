'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import AddToCartButton from '../../../components/AddToCartButton';
import ShippingInfo from '../../../components/ShippingInfo';
import ProductReviews from '../../../components/ProductReviews';
import FAQSection from '../../../components/FAQSection';
import NewArrivalsProducts from '@/modules/NewArrivals';

// Define your product type for TypeScript
interface Variant {
  id: string;
  label: string;
  price: number;
  originalPrice: number;
  stock: number;
}
interface Product {
  id: number;
  name: string;
  images: string[];
  variants: Variant[];
  rating: number;
  reviews: number;
  isTrending?: boolean;
  isNewArrival?: boolean;
  category: string;
  description?: string;
  dateAdded?: string;
}

const ProductDetailClient = ({ product }: { product: Product }) => {
  const images = product.images;
  const variants = product.variants;

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);
  const [quantity, setQuantity] = useState(1);

  const handleVariantChange = (variantId: string) => {
    const v = variants.find(v => v.id === variantId);
    if (v) {
      setSelectedVariant(v);
      setQuantity(1);
    }
  };

  const discount = Math.round(
    ((selectedVariant.originalPrice - selectedVariant.price) / selectedVariant.originalPrice) * 100
  );

  return (
    <div className="mt-20 sm:mt-16">
      {/* Product Section */}
      <div className="bg-[#FAF6EF] py-6 sm:py-12">
        <div className="max-w-6xl mx-auto px-2 sm:px-4 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
          {/* Image Gallery */}
          <div>
            <div className="relative bg-white border-[3px] border-[#D4AF37] rounded-2xl overflow-hidden w-full h-60 sm:h-80 md:h-[500px] shadow-md flex items-center justify-center">
              <Image
                src={selectedImage}
                alt={product.name}
                fill
                className="object-contain rounded-xl"
                priority
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2 mt-3 sm:mt-4 justify-center">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`border-2 rounded-lg w-14 h-14 sm:w-20 sm:h-20 p-1 transition ${selectedImage === img
                    ? 'border-[#D4AF37]'
                    : 'border-transparent'
                    }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    width={80}
                    height={80}
                    className="object-contain rounded"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm tracking-widest uppercase text-[#D4AF37]">{product.category}</p>
            <h1 className="text-2xl sm:text-4xl font-semibold text-gray-900">{product.name}</h1>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
              {Array(5).fill(0).map((_, i) => (
                <FaStar
                  key={i}
                  className={`${i < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                />
              ))}
              <span className="ml-2">{product.rating.toFixed(1)}</span>
              <span className="text-gray-400">| {product.reviews.toLocaleString()} reviews</span>
            </div>

            {/* Variant Selector */}
            <div className="flex gap-2 sm:gap-3 mt-3 sm:mt-4 flex-wrap">
              {variants.map((v) => (
                <button
                  key={v.id}
                  onClick={() => handleVariantChange(v.id)}
                  className={`px-3 py-1 sm:px-4 sm:py-2 rounded border font-semibold transition ${selectedVariant.id === v.id
                    ? 'bg-[#D4AF37] text-white border-[#D4AF37]'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-[#D4AF37]'
                    }`}
                  disabled={v.stock === 0}
                >
                  {v.label} {v.stock === 0 && '(Out of stock)'}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 sm:gap-3 mt-3 sm:mt-4">
              <p className="text-2xl sm:text-3xl font-bold text-[#222]">₹{selectedVariant.price}</p>
              <p className="line-through text-gray-400 text-base sm:text-lg">₹{selectedVariant.originalPrice}</p>
              <p className="text-green-600 font-medium text-xs sm:text-md bg-green-100 px-2 py-1 rounded">
                {discount}% OFF
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-2 mt-5 sm:mt-6">
              <span className="font-medium">Quantity:</span>
              <button
                className="px-2 sm:px-3 py-1 rounded bg-gray-200 font-bold text-lg"
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                disabled={quantity === 1}
              >-</button>
              <span className="px-3 sm:px-4">{quantity}</span>
              <button
                className="px-2 sm:px-3 py-1 rounded bg-gray-200 font-bold text-lg"
                onClick={() => setQuantity(q => Math.min(selectedVariant.stock, q + 1))}
                disabled={quantity === selectedVariant.stock}
              >+</button>
            </div>

            <p className="text-gray-700 mt-4 sm:mt-6 leading-relaxed text-sm sm:text-md tracking-wide">
              {product.description}
            </p>

            {/* Add to Cart Button */}
            <div className="mt-4 sm:mt-5">
              <AddToCartButton
                product={{
                  id: selectedVariant.id,
                  name: `${product.name} (${selectedVariant.label})`,
                  price: selectedVariant.price,
                  originalPrice: selectedVariant.originalPrice,
                  image: selectedImage,
                  quantity,
                  stock: selectedVariant.stock,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Shipping & Return Info */}
      <ShippingInfo />

      {/* Product Reviews */}
      <ProductReviews productId={product.id} />

      {/* FAQ Section */}
      <FAQSection />

      {/* New arrivals Products */}
      <NewArrivalsProducts />
    </div>
  );
};

export default ProductDetailClient;

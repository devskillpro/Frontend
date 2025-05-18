// 'use client';
// import { useState } from 'react';
// import { featuredProducts } from '@/helpers/data';
// import Image from 'next/image';
// import { FaStar } from 'react-icons/fa';
// import AddToCartButton from '../../../components/AddToCartButton';
// import ShippingInfo from '../../../components/ShippingInfo';
// import ProductReviews from '../../../components/ProductReviews';
// import FAQSection from '../../../components/FAQSection';
// import NewArrivalsProducts from '@/modules/NewArrivals';

// const ProductDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
//   const { id } = await params;
//   const product = featuredProducts.find((item) => item.id === Number(id));

//   if (!product) {
//     return (
//       <div className="flex flex-col items-center justify-center py-20 px-4 mt-40 mb-40 text-center">
//         <span className="text-6xl mb-4 text-[#D4AF37] select-none" aria-hidden="true">🚫</span>
//         <h3 className="text-2xl font-semibold mb-2 text-gray-700">Product Not Available</h3>
//       </div>
//     );
//   }

//   const images = product.images;
//   const variants = product.variants;

//   const [selectedImage, setSelectedImage] = useState(images[0]);
//   const [selectedVariant, setSelectedVariant] = useState(variants[0]);
//   const [quantity, setQuantity] = useState(1);

//   const handleVariantChange = (variantId: string) => {
//     const v = variants.find(v => v.id === variantId);
//     if (v) {
//       setSelectedVariant(v);
//       setQuantity(1);
//     }
//   };

//   const discount = Math.round(
//     ((selectedVariant.originalPrice - selectedVariant.price) / selectedVariant.originalPrice) * 100
//   );

//   return (
//     <div className="mt-20">
//       {/* Product Section */}
//       <div className="bg-[#FAF6EF] py-10 sm:py-14">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10">
//           {/* Image Gallery */}
//           <div>
//             <div className="relative bg-white border-[3px] border-[#D4AF37] rounded-2xl overflow-hidden w-full h-[350px] sm:h-[400px] md:h-[480px] shadow-md flex items-center justify-center">
//               <Image
//                 src={selectedImage}
//                 alt={product.name}
//                 fill
//                 className="object-contain rounded-xl"
//                 priority
//               />
//             </div>

//             {/* Thumbnails */}
//             <div className="flex gap-2 mt-4 justify-center overflow-x-auto">
//               {images.map((img, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => setSelectedImage(img)}
//                   className={`border-2 rounded-lg min-w-[72px] min-h-[72px] w-20 h-20 p-1 transition ${selectedImage === img
//                     ? 'border-[#D4AF37]'
//                     : 'border-transparent'
//                     }`}
//                 >
//                   <Image
//                     src={img}
//                     alt={`Thumbnail ${idx + 1}`}
//                     width={80}
//                     height={80}
//                     className="object-contain rounded"
//                   />
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Product Info */}
//           <div className="flex flex-col gap-4">
//             <p className="text-sm tracking-widest uppercase text-[#D4AF37]">{product.category}</p>
//             <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900">{product.name}</h1>

//             <div className="flex items-center gap-2 text-sm text-gray-600">
//               {Array(5).fill(0).map((_, i) => (
//                 <FaStar
//                   key={i}
//                   className={`${i < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
//                 />
//               ))}
//               <span className="ml-2">{product.rating.toFixed(1)}</span>
//               <span className="text-gray-400">| {product.reviews.toLocaleString()} reviews</span>
//             </div>

//             {/* Variant Selector */}
//             <div className="flex flex-wrap gap-3 mt-4">
//               {variants.map((v) => (
//                 <button
//                   key={v.id}
//                   onClick={() => handleVariantChange(v.id)}
//                   className={`px-4 py-2 rounded border font-semibold transition text-sm sm:text-base ${selectedVariant.id === v.id
//                     ? 'bg-[#D4AF37] text-white border-[#D4AF37]'
//                     : 'bg-white text-gray-700 border-gray-300 hover:border-[#D4AF37]'
//                     }`}
//                   disabled={v.stock === 0}
//                 >
//                   {v.label} {v.stock === 0 && '(Out of stock)'}
//                 </button>
//               ))}
//             </div>

//             {/* Price & Discount */}
//             <div className="flex flex-wrap items-center gap-3 mt-4">
//               <p className="text-2xl sm:text-3xl font-bold text-[#222]">₹{selectedVariant.price}</p>
//               <p className="line-through text-gray-400 text-lg">₹{selectedVariant.originalPrice}</p>
//               <p className="text-green-600 font-medium text-sm bg-green-100 px-2 py-1 rounded">
//                 {discount}% OFF
//               </p>
//             </div>

//             {/* Quantity Selector */}
//             <div className="flex items-center gap-2 mt-6">
//               <span className="font-medium">Quantity:</span>
//               <button
//                 className="px-3 py-1 rounded bg-gray-200 font-bold text-lg"
//                 onClick={() => setQuantity(q => Math.max(1, q - 1))}
//                 disabled={quantity === 1}
//               >-</button>
//               <span className="px-4">{quantity}</span>
//               <button
//                 className="px-3 py-1 rounded bg-gray-200 font-bold text-lg"
//                 onClick={() => setQuantity(q => Math.min(selectedVariant.stock, q + 1))}
//                 disabled={quantity === selectedVariant.stock}
//               >+</button>
//             </div>

//             {/* Description */}
//             <p className="text-gray-700 mt-6 leading-relaxed text-md tracking-wide">
//               {product.description}
//             </p>

//             {/* Add to Cart */}
//             <div className="mt-5">
//               <AddToCartButton
//                 product={{
//                   id: selectedVariant.id,
//                   name: `${product.name} (${selectedVariant.label})`,
//                   price: selectedVariant.price,
//                   originalPrice: selectedVariant.originalPrice,
//                   image: selectedImage,
//                   quantity,
//                   stock: selectedVariant.stock,
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Shipping & Return Info */}
//       <ShippingInfo />

//       {/* Product Reviews */}
//       <ProductReviews productId={product.id} />

//       {/* FAQ Section */}
//       <FAQSection />

//       {/* New arrivals */}
//       <NewArrivalsProducts />
//     </div>
//   );
// };

// export default ProductDetailPage;


import { featuredProducts } from '@/helpers/data';
import ProductDetailClient from './ProductDetailClient';

const ProductDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const product = featuredProducts.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4 mt-40 mb-40 text-center">
        <span className="text-6xl mb-4 text-[#D4AF37]" aria-hidden="true">🚫</span>
        <h3 className="text-2xl font-semibold mb-2 text-gray-700">
          Product Not Available
        </h3>
      </div>
    );
  }

  return <ProductDetailClient product={product} />;
};

export default ProductDetailPage;

import { featuredProducts } from '@/helpers/data';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import AddToCartButton from './AddToCartButton';
import ShippingInfo from '../../../components/ShippingInfo';
import ProductReviews from './ProductReviews';
import FAQSection from './FAQSection';
import NewArrivalsProducts from '@/modules/NewArrivals';

interface Props {
  params: {
    id: string;
  };
}

const ProductDetailPage = ({ params }: Props) => {
  const product = featuredProducts.find((item) => item.id === Number(params.id));

  if (!product) {
    return (
      <div className="text-center text-gray-500 mt-50 mb-50 py-20">
        Product not found.
      </div>
    );
  }

  const {
    name,
    price,
    originalPrice,
    image,
    rating,
    reviews,
    category,
    description,
  } = product;

  const discount = Math.round(((originalPrice - price) / originalPrice) * 100);

  return (
    <div className="mt-20">
      {/* Product Section */}
      <div className="bg-[#FAF6EF] py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Image */}
          <div className="relative bg-white border-[3px] border-[#D4AF37] rounded-2xl overflow-hidden w-full h-[500px] p-4 shadow-md">
            <Image
              src={image}
              alt={name}
              fill
              className="object-contain rounded-xl"
              priority
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-4">
            <p className="text-sm tracking-widest uppercase text-[#D4AF37]">{category}</p>
            <h1 className="text-4xl font-semibold text-gray-900">{name}</h1>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              {Array(5).fill(0).map((_, i) => (
                <FaStar
                  key={i}
                  className={`${
                    i < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="ml-2">{rating.toFixed(1)}</span>
              <span className="text-gray-400">| {reviews.toLocaleString()} reviews</span>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <p className="text-3xl font-bold text-[#222]">₹{price}</p>
              <p className="line-through text-gray-400 text-lg">₹{originalPrice}</p>
              <p className="text-green-600 font-medium text-md bg-green-100 px-2 py-1 rounded">
                {discount}% OFF
              </p>
            </div>

 
            <p className="text-gray-700 mt-6 leading-relaxed text-md tracking-wide">
              {description}
            </p>

            {/* Add to Cart Button */}
            <div className="mt-5">
              <AddToCartButton product={product} />
            </div>
            
          </div>
        </div>
      </div>

      {/* Shipping & Return Info */}
      <ShippingInfo />

      {/* Product Reviews */}
      <ProductReviews />

      {/* FAQ Section */}
      <FAQSection />

      {/* New arrivals Products */}
      <NewArrivalsProducts/>
    </div>
  );
};

export default ProductDetailPage;

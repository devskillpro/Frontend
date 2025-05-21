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

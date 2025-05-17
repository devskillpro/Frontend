'use client';
import ProductCard from '@/components/ProductCard';
import SectionTitle from '@/components/SectionTitle';
import { featuredProducts } from '@/helpers/data';

const AttarCategoryPage = () => {
  const attarProducts = featuredProducts.filter(
    (item) => item.category?.toLowerCase() === 'perfume spray'
  );

  return (
    <section className="px-6 py-6 mt-20">
      <SectionTitle
        title="Perfume Spray"
        showFilters={true}
        showSort={true}
      />

      {attarProducts.length > 0 ? (
        <ProductCard carousel={false} products={attarProducts} />
      ) : (
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
          <span className="text-6xl mb-4 text-[#D4AF37] select-none" aria-hidden="true">🚫</span>
          <h3 className="text-2xl font-semibold mb-2 text-gray-700">
            Perfumes Not Available
          </h3>
          <p className="text-gray-500 max-w-xs">
            Sorry, there are no perfumes available at the moment. Please check back later or explore our other great deals!
          </p>
        </div>
      )}
    </section>
  );
};

export default AttarCategoryPage;

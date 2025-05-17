  'use client';
  import ProductCard from '@/components/ProductCard';
  import SectionTitle from '@/components/SectionTitle';
  import { featuredProducts } from '@/helpers/data';

  const AllProductsPage = () => {
    // Sort: New Arrivals first, then rest
    const sortedProducts = [
      ...featuredProducts.filter((item) => item.isNewArrival),
      ...featuredProducts.filter((item) => !item.isNewArrival),
    ];

    return (
      <section className="px-6 py-6 mt-20">
        <SectionTitle
          title="All Products"
          showFilters={true}
          showSort={true}
        />

        {sortedProducts.length > 0 ? (
          <ProductCard carousel={false} products={sortedProducts} />
        ) : (
          <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
            <span className="text-6xl mb-4 text-[#D4AF37] select-none" aria-hidden="true">🚫</span>
            <h3 className="text-2xl font-semibold mb-2 text-gray-700">
              No Products Available
            </h3>
            <p className="text-gray-500 max-w-xs">
              Sorry, there are no products available at the moment. Please check back later or explore our other great deals!
            </p>
          </div>

        )}
      </section>
    );
  };

  export default AllProductsPage;

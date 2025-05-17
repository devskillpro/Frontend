'use client';
import ProductCard from '@/components/ProductCard';
import SectionTitle from '@/components/SectionTitle';
import { featuredProducts } from '@/helpers/data';

const NewArrivalsPage = () => {
  // Filter logic for new arrivals
  const newArrivalProducts = featuredProducts.filter(
    (item) => item.isNewArrival // You can update this logic as needed
  );

  return (
    <section className="px-6 py-6 mt-20">
      <SectionTitle
        title="New Arrivals"
        showFilters={true}
        showSort={true}
      />

      {newArrivalProducts.length > 0 ? (
        <ProductCard carousel={false} products={newArrivalProducts} />
      ) : (
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
          <span className="text-6xl mb-4 text-[#D4AF37] select-none" aria-hidden="true">🚫</span>
          <h3 className="text-2xl font-semibold mb-2 text-gray-700">
            New Arrivals Not Available
          </h3>
          <p className="text-gray-500 max-w-xs">
            Sorry, there are no  new arrivals available at the moment. Please check back later or explore our other great deals!
          </p>
        </div>
      )}
    </section>
  );
};

export default NewArrivalsPage;

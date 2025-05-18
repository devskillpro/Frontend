'use client';
import { featuredProducts } from '@/helpers/data';
import ProductCard from '@/components/ProductCard';

const NewArrivalsProducts = () => {
  // Sort products by dateAdded descending (newest first)
  const sortedProducts = [...featuredProducts].sort(
    (a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
  );

  // Take up to 8 newest products
  const newArrivals = sortedProducts.slice(0, 8);

  return (
    <section
      className="px-6 py-6 bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: "url('BG.png')",
      }}
    >
      <h2 className="text-3xl font-bold mb-2 text-center text-[#D4AF37]">
        New Arrivals
      </h2>

      <ProductCard carousel={true} products={newArrivals} />
    </section>
  );
};

export default NewArrivalsProducts;

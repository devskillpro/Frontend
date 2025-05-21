'use client';

import { useState, useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProductCard from '@/components/ProductCard';
import SectionTitle from '@/components/SectionTitle';
import { featuredProducts } from '@/helpers/data';

const PRODUCTS_PER_PAGE = 6;

const TrendingAttarSection = () => {
  const trendingProducts = featuredProducts.filter(p => p.isTrending);

  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(trendingProducts.length / PRODUCTS_PER_PAGE);

  const paginatedProducts = trendingProducts.slice(
    (page - 1) * PRODUCTS_PER_PAGE,
    page * PRODUCTS_PER_PAGE
  );

  // Animation setup
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
      className="px-6 py-5  relative "
    >
      <div className="flex justify-center">
        <SectionTitle
          title="Trending Attar"
          showFilters={false}
          showSort={false}
        />
      </div>

      {trendingProducts.length > 0 ? (
        <>
          <ProductCard carousel={false} products={paginatedProducts} />

          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-8 gap-2">
              {page > 1 && (
                <button
                  className="px-3 py-1 rounded bg-gray-200 hover:bg-[#D4AF37] hover:text-white font-semibold"
                  onClick={() => setPage(page - 1)}
                >
                  Previous
                </button>
              )}
              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx}
                  className={`w-8 h-8 rounded-full font-bold ${
                    page === idx + 1
                      ? 'bg-[#D4AF37] text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-[#D4AF37] hover:text-white'
                  }`}
                  onClick={() => setPage(idx + 1)}
                >
                  {idx + 1}
                </button>
              ))}
              {page < totalPages && (
                <button
                  className="px-3 py-1 rounded bg-gray-200 hover:bg-[#D4AF37] hover:text-white font-semibold"
                  onClick={() => setPage(page + 1)}
                >
                  Next
                </button>
              )}
            </div>
          )}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
          <span className="text-6xl mb-4 text-[#D4AF37] select-none" aria-hidden="true">🔥</span>
          <h3 className="text-2xl font-semibold mb-2 text-gray-700">
            No Trending Attar Available
          </h3>
          <p className="text-gray-500 max-w-xs">
            Sorry, there are no trending attar products at the moment. Please check back later or explore our other great fragrances!
          </p>
        </div>
      )}
    </motion.section>
  );
};

export default TrendingAttarSection;

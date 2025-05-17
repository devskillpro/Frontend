'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const FragranceBanner = () => {
    return (
        <section className="w-full px-4 py-12">
            <div className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl group">
                
                {/* Image with scroll-based zoom/fade-in */}
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.8, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <Image
                        src="/image.jpeg"
                        alt="Fragrance Banner"
                        width={1200}
                        height={500}
                        className="w-full h-[300px] md:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                        priority
                    />
                </motion.div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10"></div>

                {/* Text Overlay with scroll-based animation */}
                <motion.div
                    className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 z-20 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 2.5, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">
                        Elevate Your Attar Experience
                    </h2>
                    <p className="text-sm md:text-lg max-w-lg">
                        Discover timeless fragrances crafted with elegance and passion. Exclusive collections await you.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default FragranceBanner;

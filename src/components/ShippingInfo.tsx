'use client';
import {
  FaShippingFast,
  FaExchangeAlt,
  FaMoneyBillWave,
  FaLock,
} from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const shippingItems = [
  { icon: <FaShippingFast className="text-[20px] sm:text-[28px]" />, label: 'Free Shipping ₹500+' },
  { icon: <FaExchangeAlt className="text-[20px] sm:text-[28px]" />, label: 'Non Returnable' },
  { icon: <FaMoneyBillWave className="text-[20px] sm:text-[28px]" />, label: 'Cash on Delivery' },
  { icon: <FaLock className="text-[20px] sm:text-[28px]" />, label: "Secure Payments" },
];

// Framer Motion animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const ShippingInfo = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      className="bg-black py-5 px-4 md:px-10"
    >
      <motion.div
        className="group grid grid-cols-2 sm:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {shippingItems.map((item, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="flex items-center gap-2 sm:gap-3 px-2 sm:px-4 py-2 transition-all duration-1000 group-hover:scale-[1.03]"
          >
            <div className="bg-white rounded-full p-2 sm:p-3 shadow transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1 text-[#D4AF37]">
              {item.icon}
            </div>
            <p className="text-white text-xs sm:text-sm font-medium transition-transform duration-1000 group-hover:translate-x-1">
              {item.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ShippingInfo;

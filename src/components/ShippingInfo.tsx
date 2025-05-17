'use client';
import {
  FaShippingFast,
  FaExchangeAlt,
  FaMoneyBillWave,
  FaLock,
} from 'react-icons/fa';

const shippingItems = [
  { icon: <FaShippingFast className="text-[20px] sm:text-[28px]" />, label: 'Free Shipping ₹500+' },
  { icon: <FaExchangeAlt className="text-[20px] sm:text-[28px]" />, label: '7-Day Easy Returns' },
  { icon: <FaMoneyBillWave className="text-[20px] sm:text-[28px]" />, label: 'Cash on Delivery' },
  { icon: <FaLock className="text-[20px] sm:text-[28px]" />, label: "Secure Payments" },
];

const ShippingInfo = () => {
  return (
    <section className="bg-black py-5 px-4 md:px-10">
      <div className="group grid grid-cols-2 sm:grid-cols-4 gap-4">
        {shippingItems.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 sm:gap-3 px-2 sm:px-4 py-2 transition-all duration-1000 group-hover:scale-[1.03]"
          >
            <div className="bg-white rounded-full p-2 sm:p-3 shadow transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1 text-[#D4AF37]">
              {item.icon}
            </div>
            <p className="text-white text-xs sm:text-sm font-medium transition-transform duration-1000 group-hover:translate-x-1">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShippingInfo;

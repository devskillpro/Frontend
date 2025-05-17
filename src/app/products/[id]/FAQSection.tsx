'use client';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { faqs } from '@/helpers/faqData';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-12 px-4 md:px-10 max-w-5xl mx-auto border-t mt-12">
      <h2 className="text-2xl font-bold text-center mb-10 text-[#D4AF37]">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="rounded-xl bg-[#f1f1f1] shadow-md transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(idx)}
              className="flex justify-between items-center w-full text-left px-5 py-4 focus:outline-none cursor-pointer"
            >
              <span className="font-medium text-gray-800">{faq.question}</span>
              <FaChevronDown
                className={`w-5 h-5 bg-[#D4AF37] rounded-xl text-white transition-transform duration-300 ${
                  openIndex === idx ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 px-5 ${
                openIndex === idx ? 'max-h-40 py-2' : 'max-h-0'
              }`}
            >
              <p className="text-gray-600 text-sm">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;

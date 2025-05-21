'use client'
import { FaInstagram, FaFacebookF, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useEffect, useState } from 'react'
import Button from './Button'
import NewsletterSignup from './NewsletterSignup '

const Footer = () => {
    const [showScrollTop, setShowScrollTop] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 100)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="bg-black text-white px-6 md:px-10 pt-5 pb-5 relative">
            {/* Centered Logo */}
            <div className="flex justify-center mb-6">
                <img src="/Logo.jpg" alt="Logo" className="h-30 object-contain" />
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start gap-12 flex-wrap">
                {/* Contact & Socials */}
                <div className="space-y-2 max-w-2xl">
                    <a href="mailto:alzamanfragrance@gmail.com" className="flex items-center gap-2 text-white hover:text-red-500 transition group">
                        <MdEmail className="text-white group-hover:text-red-500" />
                        alzamanfragrance@gmail.com
                    </a>
                    <a href="https://wa.me/917276273659" target="_blank" className="flex items-center gap-2 text-white hover:text-green-500 transition group">
                        <FaWhatsapp className="text-white group-hover:text-green-500" />
                        91-7276273659
                    </a>

                    {/* Social Icons */}
                    <div className="flex gap-4 pt-2">
                        <a href="https://www.instagram.com/alzamanfragrance/" target="_blank" className="text-white hover:text-pink-500 transition">
                            <FaInstagram size={20} />
                        </a>
                        <a href="#" className="text-white hover:text-blue-500 transition">
                            <FaFacebookF size={18} />
                        </a>
                        <a href="https://www.youtube.com/@alzamanfragrance" target="_blank" className="text-white hover:text-red-500 transition">
                            <FaYoutube size={20} />
                        </a>
                    </div>
                </div>

                {/* Categories + Deals in Row for Mobile */}
                <div className="flex flex-col sm:flex-row gap-10 sm:gap-20">
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white">Categories</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="/attar" className="hover:text-[#D4AF37] transition">Attar</a></li>
                            <li><a href="/perfume-spray" className="hover:text-[#D4AF37] transition">Perfume Spray</a></li>
                            <li><a href="/new-arrivals" className="hover:text-[#D4AF37] transition">New Arrivals</a></li>
                            <li><a href="/combo-offers" className="hover:text-[#D4AF37] transition">Combo Offers</a></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white">Deals & Information</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="/return-refund-policy" className="hover:text-[#D4AF37] transition">Return & Refund Policy</a></li>
                            <li><a href="/terms-conditions" className="hover:text-[#D4AF37] transition">Terms & Conditions</a></li>
                            <li><a href="/shipping-policy" className="hover:text-[#D4AF37] transition">Shipping Policy</a></li>
                            <li><a href="/privacy-policy" className="hover:text-[#D4AF37] transition">Privacy Policy</a></li>
                            <li><a href="/return-exchange" className="hover:text-[#D4AF37] transition">Return / Exchange</a></li>
                            <li><a href="/track-order" className="hover:text-[#D4AF37] transition">Track Order</a></li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="space-y-4 max-w-md">
                   <NewsletterSignup/>  

                    <div className="flex gap-2 pt-4">
                        <img src="/visa.svg" alt="Visa" className="h-6" />
                        <img src="/paypal.svg" alt="Paypal" className="h-6" />
                        <img src="/mastercard.svg" alt="Mastercard" className="h-6" />
                        <img src="/AM.svg" alt="Amex" className="h-6" />
                        <img src="/discover.svg" alt="Discover" className="h-6" />
                        <img src="/gpay.svg" alt="GPay" className="h-6" />
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
                Copyright © 2025 Alzaman Premium Fragrance. All Rights Reserved.
                Developed By <span className="text-white font-medium">SOHAIL SAYED</span>
            </div>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 bg-white text-black shadow-md p-3 rounded-full hover:bg-[#D4AF37] transition-all duration-300 animate-bounce"
                >
                    ↑
                </button>
            )}
        </footer>
    )
}

export default Footer

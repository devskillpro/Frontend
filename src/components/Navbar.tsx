"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaShoppingCart, FaUser, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


import TopBanner from "./TopBanner";
import SearchBar from "./SearchBar";
import CartDrawer from "@/modules/CartDrawer";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/all-products", label: "All Products" },
  { href: "/attar", label: "Attar" },
  { href: "/perfume-spray", label: "Perfume Spray" },
  { href: "/new-arrivals", label: "New Arrivals" },
  { href: "/combo-offers", label: "Combo Offers" },
  { href: "/track-order", label: "Track Order" },
];

const Navbar = () => {
  const pathname = usePathname();

  const [hideBannerOnScroll, setHideBannerOnScroll] = useState(false);
  const [manuallyClosedBanner, setManuallyClosedBanner] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show banner only if at the very top of the page
      if (currentScrollY === 0 && !manuallyClosedBanner) {
        setHideBannerOnScroll(false);
      } else {
        setHideBannerOnScroll(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, manuallyClosedBanner]);

  const cartItems = useSelector((state: any) => state.cart.cartItems);


  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Banner */}
      <div
        className={`transition-all duration-500 ${hideBannerOnScroll ? "opacity-0 h-0 overflow-hidden" : "opacity-100 h-[40px]"
          }`}
      >
        {!hideBannerOnScroll && (
          <TopBanner />
        )}
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-md px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between relative">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-black tracking-wider"
        >
          AL <span className="text-[#D4AF37]">ZAMAN</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-base font-medium relative transition duration-200 ${pathname === link.href ? "text-[#D4AF37]" : "text-gray-800"
                  } hover:text-[#D4AF37]`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#D4AF37]"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-6 text-gray-800 text-xl">
          {/* Search */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="hover:text-[#D4AF37] transition"
          >
            <FaSearch />
          </button>

          {/* User */}
          <Link href="/login" className="hover:text-[#D4AF37] transition">
            <FaUser />
          </Link>

          {/* Cart */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative hover:text-[#D4AF37] transition"
          >
            <FaShoppingCart />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 text-[10px] bg-[#D4AF37] text-white rounded-full px-1">
                {cartItems.length}
              </span>
            )}
          </button>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden hover:text-[#D4AF37] transition"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`absolute top-full left-0 w-full bg-white border-t md:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-[500px] py-4" : "max-h-0 py-0"
            }`}
        >
          <ul className="flex flex-col items-start gap-4 px-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-1 text-base font-medium relative ${pathname === link.href ? "text-[#D4AF37]" : "text-gray-800"
                    } hover:text-[#D4AF37]`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D4AF37]"></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Search Drawer */}
      {isSearchOpen && <SearchBar onClose={() => setIsSearchOpen(false)} />}

      {/* Cart Drawer */}
      {isCartOpen && (
        <>
          {/* Overlay */}
          <div
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/30 z-[9998] backdrop-blur-sm"
          />

          {/* Cart Drawer */}
          <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </>
      )}

    </header>
  );
};

export default Navbar;

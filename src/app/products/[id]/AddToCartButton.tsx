'use client';

import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/redux/slices/cartSlice';
import { Product } from '@/types'; 

const AddToCartButton = ({ product }: { product: Product }) => {
  const dispatch = useDispatch();

  // Correct cartItems selector key
  const cartItems = useSelector((state) => state.cart.cartItems ?? []);

  const isInCart = cartItems.some((item) => item.id === product.id);

  const handleClick = () => {
    if (!isInCart) {
      dispatch(addToCart(product));
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={isInCart}
      className={`mt-6 w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-500 ease-in-out shadow-md ${
        isInCart
          ? 'bg-black text-white cursor-default shadow-lg'
          : 'bg-gradient-to-r from-[#D4AF37] to-[#b98c1d] hover:from-[#b98c1d] hover:to-[#D4AF37] text-white hover:shadow-lg'
      }`}
    >
      {isInCart ? 'ADDED' : 'ADD TO CART'} <FaShoppingCart />
    </button>
  );
};

export default AddToCartButton;

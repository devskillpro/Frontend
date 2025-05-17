'use client';

import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, toggleCart } from '@/redux/slices/cartSlice';

interface AddToCartButtonProps {
  product: {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    quantity: number;
    stock?: number;
  };
}

const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.cartItems ?? []);
  const isInCart = cartItems.some((item: any) => item.id === product.id);
  const isOutOfStock = product.stock !== undefined && product.stock <= 0;

  const handleClick = () => {
    if (!isInCart && !isOutOfStock) {
      dispatch(addToCart(product));
      dispatch(toggleCart());
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={isInCart || isOutOfStock}
      className={`w-full mt-2 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-500 ease-in-out shadow-md ${
        isInCart || isOutOfStock
          ? 'bg-black text-white cursor-not-allowed shadow-lg'
          : 'bg-gradient-to-r from-[#D4AF37] to-[#b98c1d] hover:from-[#b98c1d] hover:to-[#D4AF37] text-white hover:shadow-lg'
      }`}
    >
      {isOutOfStock
        ? 'OUT OF STOCK'
        : isInCart
        ? 'ADDED'
        : 'ADD TO CART'}{' '}
      <FaShoppingCart />
    </button>
  );
};

export default AddToCartButton;

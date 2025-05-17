"use client";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTimes, FaTrash } from "react-icons/fa";
import { updateQuantity, removeFromCart } from "@/redux/slices/cartSlice";
import Image from "next/image";

type CartItem = {
  id: string; // Now using id
  name: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  image: string;
};

type CartDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const dispatch = useDispatch();
  const cartItems: CartItem[] = useSelector((state: any) => state.cart.cartItems);

  const subtotal = cartItems.reduce(
    (total: number, item: CartItem) => total + item.price * item.quantity,
    0
  );

  const originalTotal = cartItems.reduce(
    (total: number, item: CartItem) =>
      total + (item.originalPrice ?? item.price) * item.quantity,
    0
  );

  const totalSavings = originalTotal - subtotal;

  const handleIncrement = (item: CartItem) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item: CartItem) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed top-0 right-0 w-[90%] sm:w-[400px] h-full bg-white shadow-lg z-[9999] transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"
        }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-semibold">Your Cart ({cartItems.length})</h2>
        <button onClick={onClose}>
          <FaTimes className="text-gray-600 hover:text-[#D4AF37] text-xl" />
        </button>
      </div>

      {/* Cart Items */}
      <div className="p-4 space-y-4 overflow-y-auto flex-1">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full py-16 text-center">
            <span className="text-5xl mb-4 text-[#D4AF37]">🛒</span>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Your cart is empty</h3>
            <p className="text-gray-500 text-md">
              Looks like you haven&apos;t added anything yet.<br />
              Start shopping to fill your cart!
            </p>
          </div>
        ) : (
          cartItems.map((item: CartItem, index: number) => (
            <div
              key={index}
              className="flex items-center gap-4 border  border-[#D4AF37] rounded p-3 shadow-sm"
            >
              <Image
                src={item.image && item.image.startsWith("/") ? item.image : "/5.jpg"}
                alt={item.name || "Product Image"}
                width={120}
                height={120}
                className="object-cover rounded"
              />

              <div className="flex-1">
                <h4 className="text-md font-semibold">{item.name}</h4>

                <div className="flex items-center gap-2 text-md mt-1">
                  <span className="text-[#D4AF37] font-bold">
                    ₹{item.price * item.quantity}
                  </span>
                  {item.originalPrice && item.originalPrice > item.price && (
                    <span className="line-through text-gray-400">
                      ₹{item.originalPrice * item.quantity}
                    </span>
                  )}
                </div>


                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => handleDecrement(item)}
                    className="px-2 bg-gray-200 rounded text-md cursor-pointer"
                  >
                    −
                  </button>
                  <span className="text-sm font-medium">{item.quantity}</span>
                  <button
                    onClick={() => handleIncrement(item)}
                    className="px-2 bg-gray-200 rounded text-md cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              <FaTrash
                className="text-[#D4AF37] cursor-pointer hover:text-red-800"
                onClick={() => handleRemove(item.id)}
              />
            </div>
          ))
        )}
      </div>

      {/* Total Savings and Footer - only show if cart is not empty */}
      {cartItems.length > 0 && (
        <>
          <div className="p-4 border-t border-dashed border-green-500 bg-green-50">
            <p className="text-md text-green-600 font-medium">
              🎉 Your total savings: <span className="font-bold">₹{totalSavings}</span>
            </p>
          </div>

          <div className="border-t p-4 space-y-2">
            <div className="flex justify-between text-lg font-semibold">
              <span>Total Payable</span>
              <span className="text-[#D4AF37]">₹{subtotal}</span>
            </div>

            <button
              className="w-full bg-[#D4AF37] hover:bg-[#cba933] text-white py-2 px-4 rounded transition cursor-pointer"
              onClick={() => alert("Go to checkout")}
            >
              CHECKOUT
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartDrawer;

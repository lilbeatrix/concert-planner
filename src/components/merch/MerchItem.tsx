import React, { useState } from 'react';

interface MerchItemProps {
  name: string;
  price: number;
  imageUrl: string;
}

export const MerchItem: React.FC<MerchItemProps> = ({ name, price, imageUrl }) => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="flex items-center gap-4 p-4 bg-white border border-pink-50 rounded-2xl shadow-sm mb-4">
      {/* Item Image Placeholder */}
      <div className="w-20 h-20 bg-pink-50 rounded-xl flex items-center justify-center text-2xl">
        {imageUrl}
      </div>

      <div className="flex-1">
        <h3 className="font-bold text-gray-800">{name}</h3>
        <p className="text-pink-500 font-semibold">{price.toLocaleString()} THB</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-3 bg-pink-50 rounded-full px-3 py-1">
        <button 
          onClick={decrement}
          className="w-6 h-6 flex items-center justify-center bg-white rounded-full text-pink-500 shadow-sm hover:bg-pink-100 transition-colors"
        >
          -
        </button>
        <span className="w-6 text-center font-bold text-gray-700">{quantity}</span>
        <button 
          onClick={increment}
          className="w-6 h-6 flex items-center justify-center bg-white rounded-full text-pink-500 shadow-sm hover:bg-pink-100 transition-colors"
        >
          +
        </button>
      </div>
    </div>
  );
};
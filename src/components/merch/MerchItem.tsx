import React from 'react';

interface MerchItemProps {
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
  onUpdate: (newQuantity: number) => void;
}

export const MerchItem: React.FC<MerchItemProps> = ({ name, price, imageUrl, quantity, onUpdate }) => {
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
          onClick={() => onUpdate(Math.max(0, quantity - 1))}
          className="w-6 h-6 flex items-center justify-center bg-white rounded-full text-pink-500 shadow-sm hover:bg-pink-100"
        >
          -
        </button>
        <span className="w-6 text-center font-bold text-gray-700">{quantity}</span>
        <button 
          onClick={() => onUpdate(quantity + 1)}
          className="w-6 h-6 flex items-center justify-center bg-white rounded-full text-pink-500 shadow-sm hover:bg-pink-100"
        >
          +
        </button>
      </div>
    </div>
  );
};
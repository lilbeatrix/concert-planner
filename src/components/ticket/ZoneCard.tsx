import React from 'react';

interface ZoneCardProps {
  zoneName: string;
  price: number;
  colorCode: string;
  isAvailable?: boolean;
  onSelect: (price: number) => void;
  isSelected?: boolean;
}

export const ZoneCard: React.FC<ZoneCardProps> = ({
  zoneName,
  price,
  colorCode,
  isAvailable = true,
  onSelect,
  isSelected = false
}) => {
  return (
    <div 
      className={`flex items-center justify-between p-4 mb-4 bg-white border rounded-2xl shadow-sm transition-all duration-300 ${
        isSelected ? 'border-pink-400 ring-2 ring-pink-100 shadow-md' : 'border-pink-100'
      }`}
    >
      <div className="flex items-center gap-4">
        {/* Zone color circle indicator */}
        <div 
          className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
          style={{ backgroundColor: colorCode }}
        ></div>
        
        {/* Zone name and price */}
        <div>
          <h3 className="text-lg font-bold text-gray-800">Zone {zoneName}</h3>
          <p className="text-sm text-gray-500">{price.toLocaleString()} THB</p>
        </div>
      </div>

      {/* Action button */}
      <button 
        disabled={!isAvailable}
        onClick={() => onSelect(price)}
        className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
          !isAvailable 
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : isSelected
              ? 'bg-pink-500 text-white shadow-inner'
              : 'bg-pink-100 text-pink-600 hover:bg-pink-200'
        }`}
      >
        {isAvailable ? (isSelected ? 'Selected' : 'Select') : 'Sold Out'}
      </button>
    </div>
  );
};
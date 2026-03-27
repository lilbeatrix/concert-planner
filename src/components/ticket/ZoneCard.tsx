import React from 'react';

interface ZoneCardProps {
  zoneName: string;
  price: number;
  colorCode: string;
  isAvailable?: boolean;
}

export const ZoneCard: React.FC<ZoneCardProps> = ({
  zoneName,
  price,
  colorCode,
  isAvailable = true
}) => {
  return (
    <div className="flex items-center justify-between p-4 mb-4 bg-white border border-pink-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
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
        className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
          isAvailable 
            ? 'bg-pink-100 text-pink-600 hover:bg-pink-200' 
            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
        }`}
      >
        {isAvailable ? 'Select' : 'Sold Out'}
      </button>
    </div>
  );
};
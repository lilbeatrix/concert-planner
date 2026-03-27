import React from 'react';

interface ReceiptProps {
  selectedTicketPrice: number;
  merchQuantities: { [key: string]: number };
}

export const Receipt: React.FC<ReceiptProps> = ({ selectedTicketPrice, merchQuantities }) => {
  // Check if there are any items selected
  const hasItems = selectedTicketPrice > 0 || Object.values(merchQuantities).some(q => q > 0);

  // If no items don't render this component
  if (!hasItems) return null;

  // Reference data for calculating merch totals
  const merchDetails = [
    { id: 'lightstick', name: 'Official Lightstick', price: 1650 },
    { id: 'album', name: 'Solo Album (Special Ver.)', price: 890 },
    { id: 'photocard', name: 'Photo Card Set', price: 450 }
  ];

  return (
    <section className="mb-10 p-6 bg-white border border-pink-100 rounded-3xl shadow-sm">
      <div className="flex items-center gap-2 mb-4 border-b border-pink-50 pb-4">
        <span className="text-xl">🧾</span>
        <h2 className="text-lg font-bold text-gray-700">Your Breakdown</h2>
      </div>
      
      <ul className="space-y-3 text-sm text-gray-600">
        {/* Render ticket price if selected */}
        {selectedTicketPrice > 0 && (
          <li className="flex justify-between items-center">
            <span>Concert Ticket</span>
            <span className="font-semibold text-gray-800">{selectedTicketPrice.toLocaleString()} THB</span>
          </li>
        )}
        
        {/* Loop through merch and render if quantity > 0 */}
        {merchDetails.map(item => {
          const qty = merchQuantities[item.id];
          if (qty > 0) {
            return (
              <li key={item.id} className="flex justify-between items-center">
                <span>
                  {item.name} <span className="text-pink-400 font-bold ml-1">x{qty}</span>
                </span>
                <span className="font-semibold text-gray-800">
                  {(item.price * qty).toLocaleString()} THB
                </span>
              </li>
            );
          }
          return null; // Return null if not selected
        })}
      </ul>
    </section>
  );
};
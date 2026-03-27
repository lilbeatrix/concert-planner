import { useState, useMemo } from 'react';
import { ZoneCard } from './components/ticket/ZoneCard';
import { MerchItem } from './components/merch/MerchItem';
import { BudgetSummary } from './components/budget/BudgetSummary';
import { Receipt } from './components/budget/Receipt';

function App() {
  const CONCERT_BUDGET = 12000;

  const [selectedPrice, setSelectedPrice] = useState(0);

  const [merchQuantities, setMerchQuantities] = useState<{ [key: string]: number }>({
    lightstick: 0,
    album: 0,
    photocard: 0
  });

  const total = useMemo(() => {
    const merchTotal = 
      (merchQuantities.lightstick * 1650) + 
      (merchQuantities.album * 890) + 
      (merchQuantities.photocard * 450);
    return selectedPrice + merchTotal;
  }, [selectedPrice, merchQuantities]);

  const resetAll = () => {
    setSelectedPrice(0);
    setMerchQuantities({ lightstick: 0, album: 0, photocard: 0 });
  };

  return (
    <div className="min-h-screen bg-pink-50 p-8 pb-48 font-sans">
      <div className="max-w-md mx-auto">
        <header className="mb-10 text-center">
          <span className="text-4xl mb-2 block">💖</span>
          <h1 className="text-3xl font-black text-pink-500 tracking-tight">
            Biggest Fan Planner
          </h1>
          <p className="text-pink-300 text-sm mt-1">Ready for Irene's Solo Concert!</p>
        </header>

        {/* Section 1: Ticket Zones */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-4 ml-2">
            <span className="text-xl">🎟️</span>
            <h2 className="text-lg font-bold text-gray-700">Select Your Zone</h2>
          </div>
          <ZoneCard 
            zoneName="VIP" price={6500} colorCode="#ffb3ba" 
            onSelect={setSelectedPrice} isSelected={selectedPrice === 6500}
          />
          <ZoneCard 
            zoneName="B" price={5500} colorCode="#baffc9" 
            onSelect={setSelectedPrice} isSelected={selectedPrice === 5500}
          />
          <ZoneCard 
            zoneName="C" price={4500} colorCode="#bae1ff" isAvailable={false} 
            onSelect={setSelectedPrice}
          />
          <ZoneCard 
            zoneName="D" price={3500} colorCode="#ffffba" 
            onSelect={setSelectedPrice} isSelected={selectedPrice === 3500}
          />
        </section>

        {/* Section 2: Must-Have Merch */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-4 ml-2">
            <span className="text-xl">🪄</span>
            <h2 className="text-lg font-bold text-gray-700">Must-Have Merch</h2>
          </div>
          <MerchItem 
            name="Official Lightstick" price={1650} imageUrl="🪄" 
            quantity={merchQuantities.lightstick}
            onUpdate={(q) => setMerchQuantities(prev => ({...prev, lightstick: q}))}
          />
          <MerchItem 
            name="Solo Album (Special Ver.)" price={890} imageUrl="💿" 
            quantity={merchQuantities.album}
            onUpdate={(q) => setMerchQuantities(prev => ({...prev, album: q}))}
          />
          <MerchItem 
            name="Photo Card Set" price={450} imageUrl="🃏" 
            quantity={merchQuantities.photocard}
            onUpdate={(q) => setMerchQuantities(prev => ({...prev, photocard: q}))}
          />
        </section>

        {/* Section 3: Dynamic Receipt Breakdown */}
        <Receipt 
          selectedTicketPrice={selectedPrice} 
          merchQuantities={merchQuantities} 
        />

        <div className="flex justify-center mt-6">
           <button 
             onClick={resetAll} 
             className="text-[10px] bg-white border border-pink-200 px-4 py-2 rounded-full shadow-sm hover:bg-pink-50 text-pink-400 font-bold uppercase tracking-widest"
           >
             Reset All Planning
           </button>
        </div>

        <footer className="text-center text-pink-200 text-[10px] mt-10 uppercase tracking-widest font-bold">
          Crafted with love by Beatrix
        </footer>

        {/* Sticky Budget Bar */}
        <BudgetSummary totalAmount={total} budgetLimit={CONCERT_BUDGET} />
      </div>
    </div>
  );
}

export default App;
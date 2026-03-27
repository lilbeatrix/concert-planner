import { useState } from 'react';
import { ZoneCard } from './components/ticket/ZoneCard';
import { MerchItem } from './components/merch/MerchItem';
import { BudgetSummary } from './components/budget/BudgetSummary';

function App() {
  const [total, setTotal] = useState(0);
  const CONCERT_BUDGET = 12000;

  const addToTotal = (amount: number) => setTotal(prev => prev + amount);
  const resetTotal = () => setTotal(0);

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
          <ZoneCard zoneName="VIP" price={6500} colorCode="#ffb3ba" />
          <ZoneCard zoneName="B" price={5500} colorCode="#baffc9" />
          <ZoneCard zoneName="C" price={4500} colorCode="#bae1ff" isAvailable={false} />
          <ZoneCard zoneName="D" price={3500} colorCode="#ffffba" />
        </section>

        {/* Section 2: Must-Have Merch */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-4 ml-2">
            <span className="text-xl">🪄</span>
            <h2 className="text-lg font-bold text-gray-700">Must-Have Merch</h2>
          </div>
          <MerchItem name="Official Lightstick" price={1650} imageUrl="🪄" />
          <MerchItem name="Solo Album (Special Ver.)" price={890} imageUrl="💿" />
          <MerchItem name="Photo Card Set" price={450} imageUrl="🃏" />
        </section>

        {/* Testing Controls */}
        <div className="flex gap-3 justify-center items-center mt-6 p-4 bg-white/50 rounded-2xl border border-pink-100">
           <span className="text-[10px] font-bold text-pink-400 uppercase">Test UI:</span>
           <button onClick={() => addToTotal(1000)} className="text-[10px] bg-white px-3 py-1 rounded-full shadow-sm hover:bg-pink-100 text-pink-500">+1000</button>
           <button onClick={resetTotal} className="text-[10px] bg-white px-3 py-1 rounded-full shadow-sm hover:bg-pink-100 text-pink-500">Reset</button>
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
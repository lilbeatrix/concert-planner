import { ZoneCard } from './components/ticket/ZoneCard';
import { MerchItem } from './components/merch/MerchItem';

function App() {
  return (
    <div className="min-h-screen bg-pink-50 p-8 font-sans">
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
          <ZoneCard zoneName="AL" price={6500} colorCode="#ffb3ba" />
          <ZoneCard zoneName="BR" price={5500} colorCode="#baffc9" />
          <ZoneCard zoneName="C1" price={4500} colorCode="#bae1ff" />
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

        <footer className="text-center text-pink-300 text-xs mt-10">
          Crafted with love by Beatrix
        </footer>
      </div>
    </div>
  );
}

export default App;
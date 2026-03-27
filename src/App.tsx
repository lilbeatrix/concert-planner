import { ZoneCard } from './components/ticket/ZoneCard';

function App() {
  return (
    <div className="min-h-screen bg-pink-50 p-8 font-sans">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-pink-500 mb-6 text-center">
          🎟️ Biggest Fan Ticket Zones
        </h1>

        {/* Render ZoneCards with different props */}
        <ZoneCard zoneName="AL" price={6500} colorCode="#ffb3ba" />
        <ZoneCard zoneName="BR" price={5500} colorCode="#baffc9" />
        <ZoneCard zoneName="C1" price={4500} colorCode="#bae1ff" isAvailable={false} />
        <ZoneCard zoneName="D2" price={3500} colorCode="#ffffba" />
      </div>
    </div>
  );
}

export default App;
import ColorCard from "./components/ColorCard";

function App() {
  return (
    <main className="w-screen h-screen bg-gradient-to-tr from-[#3F0071] to-[#FB2576] ">
      <h1 className="capitalize font-bold text-xl text-white">
        color palette generator
      </h1>
      {/* color cards container */}
      <div>
        <ColorCard />
      </div>
    </main>
  );
}

export default App;

import ColorCard from "./components/ColorCard";

function App() {
  return (
    <main className="w-screen min-h-screen bg-gradient-to-tr from-[#3F0071] to-[#FB2576]">
      <div className="h-16"></div>
      <h1 className="capitalize font-bold text-2xl text-white w-fit mx-auto">
        color palette generator
      </h1>
      {/* color cards container */}
      <div className="mx-auto w-fit flex flex-row gap-6 flex-wrap items-center justify-center mt-12">
        <ColorCard hex="#bbbbbb" />
        <ColorCard hex="#aaaaaa" />
        <ColorCard hex="#000000" />
        <ColorCard hex="#123a24" />
        <ColorCard hex="#ffaa99" />
      </div>
      <div className="h-16"></div>
    </main>
  );
}

export default App;

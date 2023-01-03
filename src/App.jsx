import { useEffect, useState } from "react";
import ColorCard from "./components/ColorCard";
import { getPalette } from "./utils/colormind";
import { rgbToHex } from "./utils/rgbToHex";

function App() {
  const [colors, setColors] = useState([]);
  const getNewPalette = () => {
    setColors([]);
    getPalette((res) => {
      let newColors = [];
      res.forEach((el) => {
        newColors.push(rgbToHex(...el));
      });
      setColors(newColors);
    });
  };
  useEffect(() => {
    getNewPalette();
  }, []);
  return (
    <main className="w-screen min-h-screen bg-gradient-to-tr from-[#3F0071] to-[#FB2576]">
      <div className="h-16"></div>
      <h1 className="capitalize font-bold text-2xl text-white w-fit mx-auto">
        color palette generator
      </h1>
      {/* color cards container */}
      <div className="mx-auto w-fit flex flex-row gap-6 flex-wrap items-center justify-center mt-12">
        {colors.length == 0 && (
          <div className="h-80 text-white  flex items-center">
            <p className="text-2xl">loading</p>
          </div>
        )}
        {colors.length > 0 &&
          colors.map((el, index) => <ColorCard key={index} hex={el} />)}
      </div>
      <div className="mx-auto w-fit mt-12">
        <button
          onClick={getNewPalette}
          className="bg-[#0002A1] text-white py-4 px-20 rounded-3xl font-bold"
        >
          Generate Palette
        </button>
      </div>
      <div className="h-16"></div>
    </main>
  );
}

export default App;

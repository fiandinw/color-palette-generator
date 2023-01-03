function ColorCard({ hex = "#000000" }) {
  return (
    <div className="bg-white rounded-lg w-56 h-80 px-4 pt-4 flex flex-col items-center">
      <div
        className="w-full h-5/6 rounded-lg"
        style={{
          backgroundColor: hex,
        }}
      ></div>
      <p className="text-gray-600 font-bold my-auto uppercase">{hex}</p>
    </div>
  );
}

export default ColorCard;

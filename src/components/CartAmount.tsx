import { useState } from "react";

interface INumber {
  number: number;
}

function CartAmount({ number }: INumber) {
  const [numSelected, setNumSelected] = useState(number);

  function decreaseAmount() {
    if (numSelected === 1) return;

    setNumSelected((prev) => prev - 1);
  }
  return (
    <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden w-fit bg-white shadow-md">
      <button
        onClick={() => setNumSelected((prev) => prev + 1)}
        className="w-10 h-10 flex items-center justify-center text-lg text-gray-700 hover:bg-gray-100 transition"
      >
        +
      </button>

      <input
        min="1"
        className="w-10 h-10 text-center text-base border-l border-r border-gray-300 outline-none focus:ring-2 focus:ring-purple-300 transition"
        value={numSelected}
        onChange={() => setNumSelected(numSelected)}
      />

      <button
        onClick={() => decreaseAmount()}
        className="w-10 h-10 flex items-center justify-center text-lg text-gray-700 hover:bg-gray-100 transition"
      >
        -
      </button>
    </div>
  );
}

export default CartAmount;

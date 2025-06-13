interface CartAmountProps {
  quantity: number;
  onChange: (delta: number) => void;
}

function CartAmount({ quantity, onChange }: CartAmountProps) {
  return (
    <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden w-fit bg-white shadow-md">
      <button
        onClick={() => onChange(1)}
        className="w-10 h-10 cursor-pointer flex items-center justify-center text-lg text-gray-700 hover:bg-gray-100 transition"
      >
        +
      </button>

      <input
        min="1"
        className="w-10 h-10 cursor-pointer text-center text-base border-l border-r border-gray-300 outline-none focus:ring-2 focus:ring-purple-300 transition"
        value={quantity}
        readOnly
      />

      <button
        onClick={() => onChange(-1)}
        className="w-10 h-10 cursor-pointer flex items-center justify-center text-lg text-gray-700 hover:bg-gray-100 transition"
      >
        -
      </button>
    </div>
  );
}

export default CartAmount;

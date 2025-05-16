import { useState } from "react";

interface IColors {
  colors: string[];
}

function ColorPicker({ colors }: IColors) {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div className="space-y-2 mb-6">
      <h3 className="text-md font-medium text-gray-800 mb-3">Color</h3>
      <div className="flex gap-3">
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => setSelectedColor(color)}
            className={`w-7 h-7 rounded-full transition-all duration-300 ${
              selectedColor === color
                ? "ring-2 ring-offset-2 ring-purple-400 scale-110"
                : "border-gray-300"
            }`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
}

export default ColorPicker;

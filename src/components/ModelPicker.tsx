import { useState } from "react";

interface IModels {
  models: string[];
}

function ModelPicker({ models }: IModels) {
  const [selectedModel, setSelectedModel] = useState("");

  return (
    <div className="space-y-2">
      <h3 className="text-md font-medium text-gray-800 mb-3">Model</h3>
      <div className="flex gap-3">
        {models.map((model) => (
          <button
            key={model}
            onClick={() => setSelectedModel(model)}
            className={`w-12 aspect-square flex items-center justify-center rounded-md border text-sm font-medium transition-all duration-300
                ${
                  selectedModel === model
                    ? "border-purple-500 ring-2 ring-purple-300 bg-purple-50 scale-105"
                    : "border-gray-300 bg-white hover:bg-gray-50"
                }
                    `}
          >
            {model}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ModelPicker;

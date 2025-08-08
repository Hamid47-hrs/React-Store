import React, { useState } from "react";

function Settings() {
  const [formData, setFormData] = useState({
    siteName: "",
    description: "",
    theme: "light",
    isActive: true,
    mainteneceMessage: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Settings Saved.");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Site Settings</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="siteName" className="block mb-1 text-sm font-medium">
            Site Name
          </label>
          <input
            type="text"
            name="siteName"
            value={formData.siteName}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
        <div>
          <label
            htmlFor="description"
            className="block mb-1 text-sm font-medium"
          >
            Site Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          ></textarea>
        </div>
        <div>
          <label htmlFor="theme" className="block mb-1 text-sm font-medium">
            Site Theme
          </label>
          <select
            name="theme"
            value={formData.theme}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="isActive"
            checked={formData.isActive}
            onChange={handleChange}
            className="h-4 w-4 text-blue-500 focus:ring-blue-800 border-gray-300 rounded"
          />
          <label htmlFor="isActive" className="text-sm mt-1">
            Site is Activated
          </label>
        </div>
        {!formData.isActive && (
          <div>
            <label
              htmlFor="mainteneceMessage"
              className="block mb-1 text-sm font-medium"
            >
              Maintenece Message
            </label>
            <input
              type="text"
              name="mainteneceMessage"
              value={formData.mainteneceMessage}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
        )}

        <button
          type="submit"
          className="bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition text-sm shadow-sm shadow-gray-400"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default Settings;

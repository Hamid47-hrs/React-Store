import { useState } from "react";
import { Link } from "react-router-dom";

function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    address: "",
    dob: "",
    acceptedTerms: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;
    const checked = type === "checkbox" ? target.checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.acceptedTerms) {
      alert("You must accept the Terms and Conditions.");
      return;
    }

    console.log("Form Submitted", formData);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4 rounded-lg shadow-lg">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          User Registration
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-1 text-gray-700">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-700">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            >
              <option value="">Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="acceptedTerms"
              checked={formData.acceptedTerms}
              onChange={handleChange}
              className="accent-blue-600 mt-1"
            />
            <label className="text-sm text-gray-600">
              I accept the{" "}
              <Link to="/terms" className="text-blue-600 hover:underline">
                Terms and Conditions
              </Link>
            </label>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;

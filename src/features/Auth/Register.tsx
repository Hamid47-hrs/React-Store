import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const namePattern = /^[A-Za-z\s]+$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;

    if (!namePattern.test(formData.name)) {
      setError("Name should only contain English letters and space!");
      return;
    }

    if (!passwordPattern.test(formData.password)) {
      setError(
        "Password should be atleast 8 letters and contain letters, numbers and symbols!"
      );
      return;
    }

    console.log("User Data:", formData);
    navigate("/login");
  };

  return (
    <div className="h-[calc(100vh-155px)] flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <label htmlFor="name" className="block mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 mb-4 rounded"
          required
        />
        <label htmlFor="email" className="block mb-2">
          E-mail
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 mb-4 rounded"
          required
        />
        <label htmlFor="password" className="block mb-2">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 mb-4 rounded"
          required
        />

        {error && <p className="max-w-95 text-red-500 mb-3">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 mt-5 rounded cursor-pointer"
        >
          Register
        </button>
        <div className="mt-5 flex gap-30">
          <p className="font-medium">Already have a account?</p>
          <Link
            to="/Login"
            className="font-semibold text-indigo-500 hover:text-indigo-800 hover:underline"
          >
            Login here
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;

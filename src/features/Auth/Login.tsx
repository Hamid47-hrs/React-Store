import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("User Data: ", formData);
    localStorage.setItem("isLoggedIn", "true");
    navigate("/dashboard");
  };

  return (
    <div className="h-[calc(100vh-155px)] flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <label htmlFor="email" className="block mb-2">
          E-mail{" "}
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2 mb-4"
          required
        />
        <label htmlFor="password" className="block mb-2">
          Password{" "}
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded p-2 mb-4"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 mt-8 rounded cursor-pointer"
        >
          Login
        </button>
        <div className="mt-5 flex gap-5">
          <p className="font-medium">Don't have an account?</p>
          <Link
            className="font-semibold text-indigo-500 hover:text-indigo-800 hover:underline"
            to="/register"
          >
            Create new account here
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;

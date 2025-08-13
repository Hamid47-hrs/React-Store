import React, { useState } from "react";

function NewsTeller() {
  const [email, setEmail] = useState("");

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    console.log("Email submitted: ", email);
    setEmail("");
  };

  return (
    <section className="bg-blue-50 py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Newsletter Membership
        </h2>
        <p className="text-gray-600 mb-8">
          Stay updated on our newest products, discounts, and store
          news—subscribe to our newsletter.
        </p>
        <form
          onSubmit={handleSubmitForm}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your E-mail..."
            required
            className="px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-2/3"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default NewsTeller;

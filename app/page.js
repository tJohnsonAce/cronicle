"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Replace this URL with your GetWaitlist endpoint
    const waitlistUrl = "https://api.getwaitlist.com/submit/{11975}";

    const response = await fetch(waitlistUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      // Handle successful submission
      console.log("Thank you for joining our waiting list!");
    } else {
      // Handle error
      console.error("An error occurred while submitting the form");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to <span className="text-blue-600">Cronicle</span>
        </h1>

        <p className="mt-3 text-2xl">
          Discover the future of blockchain-based blogging.
        </p>

        <div className="mt-6">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-md border-2 border-gray-300 text-black" // Added text-black here
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="ml-4 px-6 py-3 bg-blue-500 text-black rounded-md hover:bg-blue-700 transition"
            >
              Join Waiting List
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

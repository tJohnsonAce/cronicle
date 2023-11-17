"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage(""); // Reset message

    // Make sure to use the correct waitlist_id as per your GetWaitlist dashboard
    const waitlistId = 11975; // Your actual waitlist ID
    const signupData = {
      email: email,
      waitlist_id: waitlistId,
    };

    try {
      const response = await fetch(
        "https://api.getwaitlist.com/api/v1/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signupData),
        }
      );

      const data = await response.json(); // Parse the JSON response

      if (response.ok) {
        setMessage("Thank you for joining our waiting list!");
      } else {
        console.error("Response Status:", response.status); // Log the status for debugging
        console.error("Response Body:", data); // Log the body for more details
        setMessage(
          data.message || "An error occurred while submitting the form."
        ); // Display the API's error message if available
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred while submitting the form.");
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

        {message && <p className="text-red-500">{message}</p>}

        <div className="mt-6">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-md border-2 border-gray-300 text-black"
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

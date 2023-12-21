import React, { useState, forwardRef } from "react";

const Newsletter = forwardRef((props, ref) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const publicationId = "pub_b9d34035-841a-431f-b6f7-29d086f5ae05";
    const endpoint = `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`;

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `yNj0Mv9XD0gO9YWqLx0ThEbFZOALTLuSSUSu9paUbedFta5Bm152QQSckpQffUge`,
        },
        body: JSON.stringify({ email, publicationId }),
      });

      const responseData = await response.json();

      if (response.ok) {
        setEmail("");
        setMessage("Thank you for subscribing!");
      } else {
        console.error("API Error:", responseData);
        setMessage(
          `Failed to subscribe: ${responseData.message || "Please try again."}`
        );
      }
    } catch (error) {
      console.error("Network Error:", error);
      setMessage("An error occurred. Please check your network.");
    }
  };

  return (
    <div ref={ref} className="relative text-white py-24">
      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Stay Updated!</h2>
          <p className="mb-6 text-lg max-w-md mx-auto">
            Subscribe to our newsletter to get the latest updates about Cronicle
            and stay ahead in the world of decentralized blogging.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex justify-center items-center flex-wrap"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 rounded-l-lg text-black w-full md:w-auto"
            />
            <button
              type="submit"
              className="bg-emerald-600 text-white px-6 py-3 rounded-r-lg font-bold hover:bg-emerald-800 transition duration-300 mt-4 md:mt-0 md:ml-4"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
});
Newsletter.displayName = "Newsletter";
export default Newsletter;

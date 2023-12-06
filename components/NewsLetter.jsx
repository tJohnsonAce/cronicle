import React, { useState, forwardRef } from "react";

const NewsletterSignup = forwardRef((props, ref) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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

NewsletterSignup.displayName = "NewsletterSignup";

export default NewsletterSignup;

import React, { forwardRef } from "react";
import { FaXTwitter } from "react-icons/fa6";

const NewsLetter = forwardRef((props, ref) => {
  const handleTwitterFollow = () => {
    window.open("https://twitter.com/cronicleBlog", "_blank");
  };

  return (
    <div className="relative max-w-lg mx-auto pb-8 pt-6 px-4 text-center">
      <h2 className="text-3xl font-bold text-white">Stay Updated!</h2>
      <p className="text-lg text-gray-300 mb-6">
        Follow us on X to receive news and updates about Cronicle&apos;s
        development and launch.
      </p>
      <div className="flex justify-center">
        <button
          ref={ref}
          onClick={handleTwitterFollow}
          className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-indigo-800 focus:outline-none focus:ring-0 active:bg-blue-700 transition duration-150 ease-in-out"
        >
          <span className="mr-2">Follow on</span>
          <FaXTwitter size={20} />
        </button>
      </div>
    </div>
  );
});

NewsLetter.displayName = "NewsLetter";

export default NewsLetter;

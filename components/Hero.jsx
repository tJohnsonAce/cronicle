"use client";

export default function HeroSection({ onLearnMoreClick, onGetUpdatesClick }) {
  return (
    <div
      className="relative z-10 flex justify-center lg:justify-start h-screen flex-col font-roboto"
      style={{ height: "60vh" }}
    >
      <div className="absolute inset-0"></div>
      <div className="z-10 absolute lg:bottom-0 lg:left-0 px-4 lg:px-10 pb-4 lg:pb-10 md:bottom-10 bottom-20">
        <h1
          className="text-6xl md:text-8xl font-bold mb-4 text-center lg:text-left text-white"
          style={{ textShadow: "0px 0px 8px rgba(150, 150, 150, 0.5)" }}
        >
          Cronicle
        </h1>
        <p
          className="text-gray-300 text-xl md:text-3xl mb-8 text-center lg:text-left"
          style={{ textShadow: "0px 0px 8px rgba(150, 150, 150, 0.5)" }}
        >
          Welcome to{" "}
          <span
            style={{
              background: "linear-gradient(45deg, #3a3fe7, #06daff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
              display: "inline",
            }}
          >
            Cronicle
          </span>{" "}
          — your blogging platform powered by Solana
        </p>
        <div className="flex justify-center lg:justify-start space-x-4">
          <button
            onClick={onGetUpdatesClick}
            className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold text-sm sm:text-lg transition-colors duration-300 ease-in-out bg-teal-600 text-white shadow-lg hover:bg-teal-800"
          >
            Get Updates
          </button>
          <button
            onClick={onLearnMoreClick}
            className="clean-button px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold text-sm sm:text-lg transition-colors duration-300 ease-in-out text-white border border-white hover:bg-gray-100 hover:text-black"
          >
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

export default function HeroSection({ onLearnMoreClick, onGetUpdatesClick }) {
  return (
    <div
      className="relative z-10 flex justify-center lg:justify-start h-screen flex-col"
      style={{ fontFamily: "Roboto, sans-serif", height: "60vh" }}
    >
      s
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, transparent 100%)",
        }}
      ></div>
      <div className="z-10 absolute lg:bottom-0 lg:left-0 px-4 lg:px-10 pb-4 lg:pb-10 md:bottom-10 bottom-20">
        {" "}
        <h1 className="text-6xl md:text-8xl text-white font-bold mb-4 text-center lg:text-left">
          Cronicle
        </h1>
        <p className="text-xl md:text-3xl text-white mb-8 text-center lg:text-left">
          Welcome to{" "}
          <span
            style={{
              background: "linear-gradient(to right, #84fab0 0%, #8fd3f4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Cronicle
          </span>{" "}
          — your blogging platform powered by Solana
        </p>
        <div className="flex justify-center lg:justify-start space-x-4">
          <button
            onClick={onGetUpdatesClick}
            className="clean-button bg-emerald-600 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-emerald-800 transition duration-300"
          >
            Get Updates
          </button>
          <button
            onClick={onLearnMoreClick}
            className="clean-button bg-transparent border border-white text-white px-6 py-3 rounded-lg font-bold text-lg hover:border-black hover:bg-white hover:text-black transition duration-300"
          >
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}

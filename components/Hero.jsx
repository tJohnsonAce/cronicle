"use client";

import Image from "next/image";
import heroBackground from "../public/cronicleBG-min.png"; // Replace with the actual path to your hero image

export default function HeroSection() {
  const handleWaitlistSignup = () => {
    const waitlistUrl = `https://www.getwaitlist.com/waitlist/11975`; // Replace with your specific waitlist URL
    window.open(waitlistUrl, "_blank");
  };

  return (
    <div
      className="relative h-full md:h-auto flex flex-col justify-center"
      style={{ fontFamily: "Roboto, sans-serif", height: "60vh" }}
    >
      {/* The hero image */}
      <Image
        src={heroBackground}
        alt="Jupiter Space Station"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      {/* Radial dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 1) 0%, transparent 100%)",
        }}
      ></div>
      {/* Hero text and buttons container */}
      <div className="z-10 absolute bottom-0 left-0 px-4 lg:px-10 pb-4 lg:pb-10">
        <h1 className="text-white text-8xl font-bold mb-4">Cronicle</h1>
        <p className="text-white text-2xl mb-8">
          Welcome to Cronicle — your blogging platform powered by Solana
        </p>
        <div className="space-x-4">
          <button
            className="clean-button bg-orange-500 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-orange-600 transition duration-300"
            onClick={handleWaitlistSignup}
          >
            Join the waitlist
          </button>
          <button className="clean-button bg-transparent border border-white text-white px-6 py-3 rounded-lg font-bold text-lg hover:border-black hover:bg-white hover:text-black transition duration-300">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}

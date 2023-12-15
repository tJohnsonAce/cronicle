"use client";

import FeaturesSection from "@/components/Features";
import HeroSection from "@/components/Hero";
import NewsLetter from "@/components/NewsLetter";
import React, { useRef } from "react";

export default function HomePage() {
  const featuresRef = useRef(null);
  const followButtonRef = useRef(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToNewsletter = () => {
    followButtonRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative bg-gradient-to-br from-black via-gray-800 to-gray-900 text-white">
      <div className="relative z-10 space-y-12">
        {" "}
        {/* Add spacing between components */}
        <HeroSection
          onLearnMoreClick={scrollToFeatures}
          onGetUpdatesClick={scrollToNewsletter}
        />
        <div className="py-12">
          {" "}
          <FeaturesSection ref={featuresRef} />
        </div>
        <div className="py-12">
          {" "}
          <NewsLetter ref={followButtonRef} />
        </div>
      </div>
    </div>
  );
}

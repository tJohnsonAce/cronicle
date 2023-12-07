"use client";

import FeaturesSection from "@/components/Features";
import HeroSection from "@/components/Hero";
import NewsletterSignup from "@/components/NewsLetter";
import React, { useRef } from "react";

export default function HomePage() {
  const featuresRef = useRef(null);
  const newsletterRef = useRef(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToNewsletter = () => {
    newsletterRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative" style={{ fontFamily: "Roboto, sans-serif" }}>
      {/* Updated Linear Gradient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 5,
          background: "#000000" /* Fallback for old browsers */,
          background:
            "-webkit-linear-gradient(to top, #434343, #000000)" /* Chrome 10-25, Safari 5.1-6 */,
          background:
            "linear-gradient(to top, #434343, #000000)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
        }}
      ></div>

      <div className="relative z-10">
        <HeroSection
          onLearnMoreClick={scrollToFeatures}
          onGetUpdatesClick={scrollToNewsletter}
        />

        <FeaturesSection ref={featuresRef} />
        <NewsletterSignup ref={newsletterRef} />
      </div>
    </div>
  );
}

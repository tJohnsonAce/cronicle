"use client";

import FeaturesSection from "@/components/Features";
import HeroSection from "@/components/Hero";
import NewsletterSignup from "@/components/NewsLetter";
import React, { useRef } from "react";
import featuresBackground from "../public/featuresBG-min.webp";
import Image from "next/image";

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
      {/* Smaller Radial Gradient for Spotlight Effect */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 5,
          background:
            "radial-gradient(circle at 500% 20%, rgba(255,255,255,0.4) 0%, transparent 20%, rgba(0,0,0,1) 100%)",
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

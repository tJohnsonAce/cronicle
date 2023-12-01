"use client";

import FeaturesSection from "@/components/Features";
import HeroSection from "@/components/Hero";
import React, { useRef } from "react";

export default function HomePage() {
  const featuresRef = useRef(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <HeroSection onLearnMoreClick={scrollToFeatures} />
      <FeaturesSection ref={featuresRef} />
    </div>
  );
}

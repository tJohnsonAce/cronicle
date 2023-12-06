// Page.jsx
"use client";

import FeaturesSection from "@/components/Features";
import HeroSection from "@/components/Hero";
import Nav from "@/components/Nav";
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
      <Image
        src={featuresBackground}
        alt="Features Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
        unoptimized={true}
      />

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

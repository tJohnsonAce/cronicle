import React, { useRef, useEffect } from "react";

const features = [
  {
    title: "Decentralized Publishing",
    description:
      "Immutable and censorship-resistant content, ensuring freedom of expression.",
  },
  {
    title: "Tokenized Content and Economy",
    description:
      "Tokenize blog posts as NFTs for unique monetization and ownership opportunities.",
  },
  {
    title: "Community Governance",
    description:
      "Influence the future of the platform through DAO and token-based voting systems.",
  },
  {
    title: "Wallet Integration",
    description:
      "Seamless wallet integration for easy transactions and micropayments.",
  },
  {
    title: "Creator Tools and Analytics",
    description:
      "Advanced tools for content creation and analytics for insights into performance.",
  },
  {
    title: "Reputation System",
    description:
      "Reward and track content creators and community members for their positive platform contributions.",
  },
];

function FeaturesSectionComponent(props, ref) {
  return (
    <div
      ref={ref}
      className="relative flex flex-col justify-center md:h-auto py-10"
      style={{ fontFamily: "Roboto, sans-serif" }}
    >
      <div className="absolute inset-0"></div>
      <div className="container mx-auto px-6 z-10 relative">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
          >
            Key Features of Cronicle
          </h2>
          <div className="mt-4 h-1 w-24 bg-white mx-auto"></div>{" "}
          {/* Underline */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-container bg-gray-100 bg-opacity-80 rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300"
            >
              <h3 className="feature-title font-semibold text-2xl text-white">
                {feature.title}
              </h3>
              <p className="text-gray-200 mt-3">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeaturesSection = React.forwardRef(FeaturesSectionComponent);

export default FeaturesSection;

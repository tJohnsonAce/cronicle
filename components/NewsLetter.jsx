import React, { forwardRef } from "react";

const Newsletter = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="relative text-white py-24">
      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Stay Updated!</h2>
          <p className="mb-6 text-lg max-w-md mx-auto"></p>
          <iframe
            src="https://embeds.beehiiv.com/b49da8b1-77d1-410e-b1a6-2240a2b26c9f"
            data-test-id="beehiiv-embed"
            width="100%"
            height="320"
            frameborder="0"
            scrolling="no"
            style={{
              borderRadius: "20px",
              border: "2px solid #e5e7eb",
              margin: 0,
              backgroundColor: "transparent",
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
});

Newsletter.displayName = "Newsletter";
export default Newsletter;

import React from "react";
import { motion } from "framer-motion";

function Spons() {
  const imagePaths = [
    "/wavecrageimages/Adda1658929478.jpg",
    "/wavecrageimages/cropped-MENTORx-logo-black-with-white-tag-line-Round-small-2.jpg",
    "/wavecrageimages/doorstep.jpg",
    // Add more image paths here
  ];

  return (
    <div className="relative">
      <div className="flex gap-4 overflow-x-scroll scroll-smooth px-4">
        {imagePaths.map((src, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="min-w-[200px] bg-red-500 overflow-hidden"
          >
            <img
              src={src}
              alt={`wavecraze-${index}`}
              onError={(e) => (e.target.src = "/default-image.jpg")}
              className="h-full w-full object-cover hover:scale-110 duration-300"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Spons;

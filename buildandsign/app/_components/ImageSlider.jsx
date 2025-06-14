'use client';

import { useEffect, useState } from 'react';

const images = [
  '/poster.jpg',
  '/poster1.jpg',
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-lg overflow-hidden border-black border-2">
      <img
        src={images[currentIndex]}
        alt={`ป้ายโฆษณาหมายเลข ${currentIndex + 1}`}
        className="h-80 [@media(max-width:500px)]:h-60 transition-opacity duration-1000"
        loading="eager"
        decoding="async"
      />
    </div>
  );
}

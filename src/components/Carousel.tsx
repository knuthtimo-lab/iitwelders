import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({ className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Array of carousel images
  const images = [
    {
      src: '/carousel_1.png',
      alt: 'Professional welding services - Industrial welding work',
      label: 'Industrial Welding'
    },
    {
      src: '/carousel_2.png',
      alt: 'Custom metal fabrication - Precision metalwork',
      label: 'Custom Fabrication'
    },
    {
      src: '/carousel_3.png',
      alt: 'Structural steel welding - Large scale projects',
      label: 'Structural Steel'
    },
    {
      src: '/carousel_4.png',
      alt: 'Modern welding facility - Professional workspace',
      label: 'Modern Facility'
    },
    {
      src: '/carousel_5.png',
      alt: 'Quality control and inspection - Precision work',
      label: 'Quality Assurance'
    },
    {
      src: '/carousel_6.png',
      alt: 'Professional welding team - Expert craftsmen',
      label: 'Expert Team'
    }
  ];

  // Auto-advance carousel every 8 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 15 seconds of manual interaction
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Main Carousel Container - Dispel Style */}
      <div className="relative overflow-hidden bg-black">
        {/* Images Container */}
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              <div className="w-full h-full relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                
                {/* Label - Dispel Style */}
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm rounded px-2 py-1">
                  <span className="text-white text-xs font-medium">{image.label} →</span>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* Dots Indicator */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-blue-400 w-4'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

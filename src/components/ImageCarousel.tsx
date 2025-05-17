"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ImageCarouselProps {
  images: string[];
  interval?: number;
}

const ImageCarousel = ({ images, interval = 5000 }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full aspect-[16/9] sm:aspect-[4/3] md:aspect-[21/9] overflow-hidden mt-20">
      {images.map((img, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            {
              "opacity-100 z-10": index === currentIndex,
              "opacity-0 z-0": index !== currentIndex,
            }
          )}
        >
          <Image
            src={img}
            alt={`carousel-${index}`}
            fill
            className="object-contain md:object-cover bg-black"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageCarousel;

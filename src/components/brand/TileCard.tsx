"use client";

import Image from "next/image";
import { useState } from "react";

interface TileCardProps {
  name: string;
  size: string;
  description: string;
  faces: number;
  colors: number;
  image: string;
}

export function TileCard({
  name,
  size,
  description,
  faces,
  colors,
  image,
}: TileCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md transition-all duration-600 group bg-white cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative w-full h-full overflow-hidden transition-all duration-600 ${isHovered ? "bottom-full" : "bottom-0"
          }`}
      >
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-600"
        />

        <div className="absolute bottom-12 right-4 text-white drop-shadow-lg text-end">
          <p
            className={` font-black text-3xl transition-transform duration-500 ${isHovered ? "scale-150" : "scale-100"
              }`}
          >
            {name}
          </p>
          <p
            className={`text-xl font-medium transition-transform duration-500 ${isHovered ? "scale-150" : "scale-100"
              }`}
          >
            {size}
          </p>
        </div>
      </div>

      {/* Hover Overlay */}

      <div
        className={`absolute  ${isHovered ? "top-0" : "top-full"
          }  inset-0 bg-[#d4212c] text-white p-4 flex flex-col justify-between transition-all duration-600`}
      >
        <div className="flex flex-col gap-5">
          <div>
            <h3 className="text-3xl font-black mb-1">{name}</h3>
            <p className="text-xl font-medium mb-2">{size}</p>
          </div>
          <p className="text-base leading-snug line-clamp-4">
            {description?.length > 150
              ? `${description.slice(0, 150)}...`
              : description}
          </p>
        </div>
        <div className="text-xl font-medium text-center">
          {colors} colors | {faces} faces
        </div>
      </div>
    </div>
  );
}

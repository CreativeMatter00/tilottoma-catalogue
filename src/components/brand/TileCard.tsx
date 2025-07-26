"use client"

import Image from "next/image"
import { useState } from "react"

interface TileCardProps {
    name: string
    size: string
    description: string
    faces: string
    colors: string
    image: string
}

export function TileCard({
    name,
    size,
    description,
    faces,
    colors,
    image,
}: TileCardProps) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md transition-all duration-300 group bg-white"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Image
                src={image}
                alt={name}
                layout="fill"
                objectFit="cover"
                className={`transition-opacity duration-300 ${isHovered ? "opacity-30" : "opacity-100"}`}
            />

            {/* Default text on bottom-right */}
            {!isHovered && (
                <div className="absolute bottom-4 left-4 text-white font-bold text-lg drop-shadow-lg">
                    <p>{name}</p>
                    <p className="text-sm font-medium">{size}</p>
                </div>
            )}

            {/* Hover Overlay */}
            {isHovered && (
                <div className="absolute inset-0 bg-[#d4212c] text-white p-4 flex flex-col justify-between rounded-xl transition-all duration-300">
                    <div>
                        <h3 className="text-xl font-bold mb-1">{name}</h3>
                        <p className="text-sm mb-2">{size}</p>
                        <p className="text-xs leading-snug line-clamp-4">{description}</p>
                    </div>
                    <div className="text-sm font-semibold">
                        {colors} | {faces}
                    </div>
                </div>
            )}
        </div>
    )
}

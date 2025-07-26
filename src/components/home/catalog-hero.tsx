"use client"

import { Heart, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Right, TilottomaLogo, TilottomaLogoWhite } from "../icons/logo"

export default function CatalogHeroVideo({ onNext }: { onNext: () => void }) {
    return (
        <div className="absolute inset-0 transition-transform duration-700 ease-in-out translate-x-0">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    className="w-full h-full object-cover"
                    src="/videos/Home intro.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between p-6 bg-[#25252533] backdrop-blur-[20px]">
                <TilottomaLogo />
                <div className="flex items-center space-x-4 text-white">
                    <span className="text-sm font-light">Corporate Sales</span>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 cursor-pointer">
                        <Heart className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 cursor-pointer">
                        <User className="w-5 h-5" />
                    </Button>
                </div>
            </header>


            {/* Main Content */}
            <div className="relative z-10 flex items-center justify-center h-full top-0">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-wide rounded-2xl px-14 py-2.5 bg-[#25252566]">
                    Catalogue | Tilottoma
                </h1>
            </div>

            {/* Navigation Button */}
            <button
                onClick={onNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20  transition-all duration-300 group"
            >
                <Right />
            </button>

            {/* Branding */}
            <div className="absolute bottom-6 right-6 z-10 text-right">
                <div className="flex items-center space-x-2 mb-2">
                    <TilottomaLogoWhite />
                </div>
                <p className="text-white/80 text-sm italic">Designed & Crafted by Creative Matter</p>
            </div>
        </div>
    )
}
"use client"

import { ChevronLeft, Heart, User, Grid3X3 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CatalogIndexView({ onBack }: { onBack: () => void }) {
    return (
        <div className="absolute inset-0 transition-transform duration-700 ease-in-out translate-x-0">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <video
                    className="w-full h-full object-cover"
                    src="/videos/Home index.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Header */}
            <header className="relative z-10 flex items-center justify-between p-6">
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">t</span>
                    </div>
                    <span className="text-white text-xl font-medium">tilottoma</span>
                </div>
                <div className="flex items-center space-x-4 text-white">
                    <span className="text-sm">Corporate Sales</span>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                        <Heart className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                        <User className="w-5 h-5" />
                    </Button>
                </div>
            </header>

            {/* Back Navigation */}
            <button
                onClick={onBack}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 text-white hover:bg-white/20 transition-all duration-300 group"
            >
                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
            </button>

            {/* Content */}
            <div className="relative z-10 flex h-full pt-20">
                <div className="w-64 p-6 space-y-4">
                    <nav className="space-y-2">
                        {["Home", "Industrial", "Heavy Duty", "Bathroom", "Wall"].map((item) => (
                            <a key={item} href="#" className="block text-white hover:text-red-400 transition-colors">
                                {item}
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="flex-1 p-6">
                    <h1 className="text-6xl font-light text-white mb-8">INDEX</h1>
                    <div className="flex flex-wrap gap-4 mb-8">
                        <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                            <Grid3X3 className="w-4 h-4 mr-2" />
                            Brand Alphabetically
                        </Button>
                        {["Effect", "Tiles Body", "Size", "Usage", "Project View"].map((item) => (
                            <Button
                                key={item}
                                variant="outline"
                                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                            >
                                {item}
                            </Button>
                        ))}
                    </div>

                    {/* Usage Submenu */}
                    <div className="mb-6">
                        <h3 className="text-white text-lg mb-4 underline">Usage</h3>
                        <div className="flex flex-wrap gap-3">
                            {["Actual", "Azul", "Grama", "Gila", "Others"].map((item) => (
                                <span
                                    key={item}
                                    className="text-white/80 hover:text-white cursor-pointer transition-colors"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

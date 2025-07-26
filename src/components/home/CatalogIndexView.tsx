"use client"

import { Heart, User, Grid3X3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Left, TilottomaLogo } from "../icons/logo"

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
            <header className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between p-6 bg-white backdrop-blur-[20px]">
                <TilottomaLogo />
                <div className="flex items-center space-x-4 text-[#252525]">
                    <span className="text-base font-light">Corporate Sales</span>
                    <Button variant="ghost" size="icon" className="text-[#252525] hover:bg-[#252525]/10 cursor-pointer">
                        <Heart className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-[#252525] hover:bg-[#252525]/10 cursor-pointer">
                        <User className="w-5 h-5" />
                    </Button>
                </div>
            </header>

            {/* Back Navigation */}
            <button
                onClick={onBack}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20  transition-all duration-300 group"
            >
                <Left />
            </button>

            {/* Content */}
            <div className="relative z-10 flex h-full pt-40 py-20 px-32">
                <div className="w-full flex rounded-2xl bg-[#43434366] backdrop-blur-[10px] p-10">
                    {/* Sidebar */}
                    <div className="w-64 pr-8 border-r border-white/10">
                        <nav className="space-y-2">
                            <p className="text-white text-sm mb-2 font-medium">Usage</p>
                            {["Home", "Industrial", "Heavy Duty", "Bathroom", "Wall"].map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="block px-3 py-2 text-sm text-white/90 hover:bg-white/10 rounded transition"
                                >
                                    {item}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 pl-8">
                        <h1 className="text-4xl font-semibold text-white mb-6">INDEX</h1>
                        <div className="flex flex-wrap gap-4 mb-8">
                            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 cursor-pointer">
                                <Grid3X3 className="w-4 h-4 mr-2" />
                                Brand Alphabetically
                            </Button>
                            {["Effect", "Tiles Body", "Size", "Usage", "Project View"].map((item) => (
                                <Button
                                    key={item}
                                    variant="outline"
                                    className="bg-white/10 border-white/20 text-white hover:bg-white/20 cursor-pointer"
                                >
                                    {item}
                                </Button>
                            ))}
                        </div>

                        {/* Usage Submenu */}
                        <div>
                            <h3 className="text-white text-base mb-4 font-medium">Usage</h3>
                            <div className="flex flex-wrap gap-3">
                                {["Azteca", "Azulvi", "Giania", "Gila", "Others"].map((item) => (
                                    <span
                                        key={item}
                                        className="text-white/80 hover:text-white text-sm cursor-pointer transition-colors"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

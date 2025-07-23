import { Heart, User } from "lucide-react"
import { Button } from "../ui/button"

export default function CatalogHero() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
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
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Header */}
            <header className="relative z-10 flex items-center justify-between p-6">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">t</span>
                    </div>
                    <span className="text-white text-xl font-medium">tilottoma</span>
                </div>

                {/* Right side navigation */}
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

            {/* Main Content */}
            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center">
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-wide">
                        Catalogue | Tilottoma
                    </h1>
                </div>
            </div>

            {/* Bottom Right Branding */}
            <div className="absolute bottom-6 right-6 z-10 text-right">
                <div className="flex items-center space-x-2 mb-2">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">t</span>
                    </div>
                    <span className="text-white text-lg font-medium">tilottoma</span>
                </div>
                <p className="text-white/80 text-sm italic">Designed & Crafted by Creative Matrix</p>
            </div>
        </div>
    )
}


"use client"

import { useState } from "react"
import CatalogIndexView from "./CatalogIndexView"
import CatalogHeroVideo from "./catalog-hero"

export default function CatalogHero() {
    const [showIndex, setShowIndex] = useState(false)

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <div
                className={`absolute inset-0 transition-transform duration-700 ease-in-out ${showIndex ? "-translate-x-full" : "translate-x-0"
                    }`}
            >
                <CatalogHeroVideo onNext={() => setShowIndex(true)} />
            </div>

            <div
                className={`absolute inset-0 transition-transform duration-700 ease-in-out ${showIndex ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <CatalogIndexView onBack={() => setShowIndex(false)} />
            </div>
        </div>
    )
}

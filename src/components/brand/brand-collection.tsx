"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Heart, Search, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Input } from "../ui/input"
import { TileCard } from "./TileCard"
import { TilottomaLogo } from "../icons/logo"

interface Product {
    id: string
    name: string
    dimensions: string
    image: string
    description?: string
    colors?: number
    faces?: number
}

const products: Product[] = [
    {
        id: "amazonas",
        name: "Amazonas",
        dimensions: '35.43" x 35.43"',
        image: "/image/brand/9.jpg",
    },
    {
        id: "angora",
        name: "Angora",
        dimensions: '11.81" x 35.43"',
        image: "/image/brand/8.jpg",
    },
    {
        id: "cristallo",
        name: "Cristallo",
        dimensions: '35.43" x 35.43"',
        image: "/image/brand/4.jpg",
        description:
            "Marble is still shining in all its glory, especially in shades of white. White shades that convey a feeling of peace and relaxation. The DA VINCI collection, designed in 2017 to convey the luxury conferred by a noble material such as marble and with the characteristic durability of ultra-resistant porcelain.....",
        colors: 8,
        faces: 6,
    },
    {
        id: "da-vinci",
        name: "Da Vinci",
        dimensions: '23.62" x 47.24"',
        image: "/image/brand/5.jpg",
    },
    {
        id: "domino",
        name: "Domino",
        dimensions: '23.62" x 47.24"',
        image: "/image/brand/10.jpg",
    },
    {
        id: "elektra",
        name: "Elektra",
        dimensions: '23.62" x 47.24"',
        image: "/image/brand/1.jpg",
    },
    {
        id: "fontana",
        name: "Fontana",
        dimensions: '23.62" x 47.24"',
        image: "/image/brand/2.jpg",
    },
    {
        id: "ground",
        name: "Ground",
        dimensions: '23.62" x 23.62"',
        image: "/image/brand/7.jpg",
    },
]

interface BrandCollectionProps {
    brandId: string
}
// { brandId }: BrandCollectionProps
export default function BrandCollection() {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
    const [searchTerm, setSearchTerm] = useState("")

    const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))

    const handleProductClick = (product: Product) => {
        setSelectedProduct(product)
    }

    const closeProductDetail = () => {
        setSelectedProduct(null)
    }

    return (
        <div className="min-h-screen bg-gray-50">
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


            {/* Main Content */}
            <main className=" px-6 py-8 pt-32">
                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        <TileCard key={product.id} name={product.name} size={product.dimensions} description={product?.description || ""} faces={product?.faces || 0} colors={product?.colors || 0} image={product.image} />
                    ))}
                </div>
            </main>

            {/* Product Detail Modal */}
            {selectedProduct && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100">
                        <div className="relative">
                            <button
                                onClick={closeProductDetail}
                                className="absolute top-4 right-4 z-10 bg-white/80 rounded-full p-2 hover:bg-white transition-colors"
                            >
                                <ArrowLeft className="w-5 h-5 rotate-45" />
                            </button>

                            <div className="grid md:grid-cols-2 gap-0">
                                {/* Product Image */}
                                <div className="relative h-96 md:h-full">
                                    <Image
                                        src={selectedProduct.image || "/placeholder.svg"}
                                        alt={selectedProduct.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Product Info */}
                                <div className="p-8 bg-red-500 text-white flex flex-col justify-center">
                                    <h2 className="text-4xl font-light mb-4">{selectedProduct.name}</h2>
                                    <p className="text-xl mb-6">{selectedProduct.dimensions}</p>

                                    {selectedProduct.description && (
                                        <p className="text-sm leading-relaxed mb-6 opacity-90">{selectedProduct.description}</p>
                                    )}

                                    {selectedProduct.colors && selectedProduct.faces && (
                                        <div className="text-lg font-medium">
                                            {selectedProduct.colors} Colors | {selectedProduct.faces} Faces
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}



{/* <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        
                        <div className="flex items-center space-x-4">
                            <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-gray-900">
                                <ArrowLeft className="w-5 h-5" />
                                <span>Collection</span>
                            </Link>
                            <div className="flex items-center space-x-2 ml-8">
                                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">t</span>
                                </div>
                                <span className="text-gray-900 text-xl font-medium">tilottoma</span>
                            </div>
                        </div>

                     
                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <Input
                                    placeholder="Search..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10 w-64"
                                />
                            </div>
                            <Button variant="outline" size="sm">
                                Effect
                            </Button>
                            <Button variant="outline" size="sm">
                                Tiles Body
                            </Button>
                            <Button variant="outline" size="sm">
                                Size
                            </Button>
                            <Button variant="outline" size="sm">
                                Usage
                            </Button>
                        </div>

                                <div className="flex items-center space-x-4 text-gray-600">
                            <span className="text-sm">Corporate Sales</span>
                            <Button variant="ghost" size="icon">
                                <Heart className="w-5 h-5" />
                            </Button>
                            <Button variant="ghost" size="icon">
                                <User className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </header> */}

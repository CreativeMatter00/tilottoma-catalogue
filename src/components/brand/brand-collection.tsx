"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Search, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { TilottomaLogo } from "../icons/logo";
import { Input } from "../ui/input";
import { TileCard } from "./TileCard";

interface Product {
  id: string;
  name: string;
  dimensions: string;
  image: string;
  description?: string;
  colors?: number;
  faces?: number;
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
];

// interface BrandCollectionProps {
//     brandId: string
// }
// { brandId }: BrandCollectionProps
export default function BrandCollection() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeProductDetail = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}

      <header className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between p-6 bg-white backdrop-blur-[20px]">
        <TilottomaLogo />
        <div className="flex items-center space-x-4 text-[#252525]">
          <span className="text-base font-light">Corporate Sales</span>
          <Button
            variant="ghost"
            size="icon"
            className="text-[#252525] hover:bg-[#252525]/10 cursor-pointer"
          >
            <Heart className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-[#252525] hover:bg-[#252525]/10 cursor-pointer"
          >
            <User className="w-5 h-5" />
          </Button>
        </div>
      </header>

      <div className="pt-32">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="flex items-center space-x-2 text-[#252525] text-2xl font-medium"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Collection</span>
              </Link>
            </div>

            <div className="flex items-center space-x-4 rounded-lg gap-14">
              <div className="relative w-64">
                <Input
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-4 pt-2 w-full h-10 placeholder:text-[#7A7A7A] text-base text-black bg-[#E8E8E8]  border-none"
                />
                <div className="absolute right-0 top-0 bottom-0 left-10/12 bg-[#898989] rounded-r-lg flex justify-center items-center">
                  <Search className=" text-white w-5 h-5" />
                </div>
              </div>
              <div className=" flex gap-2.5 items-center">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center rounded-full font-light bg-[#252525]"
                >
                  <Image
                    src={"/image/brand/button1.png"}
                    alt="button-1"
                    width={100}
                    height={100}
                    className="w-5 h-5"
                  />
                  Effect
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center rounded-full font-light bg-[#252525]"
                >
                  <Image
                    src={"/image/brand/button2.png"}
                    alt="button-2"
                    width={100}
                    height={100}
                    className="w-5 h-5"
                  />
                  Tiles Body
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center rounded-full font-light bg-[#252525]"
                >
                  <Image
                    src={"/image/brand/button3.png"}
                    alt="button-3"
                    width={100}
                    height={100}
                    className="w-5 h-5"
                  />
                  Size
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center rounded-full font-light bg-[#252525]"
                >
                  <Image
                    src={"/image/brand/button4.png"}
                    alt="button-4"
                    width={100}
                    height={100}
                    className="w-5 h-5"
                  />
                  Usage
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className=" px-6 py-8">
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <TileCard
              key={product.id}
              name={product.name}
              size={product.dimensions}
              description={product?.description || ""}
              faces={product?.faces || 0}
              colors={product?.colors || 0}
              image={product.image}
            />
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
                <div className="p-8 text-white flex flex-col justify-center">
                  <h2 className="text-4xl font-light mb-4">
                    {selectedProduct.name}
                  </h2>
                  <p className="text-xl mb-6">{selectedProduct.dimensions}</p>

                  {selectedProduct.description && (
                    <p className="text-sm leading-relaxed mb-6 opacity-90">
                      {selectedProduct.description}
                    </p>
                  )}

                  {selectedProduct.colors && selectedProduct.faces && (
                    <div className="text-lg font-medium">
                      {selectedProduct.colors} Colors | {selectedProduct.faces}{" "}
                      Faces
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

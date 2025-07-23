import BrandCollection from "@/components/brand/brand-collection"

interface BrandPageProps {
    params: {
        id: string
    }
}

export default function BrandPage({ params }: BrandPageProps) {
    return <BrandCollection brandId={params.id} />
}

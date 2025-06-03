import { ProductType } from "@/types/ProductType"

type ProductProps = { 
    product: ProductType
}
export default function Product ({ product } : ProductProps){
    return (
        <div className="flex flex-col shadow-lg h-96  bg-amber-400 text-gray-300 p-5">
            <div className="relative max-h-72 flex-1">IMG</div>
            <div className="flex justify-between font-bold my-3">{product.title}</div>
            <button className="rounded-md bg-white text-amber-400 px-3.5 py-2.5 text-sm text-center">Adicionar ao Carrinho</button>
        </div>
    )
}
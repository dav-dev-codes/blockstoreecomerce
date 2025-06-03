import { ProductType } from "@/types/ProductType"
import ProductImage from "./ProductImage"

type ProductProps = { 
    product: ProductType
}
export default function Product ({ product } : ProductProps){
    return (
        <div className="flex flex-col shadow-lg h-96  bg-amber-400 p-5 text-white">
            <div className="relative max-h-72 flex-1">
                <ProductImage product={product} fill />
            </div>
            <div className="flex justify-between font-bold my-3">
                <p className="w-40 truncate">
                {product.title}
                </p>
                <p className="text-md text-white">
                {product.price}   
                </p>
                </div>
            <button className="rounded-md bg-white text-amber-400 px-3.5 py-2.5 text-sm text-center">
                Adicionar ao Carrinho
            </button>
        </div>
    )
}
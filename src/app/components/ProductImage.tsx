'use client'
import { useState } from "react";
import Image from "next/image";
import { ProductType } from "@/types/ProductType"
import { Fascinate } from "next/font/google";

type ProductImagePprops = {
    product: ProductType;
    fill?: boolean;
};
export default function ProductImage({ product, fill }: ProductImagePprops){
    const [loading, setLoading] = useState(true);
    return fill ? (
      <Image 
        src={product.image}
        fill
        alt={product.title}
        className={`object-cover ${
            loading ? 'scale-110 blur-3xl grayscale'
            : 'scale-100 blue-0 grayscale-0'
            }`} 
            onLoadingComplete={() => setLoading(false)}
        />
    ) : (
      <Image 
      src={product.image}
      width={400}
      height={700}
      alt={product.title}
      className={`object-cover ${
          loading ? 'scale-110 blur-3xl grayscale'
          : 'scale-100 blue-0 grayscale-0'
          }`} 
          onLoadingComplete={() => setLoading(false)}
      />
    )

}
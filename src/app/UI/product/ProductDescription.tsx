import { fetchProductByTN } from "@/app/lib/data";
import React from 'react'

const ProductDescription = async({TN }: { TN: string | null}) => {
  if (TN == null) return <h1>No se encontro el Producto</h1>
  const data = await fetchProductByTN(TN);
  if (data == null) return <h1>No se encontro el Producto</h1>
  const {product} = data
  return (
    <div>
        <h2 className="text-lg font-bold">Descripción</h2>
        <ul className="list-disc pl-5">
        <li>Marca: {product.brandName}</li>
        <li>model: {product.model}</li>
        <li>colorName: {product.variationsColor?.[0]?.colorName}</li>
        <li>Size: <span className="font-bold text-red-500">{product.variationsColor?.[0]?.variationsSize?.[0]?.sizeName}</span></li>
        <li>TN: {TN}</li>
        <li>UPC: {product.upc}</li>
        <li>statusGeneric: <span className="font-bold text-red-500">{product.variationsColor?.[0]?.variationsSize?.[0]?.statusGeneric}</span></li>
        </ul>
    </div>
  )
}

export default ProductDescription
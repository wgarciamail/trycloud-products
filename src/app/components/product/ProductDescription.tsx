import { productParent, productTN, variationsSize } from '@/models/product'
import React from 'react'

const ProductDescription = ({productParent: productParent}: { productParent: productParent | null | undefined}) => {
  {console.log(productParent)}
  if (productParent == null) return <h1>No se encontro el Producto</h1>
  return (
    <div>
        <h2 className="text-lg font-bold">Descripción</h2>
        <ul className="list-disc pl-5">
        <li>Marca: {productParent.brandName}</li>
        <li>model: {productParent.model}</li>
        <li>colorName: {productParent.variationsColor?.[0]?.colorName}</li>
        <li>Size: {productParent.variationsColor?.[0]?.variationsSize?.[0]?.sizeName}</li>
        <li>TN: {productParent.variationsColor?.[0]?.variationsSize?.[0]?.TN}</li>
        <li>UPC: {productParent.variationsColor?.[0]?.variationsSize?.[0]?.Upc}</li>
        <li>statusGeneric: {productParent.variationsColor?.[0]?.variationsSize?.[0]?.statusGeneric}</li>
        </ul>
    </div>
    
  )
}

export default ProductDescription
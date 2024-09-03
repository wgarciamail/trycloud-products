"use client";

import React from 'react'

const ProductColors = ({variationsColor} : {variationsColor: any}) => {
  return (
    <div className="my-4">
        <label className="block text-sm font-medium">Color:</label>
        <div className="flex space-x-2">
            <span className="border p-2">{variationsColor[0].colorName}</span>
            {/* Añade más opciones de color según sea necesario */}
        </div>
    </div>
  )
}

export default ProductColors;
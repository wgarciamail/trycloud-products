import { productParent, productSuggestion } from "@/models/product";
import React from "react";
import Image from "next/image";

const ProductSuggestion = ({suggestion} : {suggestion: Array<productSuggestion>}) => {
    if (!suggestion) return (
        <div>No hay sugerencias de productos sugeridos</div>
    );
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {suggestion.map((product) => (
          <div key={product.TN} className="border p-4 rounded-lg shadow-md">
            <Image
              src={product.images}
              width={200}
              height={200}
              alt={product.productName}
              className="w-full h-48 object-cover mb-4"
            />
            <h2>{product.productName}</h2>
            {/* <p className="text-xs">TN: {product.TN}</p> */}
            <p className="text-xs">TNP: {product.TNP}</p>
            <p className="text-gray-500 text-xxs">
              Provider: {product.providerName}
            </p>
            <p className="text-gray-500 text-xxs">{product.category}</p>
            <p className="text-gray-500 text-xxs">score:{product.score}</p>
            <div className="grid grid-cols-6 gap-2 text-xxs mt-2">
              {product.sizeName &&
                product.sizeName.map((size) => (
                  <button
                    key={size}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold  py-2  rounded"
                  >
                    {size}
                  </button>
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductSuggestion;

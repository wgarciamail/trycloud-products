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
            <p className="text-gray-500 text-xxs break-words">{product.category}</p>
            <p className="text-gray-500 text-xxs overflow-hidden text-ellipsis">score:{product.score}</p>
            <div className="flex flex-wrap mt-1 m-auto">
              {product.sizeName &&
                product.sizeName.map((size) => (
                  <button
                    key={size}
                    className="rounded bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold p-2 m-1 w-10"
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

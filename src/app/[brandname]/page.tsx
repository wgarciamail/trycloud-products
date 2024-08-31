"use client";

import { useState } from "react";
import React, { useEffect } from "react";
import Image from "next/image";
import { AuthService } from "@/services/authService";
import { fetchProductsByBrand } from "@/app/lib/data";

const ProductsBrand = ({ params }: { params: { brandname: string } }) => {
  const [products, setProducts] = useState<Array<any> | null>(null);

  useEffect(() => {
    if (AuthService.validateSession()) {
       const getProducts = async () => {
         const response = await fetchProductsByBrand(params.brandname);
         setProducts(response);
       }
       getProducts();
    }
  }, [params.brandname]);


  if (!products) return <div>No hay sugerencias de productos sugeridos</div>;
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product: any) => (
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
            <p className="text-gray-500 text-xxs break-words">
              {product.category}
            </p>
           {/*  <div className="flex flex-wrap mt-1 m-auto">
              {product.sizeName &&
                product.sizeName.map((size) => (
                  <button
                    key={size}
                    className="rounded bg-blue-500 hover:bg-blue-700 text-white text-xs font-bold p-2 m-1 w-10"
                  >
                    {size}
                  </button>
                ))}
            </div> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsBrand;

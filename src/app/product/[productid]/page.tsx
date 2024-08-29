"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FC } from 'react';
//import { makeRequest, HttpMethods, ApiResponse } from '@/services/apiServices';
import { fetchProduct } from '@/app/lib/data';
import ProductImages from '@/app/components/product/ProductImages';
import ProductColors  from '@/app/components/product/ProductColors';
import ProductSize  from '@/app/components/product/ProductSize';
import ProductStores from '@/app/components/product/ProductStores';
import ProductDescription from '@/app/components/product/ProductDescription';
import ProductSuggestion from '@/app/components/product/ProductSuggestion';
import { productParent, productSuggestion, productTN } from '@/models/product';
import { AuthService } from '@/services/authService';

const Product: FC<{params: {productid: string}}> = ({params}) => {
  const [product, setVariation] = useState<productTN | null>(null);
  const [productParent, setProductParent] = useState<productParent | null>(null);
  const [suggestion, setSuggestion] = useState<Array<productSuggestion> | []>([]);

  useEffect(() => {
      setProductParent(null);
      if (AuthService.validateSession()) {
        fetchProduct(params.productid).then(
          (response: productParent | null) => {
            if (response) {
              setProductParent(response);
            }
          },
          (error) => {
            console.log(error);
          }
        )
      }
  }, [params.productid])

  if (!productParent) {
    return <div>Error: no se encontro el producto con el identificador {params.productid}</div>;
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <div className="flex flex-col md:flex-row">
        {/* Columna de Imágenes Pequeñas */}
        <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4 overflow-x-auto md:overflow-y-auto scrollbar-hide">
          <ProductImages variationsColor={productParent.variationsColor} />
        </div>
        {/* Imagen Principal */}
        <div className="flex-1 mt-4 md:mt-0">
          <Image src={productParent.image} alt="Producto" width={500} height={600} className="w-full h-auto" />
        </div>
        {/* Información del Producto */}
        <div className="flex-1 p-4">
          <h1 className="text-xl md:text-2xl font-bold">{productParent.name}</h1>
          <p>TNP:{productParent.TNP}</p>
          <p className="text-lg">${productParent.price}</p>
          <div className="mt-4">
            <ProductColors variationsColor={productParent.variationsColor}/>
            <ProductSize variationsColor={productParent.variationsColor} setVariation={setVariation} setSuggestion={setSuggestion} />
          </div>
          <div className="mt-4 flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
            <button className="bg-blue-500 text-white p-2">AÑADIR AL CARRITO</button>
            <button className="bg-green-500 text-white p-2">COMPRAR AHORA</button>
          </div>
         {/*  <div className="mt-4">
            <a href="#" className="text-blue-500">+ Agregar a Mis listas</a>
          </div> */}
          <div className="mt-4">
            <p>Merchant: {productParent.merchant}</p>
          </div>
          <div className="mt-4 flex flex-col md:flex-row  md:space-x-4">
            <ProductDescription productParent={product?.product}/>
            <ProductStores store={product?.stores} />
          </div>
          <div className="mt-4">
          </div>
        </div>
      </div>
      <ProductSuggestion suggestion={suggestion} />
    </div>
  );
};

export default Product;

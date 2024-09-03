import React from 'react'
import Image from 'next/image'
import { fetchProduct } from '@/app/lib/data'
import ProductColors from './ProductColors';
import ProductSize from './ProductSize';
import ProductDescription from './ProductDescription';
import ProductStores from './ProductStores';

const product : React.FC<{TNP: string | null,  }> = async ({TNP}) => {
    
    const product = TNP &&  await fetchProduct(TNP);

    //console.dir(product);
    if (!product) {
        return <h2 className=" col-span-3 md:col-span-2 text-xl font-bold">Error: no se encontro el producto con el identificador {TNP}</h2>
    }
    return (
      <>
        <div className="col-span-3 md:col-span-2">
            <h2 className="text-xl font-bold mb-4">{product.name}</h2>
            <div className='flex flex-row'>
                <div className="flex-1 mt-4 md:mt-0">
                    <Image src={product.image} alt="Producto" width={400} height={500} className="w-full h-auto" />
                </div>
                <div className="flex-1 p-4">
                    <h1 className="text-xl md:text-2xl font-bold">{ "product.name"}</h1>
                    <p>TNP:{product.TNP}</p>
                    <p className="text-lg">${product.price}</p>
                    <p>Merchant: {product.merchant}</p>
                   
                    <div className="mt-4">
                      <ProductColors variationsColor={product.variationsColor}/>
                      <ProductSize TNP={product.TNP} variationsColor={product.variationsColor} />
                    </div>
                    
                    <div className="mt-4 flex flex-col md:flex-row  md:space-x-4">
                      <ProductDescription productParent={product}/>
                      <ProductStores TN={product.variationsColor[0].variationsSize[0].TN} />
                    </div>
                    <div className="mt-4">
                    </div>
                </div>
            </div>
        </div>
      </>
    )
}

export default product
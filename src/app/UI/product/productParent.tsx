import {FC, Suspense} from 'react'
import Image from 'next/image'
import { fetchProduct } from '@/app/lib/data'
import ProductColors from './ProductColors';
import ProductSize from './ProductSize';
import ProductDescription from './ProductDescription';


const product : FC<{TNP: string | null,  TN: string | null }> = async ({TNP, TN}) => {
    
    const product = TNP &&  await fetchProduct(TNP);
    //console.log(product)
    if (!product) {
        return <h2 className=" col-span-3 md:col-span-2 text-xl font-bold">Error: no se encontro el producto con el identificador {TNP}</h2>
    }
    return (
      <>
        <h2 className="text-xl text-center md:text-left font-bold mb-4">{product.name}</h2>
        <div className='flex flex-col md:flex-row'>
            <div className="flex-1 mt-4 md:mt-0 md:max-w-10:">
                <Image src={product.image} alt="Producto" width={300} height={400} className="md:w-full h-auto" />
            </div>
            <div className="flex-1 p-4">
                <p>TNP:{product.TNP}</p>
                <p className="text-lg">${product.price}</p>
                <p>Merchant: {product.merchant}</p>
                
                <div className="mt-4">
                  <ProductColors variationsColor={product.variationsColor}/>
                  <ProductSize TNP={product.TNP} variationsColor={product.variationsColor} />
                </div>
                
                <div className="mt-4 flex flex-col md:flex-row  md:space-x-4">
                  <ProductDescription TN={TN}/>
                </div>
                <div className="mt-4">
                </div>
            </div>
        </div>
      </>
    )
}

export default product
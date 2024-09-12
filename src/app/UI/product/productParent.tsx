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
        return <h2 className="text-center text-xl font-bold text-gray-700">Error: no se encontro el producto con el identificador {TNP}</h2>
    }
    return (
      <>
        <h2 className="text-xl text-center md:text-left font-bold mb-4">{product.name}</h2>
        <div className='flex flex-col md:flex-row'>
            <div className=" mt-4 md:mt-0 md:max-w-1/3">
                <Image src={product.image} alt="Producto" width={400} height={500} className=" h-auto" />
            </div>
            <div className="flex-1 p-4">
                <p>TNP: {product.TNP}</p>
                <p className="text-lg">${product.price}</p>
                <p>Merchant: {product.merchant}</p>
                <div className="mt-4">
                  <ProductColors variationsColor={product.variationsColor}/>
                  <ProductSize TNP={product.TNP} variationsColor={product.variationsColor} />
                </div>
                
                <div className="mt-4 flex flex-col md:flex-row  md:space-x-4">
                  <Suspense fallback={<div>Cargando...</div>}>
                    <ProductDescription TN={TN}/>
                  </Suspense>
                </div>
            </div>
        </div>
      </>
    )
}

export default product
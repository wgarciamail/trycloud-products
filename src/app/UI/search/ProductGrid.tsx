import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { fetchSearchFacetProducts } from "@/app/lib/data";
import ProductFilter from "@/app/UI/search/ProductFilter";
import { searchFacet } from '@/app/lib/definitions';


const ProductGrid = async({ searchParams }: {
    searchParams: {
      providerName: string,
      keword?: string,
      pageToken?: string,
      pageDirection?: string
    }}) => {

 const results = await fetchSearchFacetProducts(searchParams.providerName, searchParams.keword, searchParams.pageToken, searchParams.pageDirection);
  if (searchParams.keword === undefined) {
    searchParams.keword = '';
  }
  if (searchParams.pageToken === undefined) {
    searchParams.pageToken = '';
  }
  if (searchParams.pageDirection === undefined) {
    searchParams.pageDirection = '';
  }
  if (searchParams.providerName === undefined) {
    searchParams.providerName = '';
  }
  let pageTokenAfter =  '';
  let pageTokenBefore = '';
  const { searchProducts: products, count, ProviderNameList } = results as searchFacet;
  //console.log(ProviderNameList);
  if (products !== null) {
    if (products.length > 0) {
      pageTokenAfter = products[products.length - 1].paginationToken;
      pageTokenBefore = products[0].paginationToken;
    }
  }

  return (
    <>
      <ProductFilter />

      {products === null || products.length === 0 && (
        <div className="h-[50vh] flex justify-center items-center">
          <h3 className="text-red-500 text-2xl font-bold text-center">No se encontraron registro para la búsqueda &quot;{searchParams.keword}&quot;</h3>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products?.map((product) => (
          <Link href={`/dashboard/products/${product.TNP}`} key={product.TNP}>
            <div key={product.TN} className="border p-4 rounded-lg shadow-md flex flex-col h-full">
              <h2 className="truncate">{product.productName}</h2>
              <Image
                src={product.image}
                width={180}
                height={200}
                alt={product.productName}
                className="object-cover h-52 my-2 mx-auto"
              ></Image>
              <p className="text-xs">TNP: {product.TNP}</p>
              <p className="text-gray-500 text-xxs">{product.providerName}</p>
              <p className="text-gray-500 text-xxs">{product.score}</p>
            <p className="text-gray-500 text-xxs">Actualizado: {product.dateUpdate}</p>
              <p className="text-gray-500 text-xxs">Creado: {product.dateCreated}</p>
            </div>
          </Link>
        ))}
      </div>
       {/* Paginación */}
       <div className="flex justify-center items-center gap-1 mt-8">
        <Link 
          href={`/dashboard/search?providerName=${searchParams.providerName}&keword=${searchParams.keword}&pageToken=${pageTokenBefore}&pageDirection=before`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Anterior
        </Link>
        <Link 
          href={`/dashboard/search?providerName=${searchParams.providerName}&keword=${searchParams.keword}&pageToken=${pageTokenAfter}&pageDirection=after`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            siguiente</Link>
      </div>
    </>
  )
}

export default ProductGrid
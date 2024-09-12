import { fetchSearchProducts } from "@/app/lib/data";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default async function page({ searchParams }: {
  searchParams: {
    providerName: string,
    keword?: string,

  }}) {
  const applySearch = () => {
    console.log(searchParams.keword);
  }
  const products = await fetchSearchProducts(searchParams.providerName, searchParams.keword);
  if (products === null || products.length === 0) {
    return <div>Error al cargar la lista de productos</div>;
  }
  return (
    <>
      <h1 className="text-2xl font-bold mb-4 text-center">
        Lista de Productos
      </h1>

      <div className="flex justify-center items-center gap-1 mb-4">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Dime lo que quieres encontrar"
          className="md:w-1/3 p-2 border border-gray-300 rounded"
        />
        <Link href={`/dashboard/search?providerName=${searchParams.providerName}&keword=Antibacterial`}>
          <MagnifyingGlassIcon className="w-10 text-gray-300 "/>
          </Link>
      </div>
      {/** Lista de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.TN} className="border p-4 rounded-lg shadow-md">
            <h2>{product.productName}</h2>
            <Image
              src={product.images[0].Url}
              width={200}
              height={200}
              alt={product.productName}
            ></Image>
            <p className="text-xs">TNP: {product.TNP}</p>
            <p className="text-gray-500 text-xxs">{product.providerName}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-1 mt-8">
        <h3 className="text-2xl font-bold mb-4 text-center">Aqui va el paginador</h3>
      </div>
    </>
  );
}

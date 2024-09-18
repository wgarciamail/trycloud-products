import React, { Suspense } from "react";
import SearchInput from "@/app/UI/search/SearchInput";
import ProductGrid from "@/app/UI/search/ProductGrid";

export default async function page({
  searchParams,
}: {
  searchParams: {
    providerName: string;
    keword?: string;
    pageToken?: string;
    pageDirection?: string;
  };
}) {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4 text-center">
        Lista de Productos
      </h1>
      <SearchInput />
      <Suspense fallback={<div>Cargando...</div>}>
        <ProductGrid searchParams={searchParams} />
      </Suspense>
    </>
  );
}

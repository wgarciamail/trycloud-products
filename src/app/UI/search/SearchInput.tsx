"use client";

import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';



const SearchInput = () => {
  const searchParams = useSearchParams()
  const router = useRouter();
  const providerName  = searchParams.get('providerName');

  const applySearch = (productName: string = "") => {
    const searchInput = document.getElementById("search") as HTMLInputElement;
    productName??=providerName ?? "";
    console.log("search: " + searchInput.value + " - " + productName);

    router.push(`?providerName=${productName}&keword=${searchInput.value}`)
  };

  return (
    <>
      <div className="flex justify-center items-center gap-1 mb-4">
        <div className="relative  md:w-1/3">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Dime lo que quieres encontrar"
            className="w-full p-2 border border-gray-300 rounded pr-10"
            //onChange={() => applySearch(providerName as string)}
          />
          <MagnifyingGlassIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-300" />
        </div>
        <button 
          onClick={() => applySearch(providerName as string)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Buscar
        </button>
      </div>
    </>
  );
};

export default SearchInput;

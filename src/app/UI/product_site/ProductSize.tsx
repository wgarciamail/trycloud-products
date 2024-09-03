"use client";

import React from "react";
import { fetchRelatedEmbedding, fetchStoreByTN } from "@/app/lib/data";

const selectSize = async (tn: string, sizeName: string, setVariation: any, setSuggestion: any) => {
  const responseVariation = await fetchStoreByTN(tn);
  setVariation(responseVariation);
  const responseSugestion = await fetchRelatedEmbedding(tn, sizeName);
  setSuggestion(responseSugestion);

}

const ProductSize = ({ variationsColor, setVariation, setSuggestion }: { variationsColor: any, setVariation: any, setSuggestion: any }) => {
  return (
    <>
      <label className="block text-sm font-medium">Talla (US):</label>
      <div className="md:hidden">
        <select className="border p-2 w-full">
          <option>Selecciona la talla...</option>
          {variationsColor[0].variationsSize.map((variation: any) => (
            <option key={variation.sizeName} value="0">
              {variation.sizeName}
            </option>
          ))}
        </select>
      </div>
      <div className="hidden md:flex flex-wrap">
        {variationsColor[0].variationsSize.map((variation: any) => (
            <button key={variation.TN} className="border rounded p-2 w-10 h-10 m-1" onClick={() => selectSize(variation.TN, variation.sizeName, setVariation, setSuggestion)}>{variation.sizeName}</button>
        ))}
      </div>
    </>
  );
};

export default ProductSize;

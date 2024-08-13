"use client";

import React from "react";
import { makeRequest, HttpMethods, ApiResponse } from "@/services/apiServices";

const selectSize = (tn: string, setVariation: any, setSuggestion: any) => {
  makeRequest(
    HttpMethods.GET,
    `/products/getStoreByTN?tn=${tn}`
  ).then((responseTN: ApiResponse) => {
    if (responseTN.error && responseTN.error.message &&  0 < responseTN.error.message.length) {
      console.log(responseTN.error.message ?? 'Error desconocido al obtener el Producto');
    } else {
      setVariation(responseTN.data)
    }
  })
  makeRequest(
    HttpMethods.GET,
    `/products/getRelatedEmbedding?TN=${tn}`
  ).then((responseSugestion: ApiResponse) => {
    if (responseSugestion.error && responseSugestion.error.message &&  0 < responseSugestion.error.message.length) {
      console.log(responseSugestion.error.message ?? 'Error desconocido al obtener el Producto');
    } else {
      setSuggestion(responseSugestion.data)
    }
  })
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
      <div className="hidden md:flex flex-wrap space-x-2 space-y-2">
        {variationsColor[0].variationsSize.map((variation: any) => (
            <button key={variation.TN} className="border rounded-sm p-2 w-10 h-10" onClick={() => selectSize(variation.TN, setVariation, setSuggestion)}>{variation.sizeName}</button>
        ))}
      </div>
    </>
  );
};

export default ProductSize;

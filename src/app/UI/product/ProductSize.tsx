"use client";

import React from "react";
//import { useRouter } from "next/router";
import { useRouter } from 'next/navigation';


const ProductSize = ({ variationsColor, TNP}: { variationsColor: any, TNP: string }) => {
  const router = useRouter();
  const selectSize = async (tnp: string, tn: string, sizeName: string) => {
     router.push(`/dashboard/products/${tnp}?tn=${tn}&sizeName=${sizeName}`)
  }
  //console.log(variationsColor[0].variationsSize)
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
          <button key={variation.TN} className="border rounded p-2 w-10 h-10 m-1" onClick={() => selectSize(TNP, variation.TN, variation.sizeName)}>{variation.sizeName}</button>
        ))}
      </div>
    </>
  );
};

/* export async function getServerSideProps(context: any) {
  const { tnp, sizeName } = context.query;
  //const response = await fetchStoreByTN(TNP);
  return {
    props: {
      tnp: tnp || "",
      sizeName: sizeName || "",
    },
  };
} */

export default ProductSize;

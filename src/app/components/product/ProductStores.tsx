"use client";

import React from "react";



const ProductStores = ({store}: { store: any}) => {
  return (
    <>
        <h2 className="text-lg font-bold">Stores</h2>
        <ul className="list-disc pl-5">
            {/*variationsColor[0].variationsSize.map((size: any) => (
                size.source.map((source: any) => (
                    <li key={source.warehouse}>{size.sizeName}-{source.warehouse}-({source.quantity})</li>
                ))
               //<li key={variation.stock}>{variation.sizeName} - { variation.stock}</li>
                
            ))*/}

            { store == null || store.length == 0 ? <li>No hay existencias</li> :
            store.map((store: any) => (
                <li key={store.warehouse}>{store.warehouse}- ({store.quantity})</li>
            ))}
           
        </ul>
    </>
  );
};

export default ProductStores;

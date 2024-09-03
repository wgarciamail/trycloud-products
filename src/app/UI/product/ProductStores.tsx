import { fetchStoreByTN } from "@/app/lib/data";
import React from "react";


const ProductStores = async({TN}: { TN: string}) => {
  const store = await fetchStoreByTN(TN)
  if (store == null || store.length == 0) return <p>No hay existencias</p>

  return (
    <div>
        <h2 className="text-lg font-bold">Stores</h2>
        <ul className="list-disc pl-5">
            { store.map((store: any) => (
                <li key={store.warehouse}>{store.warehouse}- ({store.quantity})</li>
            ))}
           
        </ul>
    </div>
  );
};

export default ProductStores;

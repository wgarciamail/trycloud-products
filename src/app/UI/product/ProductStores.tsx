import { fetchProductByTN } from "@/app/lib/data";
import React from "react";


const ProductStores = async({TN}: { TN: string | null}) => {
  if (TN == null) return <p>Error: falta el parámetro TN</p>
  const data = await fetchProductByTN(TN)
  if (data == null || data.stores == null || data.stores.length == 0) return <p>No hay existencias/tiendas</p>
  console.log(data)
  const {stores} = data
  return (
    <div>
        <h2 className="text-lg font-bold">Stores</h2>
        <ul className="list-disc pl-5">
            { stores.map((store: any) => (
                <li key={store.warehouse}>{store.warehouse}- ({store.quantity})</li>
            ))}
           
        </ul>
    </div>
  );
};

export default ProductStores;

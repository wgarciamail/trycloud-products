import { fetchCustomerData, fetchProductByTN } from "@/app/lib/data";
import React from "react";


const ProductStores = async({TN}: { TN: string | null}) => {
  if (TN == null) return <p>Error: falta el parámetro TN</p>
  const dataProduct = await fetchProductByTN(TN)
  const dataCloseStore = await fetchCustomerData();


  const {stores = []} = dataProduct
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {/* Tiendas del producto */}
      <div className="col-span-1">
          <h2 className="text-lg font-bold">Tiendas del producto</h2>
          {stores == null || stores.length == 0 ? <p>No hay existencias/tiendas</p> :
          (<ul className="list-disc pl-5 border">
              { stores.map((store: any) => (
                  <li key={store.warehouse}>{store.warehouse}- ({store.quantity})</li>
              ))}
          </ul>)
          }
      </div>
      {/* Tiendas Cercanas */}
      <div className="col-span-2">
        <h2 className="text-lg font-bold">Tiendas Cercanas</h2>
        {dataCloseStore == null || dataCloseStore.stores == null || dataCloseStore.stores.length == 0 ? <p>No hay tiendas</p> :  
        (<ul className="list-disc pl-5 border">
            { dataCloseStore.stores.map((store: any) => (
                <li key={store.store_id}>{store.store_code}- ({store.name}) - {store.distance.toFixed(2)}</li>
            ))}
        </ul>
        )}
      </div>
    </div>

  );
};

export default ProductStores;

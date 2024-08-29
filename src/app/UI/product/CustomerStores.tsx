"use client";

import React from "react";



const CustomerStores = ({store}: { store: any}) => {
  return (
    <div>
        <h2 className="text-lg font-bold">Tiendas cercanas</h2>
        <ul className="list-disc pl-5">
            { store == null || store.length == 0 ? <li>No hay existencias</li> :
            store.map((store: any) => (
                <li key={store.store_code}>{store.store_code}- ({store.name}) {store.distance.toFixed(3)}</li>
            ))}
           
        </ul>
    </div>
  );
};

export default CustomerStores;

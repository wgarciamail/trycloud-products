"use client";
import { useState } from 'react';

const CustomerStores = ({stores}: { stores: any }) => {

  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200 mt-4">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Código de Tienda</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Distancia</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 text-xs">
          {stores?.map((store: any) => (
            <tr key={store.store_code}>
              <td className="px-6 py-4 whitespace-nowrap">{store.store_code}</td>
              <td className="px-6 py-4 whitespace-nowrap">{store.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{store.distance.toFixed(3)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerStores;

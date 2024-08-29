"use client";
import { useState } from 'react';

const CustomerStores = ({store}: { store: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h2 className="text-lg font-bold">Tiendas cercanas</h2>
      <button onClick={toggleAccordion} className="bg-blue-500 text-white px-4 py-2 rounded">
        {isOpen ? 'Ocultar' : 'Mostrar'} tiendas cerca de ti
      </button>
      {isOpen && (
        store == null || store.length == 0 ? (
          <p>No hay existencias</p>
        ) : (
          <table className="min-w-full divide-y divide-gray-200 mt-4">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Código de Tienda</th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Distancia</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {store.map((store: any) => (
                <tr key={store.store_code}>
                  <td className="px-6 py-4 whitespace-nowrap">{store.store_code}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{store.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{store.distance.toFixed(3)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )
      )}
    </div>
  );
};

export default CustomerStores;

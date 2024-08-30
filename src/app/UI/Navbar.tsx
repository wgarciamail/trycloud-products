"use client";
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { fetchCustomerData } from '../lib/data';

interface CartItem {
  name: string;
  size: string;
  color: string;
  quantity: number;
  price: number;
}

const Navbar: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isStoreAvailableOpen, setIsStoreOpen] = useState(false);
  const [customerData, setCustomerData] = useState<any>(null);
  const [messageStore, setMessageStore] = useState<string | null>(null);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    setIsStoreOpen(false);
  };


  const showAvailableStores = async () => {
    if (isStoreAvailableOpen) {
      setIsStoreOpen(false);
    } else {
      if (!customerData) {
        setMessageStore('Buscando las tiendas disponibles...');
        setIsStoreOpen(true);
        setIsCartOpen(false);
        const data = await fetchCustomerData();
        if (data) {
          setCustomerData(data);
          setMessageStore(null);

        } else {
          setMessageStore('No se encontraron tiendas disponibles');
        }
      } else {
        setIsStoreOpen(true);
        setMessageStore(null);
      }
    }
  };

  
  const cartItems: CartItem[] = [
    {
      name: 'CHAQUETA GLOBO DALTON AGOLDE',
      size: 'S',
      color: 'Azul',
      quantity: 2,
      price: 298.00,
    },
  ];

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);



  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="flex justify-between items-center p-4">
        <div className="text-2xl font-bold">Trycloud</div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="hidden md:flex space-x-6">
          <li className="cursor-pointer">MUJER</li>
          <li className="cursor-pointer">HOMBRE</li>
          <li className="cursor-pointer">NIÑOS</li>
          <li className="cursor-pointer">CALZADO</li>
          <li className="cursor-pointer">BELLEZA</li>
          <li className="cursor-pointer">ACCESORIOS</li>
        </ul>
        <div className="hidden md:flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search"
            className="border rounded px-2 py-1"
          />
          <i className="fas fa-search cursor-pointer"></i>
          <i className="fas fa-location-dot cursor-pointer" onClick={showAvailableStores}></i>
          <div className="relative cursor-pointer" onClick={toggleCart}>
            <i className="fas fa-shopping-bag " ></i>
            <span className="absolute top-0 right-0 bg-pink-500 text-white rounded-full text-xs px-1">2</span>
          </div>
          <div className="relative">
            <i className="fas fa-bell cursor-pointer"></i>
            <span className="absolute top-0 right-0 bg-pink-500 text-white rounded-full text-xs px-1">2</span>
          </div>
        </div>
      </div>
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-2 p-4">
          <li className="cursor-pointer">MUJER</li>
          <li className="cursor-pointer">HOMBRE</li>
          <li className="cursor-pointer">NIÑOS</li>
          <li className="cursor-pointer">CALZADO</li>
          <li className="cursor-pointer">BELLEZA</li>
          <li className="cursor-pointer">ACCESORIOS</li>
          <div className="flex flex-col space-y-2">
            <input
              type="text"
              placeholder="Search"
              className="border rounded px-2 py-1"
            />
            <i className="fas fa-search cursor-pointer"></i>
            <i className="fas fa-location-dot cursor-pointer"></i>
            <i className="fas fa-shopping-bag cursor-pointer"></i>
            <div className="relative">
              <i className="fas fa-bell cursor-pointer"></i>
              <span className="absolute top-0 right-0 bg-pink-500 text-white rounded-full text-xs px-1">2</span>
            </div>
          </div>
        </ul>
      )}
      {isCartOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 shadow-lg p-4">
          <h2 className="text-lg font-bold mb-2">Mi Cesta ({cartItems.length})</h2>
          {cartItems.map((item, index) => (
            <div key={index} className="mb-4">
              <div className="font-bold">{item.name}</div>
              <div>Talla: {item.size}</div>
              <div>Color: {item.color}</div>
              <div>Cantidad: {item.quantity}</div>
              <div>${item.price.toFixed(2)}</div>
            </div>
          ))}
          <div className="font-bold">Total: ${totalAmount.toFixed(2)}</div>
          <button className="w-full bg-black text-white py-2 mt-2">COMENZAR EL PROCESO DE PAGO</button>
        </div>
      )}
      {isStoreAvailableOpen && (
        <div className="absolute right-0 mt-2 w-100 bg-white border border-gray-200 shadow-lg p-4">
          <h2 className="text-lg font-bold mb-2">Tiendas disponible</h2>
          <div className="mb-4">
            {messageStore && <div>{messageStore}</div>}
          <table className="min-w-full divide-y divide-gray-200 mt-4">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Código de Tienda</th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Distancia</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {customerData?.stores.map((store: any) => (
                <tr key={store.store_code}>
                  <td className="px-6 py-4 whitespace-nowrap">{store.store_code}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{store.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{store.distance.toFixed(3)} km</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

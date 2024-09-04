"use client";
import React, { useState, Suspense } from 'react';
import ProductStores from './ProductStores';
import { ProductCustomer } from './ProductCustomer';

interface ProductInfoProps {
  TN: string;
  name: string;
  price: number;
  description: string;
}

const ProductTabs: React.FC<ProductInfoProps> = ({ TN, name, price, description }) => {
  const [activeTab, setActiveTab] = useState('customer');

  return (
    <div className="w-full">
      <div className="flex border-b">
        <button
          className={`py-2 px-4 ${activeTab === 'customer' ? 'border-b-2 border-blue-500' : ''}`}
          onClick={() => setActiveTab('customer')}
        >
          Cliente
        </button>
        <button
          className={`py-2 px-4 ${activeTab === 'stores' ? 'border-b-2 border-blue-500' : ''}`}
          onClick={() => setActiveTab('stores')}
        >
          Tiendas
        </button>
        <button
          className={`py-2 px-4 ${activeTab === 'cart' ? 'border-b-2 border-blue-500' : ''}`}
          onClick={() => setActiveTab('cart')}
        >
          Carrito
        </button>
        <button
          className={`py-2 px-4 ${activeTab === 'suggest' ? 'border-b-2 border-blue-500' : ''}`}
          onClick={() => setActiveTab('suggest')}
        >
          Productos Sugeridos
        </button>
      </div>
      <div className="p-4">
        {activeTab === 'customer' && 
        (
            <ProductCustomer />
        )}
        {activeTab === 'stores' && 
        (
          <div className='w-full'>
            <Suspense fallback={<div>Loading...</div>}>
              <ProductStores TN={TN} />
            </Suspense>
          </div>
        )}
        {activeTab === 'cart' && <div><strong>carrito:</strong> {description}</div>}
        {activeTab === 'suggest' && <div><strong>Sugeridos:</strong> {description}</div>}
      </div>
    </div>
  );
};

export default ProductTabs;

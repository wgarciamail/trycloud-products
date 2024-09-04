import React from 'react'
import { ProductCartDetail } from './ProductCartDetail'
import { fetchCart } from '@/app/lib/data';

export const ProductCart = async() => {
  const cart = await fetchCart();
  const cartItems = cart.products;
  const cartItemsDeleted = cart.deleted;
  const availableStores = cart.availableStore;
  const totalAmount = cartItems.reduce((total: number, item: any) => total + item.price * item.quantity, 0);

  return (
    <>
      <div className="mb-4 border rounded-md p-4">
        <div className="text-lg font-bold mb-2">Tiendas Seleccionadas</div>
        {(availableStores as any[]).map((store, index) => (
          <div key={index}>{store}</div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProductCartDetail cartItems={cartItems} title="Carrito" totalAmount={totalAmount} />
        <ProductCartDetail cartItems={cartItemsDeleted} title="Eliminados" totalAmount={0}/>
      </div>
    </>
  )
}

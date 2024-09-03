"use client";
import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { fetchCustomerData, fetchCart } from "../lib/data";
import CustomerStores from "./product_site/CustomerStores";
import { CartItem, CartNavbar } from "./cart/CartNavbar";

const Navbar: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isStoreAvailableOpen, setIsStoreOpen] = useState(false);
  const [customerData, setCustomerData] = useState<any>(null);
  const [messageStore, setMessageStore] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartItemsDeleted, setCartItemsDeleted] = useState<CartItem[]>([]);
  const [messageCart, setMessageCart] = useState<string | null>(null);
  const [availableStores, setAvailableStores] = useState<any[]>([]);

  const toggleCart = async () => {
    setIsCartOpen(!isCartOpen);
    setIsStoreOpen(false);
    if (!isCartOpen) {
      setMessageCart("Buscando el carrito...");
      setCartItems([]);
      setCartItemsDeleted([]);
      const cart = await fetchCart();
      console.dir(cart.availableStore);
      setCartItems(cart.products);
      setCartItemsDeleted(cart.deleted);
      setAvailableStores(cart.availableStore);
    }
    setMessageCart(null);
  };

  const showAvailableStores = async () => {
    if (isStoreAvailableOpen) {
      setIsStoreOpen(false);
    } else {
      if (!customerData) {
        setMessageStore("Buscando las tiendas disponibles...");
        setIsStoreOpen(true);
        setIsCartOpen(false);
        const data = await fetchCustomerData();
        if (data) {
          setCustomerData(data);
          setMessageStore(null);
        } else {
          setMessageStore("No se encontraron tiendas disponibles");
        }
      } else {
        setIsStoreOpen(true);
        setIsCartOpen(false);
        setMessageStore(null);
      }
    }
  };

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
          <i
            className="fas fa-location-dot cursor-pointer"
            onClick={showAvailableStores}
          ></i>
          <div className="relative cursor-pointer" onClick={toggleCart}>
            <i className="fas fa-shopping-bag "></i>
            {cartItems.length > 0 && (
                <span className="absolute top-0 right-0 bg-pink-500 text-white rounded-full text-xs px-1">
                  {cartItems.length}
                </span>
            )}
          </div>
          <div className="relative">
            <i className="fas fa-bell cursor-pointer"></i>
            {cartItemsDeleted.length > 0 && (
              <span className="absolute top-0 right-0 bg-pink-500 text-white rounded-full text-xs px-1">
                {cartItemsDeleted.length}
              </span>
            )}
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
              {cartItems.length > 0 && (
                <span className="absolute top-0 right-0 bg-pink-500 text-white rounded-full text-xs px-1">
                  {cartItems.length}
                </span>
              )}
            </div>
          </div>
        </ul>
      )}
      {isCartOpen && (
        <div className="absolute right-0 mt-2 w-auto bg-white border border-gray-200 shadow-lg p-4">
          {messageCart ? <div>{messageCart}</div> : (
            <>
              <div className="mb-4 border rounded-md p-4">
                <div className="text-lg font-bold mb-2">Tiendas Seleccionadas</div>
                {(availableStores as any[]).map((store, index) => (
                  <div key={index}>{store}</div>
                ))}
              </div>
              <CartNavbar cartItems={cartItems} title="Carrito" totalAmount={totalAmount} />
               <CartNavbar cartItems={cartItemsDeleted} title="Eliminados" totalAmount={0}/>
            </>
          )}
        </div>
      )}
      {isStoreAvailableOpen && (
        <div className="absolute right-0 mt-2 w-auto bg-white border border-gray-200 shadow-lg p-4">
          <h2 className="text-lg font-bold mb-2">Tiendas disponible</h2>
          <div className="mb-4">
            {messageStore && <div>{messageStore}</div>}
            <CustomerStores stores={customerData?.stores} />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar;

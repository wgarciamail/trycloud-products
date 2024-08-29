"use client";
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <i className="fas fa-location-dot cursor-pointer"></i>
          <i className="fas fa-shopping-bag cursor-pointer"></i>
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
    </nav>
  );
};

export default Navbar;

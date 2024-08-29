import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white border-b border-gray-200">
      <div className="text-2xl font-bold">Trycloud</div>
      <ul className="flex space-x-6">
        <li className="cursor-pointer">MUJER</li>
        <li className="cursor-pointer">HOMBRE</li>
        <li className="cursor-pointer">NIÑOS</li>
        <li className="cursor-pointer">CALZADO</li>
        <li className="cursor-pointer">BELLEZA</li>
        <li className="cursor-pointer">ACCESORIOS</li>
        <li className="cursor-pointer">REBAJAS</li>
      </ul>
      <div className="flex space-x-4">
        <i className="fas fa-search cursor-pointer"></i>
        <i className="fas fa-user cursor-pointer"></i>
        <i className="fas fa-location-dot cursor-pointer"></i>
        <i className="fas fa-shopping-bag cursor-pointer"></i>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex justify-between items-center">
        
        <h1 className="text-xl md:text-2xl font-bold">AVONE</h1>

        
        <ul className="hidden md:flex gap-6 font-medium text-gray-700">
          <li className="cursor-pointer">HOME</li>
          <li className="cursor-pointer">SHOP</li>
          <li className="cursor-pointer">FEATURES</li>
          <li className="cursor-pointer">LOOKBOOK</li>
          <li className="cursor-pointer">PAGE</li>
        </ul>

   
        <ul className="hidden md:flex gap-6 font-medium text-gray-700 items-center">
          <li><i className="fa-solid fa-magnifying-glass"></i></li>
          <li><i className="fa-solid fa-address-book"></i></li>
          <li><i className="fa-regular fa-heart"></i></li>
          <li className="relative">
            <i className="fa-solid fa-cart-shopping text-xl"></i>
            <span className="absolute -top-2 -right-2 bg-slate-900 text-white text-xs rounded-full px-1.5 py-0.5 leading-none">
              0
            </span>
          </li>
        </ul>


        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-gray-800 focus:outline-none"
          >
            <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
          </button>
        </div>
      </div>

     
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 bg-white shadow">
          <ul className="flex flex-col gap-3 font-medium text-gray-700">
            <li className="cursor-pointer">HOME</li>
            <li className="cursor-pointer">SHOP</li>
            <li className="cursor-pointer">FEATURES</li>
            <li className="cursor-pointer">LOOKBOOK</li>
            <li className="cursor-pointer">PAGE</li>
            <li className="flex gap-4 mt-2 text-lg">
              <i className="fa-solid fa-magnifying-glass"></i>
              <i className="fa-solid fa-address-book"></i>
              <i className="fa-regular fa-heart"></i>
              <div className="relative">
                <i className="fa-solid fa-cart-shopping text-xl"></i>
                <span className="absolute -top-2 -right-2 bg-slate-900 text-white text-xs rounded-full px-1.5 py-0.5 leading-none">
                  0
                </span>
              </div>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;

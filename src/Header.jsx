function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md px-40 py-6">
      <div className="container mx-auto flex justify-between items-center">
     
        <h1 className="text-xl md:text-2xl font-bold">AVONE</h1>

       
        <ul className="md:flex gap-6 font-medium text-gray-700">
          <li className="cursor-pointer">HOME</li>
          <li className="cursor-pointer">SHOP</li>
          <li className="cursor-pointer">FEATURES</li>
          <li className="cursor-pointer">LOOKBOOK</li>
          <li className="cursor-pointer">PAGE</li>
        </ul>

        <ul className="md:flex gap-6 font-medium text-gray-700 items-center">
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
      </div>
    </header>
  );
}

export default Header;

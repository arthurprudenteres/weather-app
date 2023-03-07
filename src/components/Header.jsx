import React from "react";
import { FiMoon, FiSun } from "react-icons/fi";

function Header() {
  return (
    <header className="text-white flex justify-between items-center px-4 py-2">
      <div className="w-14 h-14 bg-gray-100 rounded-full overflow-hidden flex items-center justify-center">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1598484033793-fb6a544f4ba2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
          alt="User Avatar"
        />
      </div>
      <nav className="flex justify-between items-center gap-4 font-medium">
        <ul className="flex justify-between items-center gap-2">
          <li>
            <a
              className="py-3 px-5 rounded-full text-gray-100 hover:bg-gray-700 hover:text-white border-2 border-gray-700 transition-all duration-200"
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="py-3 px-5 rounded-full text-gray-100 hover:bg-gray-700 hover:text-white border-2 border-gray-700 transition-all duration-200"
              href="#"
            >
              Favoritos
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
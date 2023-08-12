import React from 'react';
import { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex items-center justify-between">
        <div className="text-white text-xl">Evento Registración</div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-xl md:hidden"
        >
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
      {/* Contenidos */}
      {menuOpen && (
        <div className="mt-4">
          <ul>
            <li>
              {/* Menu */}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

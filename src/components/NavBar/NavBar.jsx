import React from 'react';
import HomeIcon from '@mui/icons-material/Home';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full w-full bg-gradient-to-r from-white to-indigo-100 p-2">
      <div className="flex items-center">
        <a href="/" className="text-purple-600 hover:text-purple-800">
          <HomeIcon fontSize="large" />
        </a>
        
        <ul className="flex gap-4 mx-auto">
          <li>
            <a
              href="/sobre"
              className="px-4 py-2 bg-white rounded-full shadow text-sm font-semibold text-gray-800 hover:bg-gray-100"
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="/cadastrar"
              className="px-4 py-2 bg-white rounded-full shadow text-sm font-semibold text-gray-800 hover:bg-gray-100"
            >
              Cadastrar
            </a>
          </li>
          <li>
            <a
              href="/livros"
              className="px-4 py-2 bg-white rounded-full shadow text-sm font-semibold text-gray-800 hover:bg-gray-100"
            >
              Ver Leituras
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
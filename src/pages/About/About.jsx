import React from 'react';

const Home = () => {
  return (
    <div className='h-screen flex items-center justify-center bg-gradient-to-r from-white to-indigo-100 overflow-y-hidden'>
      <div className="flex flex-col items-center mb-40 text-center px-4">
        <h1 className="text-md font-semibold mb-2">
          Esta é uma aplicação para um CRUD de um Reading Journal.
        </h1>
        <p className="text-md text-gray-800 max-w-xl">
          Este projeto foi elaborado na Disciplina Desenvolvimento de Sistemas Frontend do Curso de Graduação Online da PUCRS.
        </p>
      </div>
    </div>
  );
};

export default Home;
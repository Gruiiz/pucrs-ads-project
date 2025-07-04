import React from 'react';

const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-white to-indigo-100 overflow-y-hidden">
      <div className="flex items-center justify-center max-w-4xl w-full mx-auto relative z-10">
        <div>
          <h1 className="text-8xl font-bold mb-2 text-black font-lobster">Dário de Leitura</h1>
          <p className="text-xs ml-20 text-gray-800 mt-2">Palavra a palavra, vamos longe</p>
        </div>
        <div className="ml-8">
          <img
            src="https://img.icons8.com/clouds/500/000000/books.png"
            alt="Livros"
            className="w-[500px] max-h-[50vh] opacity-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
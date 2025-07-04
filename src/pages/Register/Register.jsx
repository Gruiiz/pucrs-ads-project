import React, { useState } from 'react';
import BookForm from '../../components/BookForm/BookForm';

const Register = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [message, setMessage] = useState('');

  const handleFormSubmit = async (book) => {
    const method = book.id ? 'PUT' : 'POST';
    const url = 'http://localhost:5000/books';

    try {
      await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book),
      });

      setMessage(book.id ? 'Livro atualizado com sucesso!' : 'Livro cadastrado com sucesso!');
      setSelectedBook(null);

      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Erro ao salvar o livro');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-white to-indigo-100">
      <div className="w-full max-w-md bg-transparent p-6">
        <BookForm
          onSubmit={handleFormSubmit}
          selectedBook={selectedBook}
          clearSelection={() => setSelectedBook(null)}
        />
        {message && (
          <div className="mt-4 text-center text-sm text-green-700 bg-green-100 border border-green-300 rounded p-2">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;

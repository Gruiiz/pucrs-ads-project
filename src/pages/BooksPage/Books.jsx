import React, { useState } from 'react';
import BookList from '../../components/BookList/BookList';
import BookForm from '../../components/BookForm/BookForm';
import axios from 'axios';


const Books = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [refreshList, setRefreshList] = useState(false);
  const [message, setMessage] = useState('');

  const handleFormSubmit = async (book) => {
    const url = 'http://localhost:5000/books';

    try {
      if (book.id) {
        await axios.put(url, book)
        setMessage('Livro atualizado com sucesso!')
      } else {
        await axios.post(url, book)
        setMessage('Livro cadastrado com sucesso!')
      }
      
      setSelectedBook(null);
      setRefreshList(!refreshList);

      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Erro ao salvar o livro');
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen p-16 bg-gradient-to-r from-white to-indigo-100 flex flex-col items-center">

      {message && (
        <div className="mb-4 text-center text-sm text-green-700 bg-green-100 border border-green-300 rounded p-2 w-full max-w-2xl">
          {message}
        </div>
      )}

{selectedBook && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <BookForm
        selectedBook={selectedBook}
        onSubmit={handleFormSubmit}
        clearSelection={() => setSelectedBook(null)}
      />
  </div>
)}

      <BookList onEdit={setSelectedBook} refresh={refreshList} />
    </div>
  );
};

export default Books;

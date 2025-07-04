import React, { useEffect, useState } from 'react';
import { Delete, Edit } from '@mui/icons-material';
import axios from 'axios';

const BookList = ({ onEdit, refresh }) => {
  const [books, setBooks] = useState([]);

 const fetchBooks = async () => {
    try {
      const res = await axios.get('http://localhost:5000/books');
      setBooks(res.data);
    } catch (error) {
      console.error('Erro ao carregar livros:', error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [refresh]);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/books/${id}`);
    fetchBooks();
  };

  return (
    <div className="mt-8 w-full max-w-3xl">
      <h2 className="text-center text-2xl font-bold mb-4">Livros Cadastrados</h2>
      {books.length === 0 ? (
        <p className="text-center text-gray-500">Nenhum livro cadastrado.</p>
      ) : (
        <ul className="space-y-4">
          {books.map((book) => (
            <li key={book.id} className="bg-white p-4 rounded shadow flex justify-between items-center">
              <div>
                <p><strong>Título:</strong> {book.title}</p>
                <p><strong>Autor(a):</strong> {book.author}</p>
                <p><strong>Gênero:</strong> {book.genre}</p>
                <p><strong>Data de leitura:</strong> {book.readAt}</p>
              </div>
              <div className="flex gap-3">
                <button onClick={() => onEdit(book)}>
                  <Edit className="text-blue-500 hover:text-blue-700" />
                </button>
                <button onClick={() => handleDelete(book.id)}>
                  <Delete className="text-red-500 hover:text-red-700" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;

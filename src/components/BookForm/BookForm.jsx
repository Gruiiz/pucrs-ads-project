import React, { useState, useEffect } from 'react';

const initialState = {
  id: null, 
  title: '',
  author: '',
  genre: '',
  readAt: '',
};

const BookForm = ({ onSubmit, selectedBook, clearSelection }) => {
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    if (selectedBook) {
      setForm(selectedBook);
    } else {
      setForm(initialState);
    }
  }, [selectedBook]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm(initialState);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">{selectedBook ? 'Editar Livro' : 'Adicionar Livro'}</h2>

      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Título"
        required
        className="w-full mb-3 p-2 border rounded"
      />

      <input
        name="author"
        value={form.author}
        onChange={handleChange}
        placeholder="Autor(a)"
        required
        className="w-full mb-3 p-2 border rounded"
      />

      <input
        name="genre"
        value={form.genre}
        onChange={handleChange}
        placeholder="Gênero"
        required
        className="w-full mb-3 p-2 border rounded"
      />

      <input
        type="date"
        name="readAt"
        aria-label="Data de leitura"
        value={form.readAt}
        onChange={handleChange}
        required
        className="w-full mb-4 p-2 border rounded"
      />

      <div className="flex gap-2">
        <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded">
          {selectedBook ? 'Atualizar' : 'Cadastrar'}
        </button>
        {selectedBook && (
          <button
            type="button"
            onClick={() => {
              setForm(initialState);
              clearSelection();
            }}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
};

export default BookForm;

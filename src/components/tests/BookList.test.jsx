// src/components/BookList/BookList.test.jsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import BookList from '../BookList/BookList';
import axios from 'axios';

vi.mock('@mui/icons-material', () => ({
  Edit: () => <span data-testid="edit-icon" />,
  Delete: () => <span data-testid="delete-icon" />,
}));

vi.mock('axios');

describe('BookList', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('exibe mensagem se não houver livros', async () => {
    axios.get.mockResolvedValue({ data: [] });

    render(<BookList onEdit={vi.fn()} refresh={false} />);

    expect(await screen.findByText(/nenhum livro cadastrado/i)).toBeInTheDocument();
  });

  it('chama onEdit ao clicar no botão de editar', async () => {
    const mockBook = { id: 1, title: 'Livro Teste', author: 'Autor', genre: 'Gênero', readAt: '2024-01-01' };
    const mockOnEdit = vi.fn();

    axios.get.mockResolvedValue({ data: [mockBook] });

    render(<BookList onEdit={mockOnEdit} refresh={false} />);

    const editButton = await screen.findByTestId('edit-icon');
    fireEvent.click(editButton.parentElement); // botão está no <button> que envolve o ícone

    expect(mockOnEdit).toHaveBeenCalledWith(mockBook);
  });

  it('realiza exclusão ao clicar no botão de deletar', async () => {
    const mockBook = { id: 1, title: 'Livro Teste', author: 'Autor', genre: 'Gênero', readAt: '2024-01-01' };
    axios.get.mockResolvedValue({ data: [mockBook] });
    axios.delete.mockResolvedValue({});

    render(<BookList onEdit={vi.fn()} refresh={false} />);

    const deleteButton = await screen.findByTestId('delete-icon');
    fireEvent.click(deleteButton.parentElement);

    await waitFor(() => {
      expect(axios.delete).toHaveBeenCalledWith('http://localhost:5000/books/1');
    });
  });
});

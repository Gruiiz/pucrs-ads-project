import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import BookForm from '../BookForm/BookForm';

describe('BookForm', () => {
  it('renderiza todos os campos do formulário', () => {
    render(<BookForm onSubmit={vi.fn()} selectedBook={null} clearSelection={vi.fn()} />);

    expect(screen.getByPlaceholderText('Título')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Autor(a)')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Gênero')).toBeInTheDocument();
    expect(screen.getByLabelText('Data de leitura')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /cadastrar/i })).toBeInTheDocument();
  });

  it('preenche os campos e envia o formulário', () => {
    const mockSubmit = vi.fn();

    render(<BookForm onSubmit={mockSubmit} selectedBook={null} clearSelection={vi.fn()} />);

    fireEvent.change(screen.getByPlaceholderText('Título'), { target: { value: 'Dom Casmurro' } });
    fireEvent.change(screen.getByPlaceholderText('Autor(a)'), { target: { value: 'Machado de Assis' } });
    fireEvent.change(screen.getByPlaceholderText('Gênero'), { target: { value: 'Romance' } });
    fireEvent.change(screen.getByLabelText('Data de leitura'), { target: { value: '2024-01-01' } });

    fireEvent.click(screen.getByRole('button', { name: /cadastrar/i }));

    expect(mockSubmit).toHaveBeenCalledWith({
      id: null,
      title: 'Dom Casmurro',
      author: 'Machado de Assis',
      genre: 'Romance',
      readAt: '2024-01-01',
    });
  });
});

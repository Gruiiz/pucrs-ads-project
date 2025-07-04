// src/pages/Register/Register.test.jsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Register from './Register';

global.fetch = vi.fn();

describe('Register', () => {
  it('mostra mensagem ao cadastrar um novo livro', async () => {
    fetch.mockResolvedValueOnce({ ok: true });

    render(<Register />);

    fireEvent.change(screen.getByPlaceholderText('Título'), { target: { value: '1984' } });
    fireEvent.change(screen.getByPlaceholderText('Autor(a)'), { target: { value: 'Orwell' } });
    fireEvent.change(screen.getByPlaceholderText('Gênero'), { target: { value: 'Distopia' } });
    fireEvent.change(screen.getByLabelText('Data de leitura'), { target: { value: '2025-06-01' } });

    fireEvent.click(screen.getByRole('button', { name: /cadastrar/i }));

    await waitFor(() => {
      expect(screen.getByText(/livro cadastrado com sucesso/i)).toBeInTheDocument();
    });
  });
});

// src/components/NavBar/NavBar.test.jsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Navbar from '../NavBar/NavBar';

describe('Navbar', () => {
  it('renderiza todos os links de navegação', () => {
    render(<Navbar />);

    expect(screen.getByRole('link', { name: /sobre/i })).toHaveAttribute('href', '/sobre');
    expect(screen.getByRole('link', { name: /cadastrar/i })).toHaveAttribute('href', '/cadastrar');
    expect(screen.getByRole('link', { name: /ver leituras/i })).toHaveAttribute('href', '/livros');
  });
});

import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import OrdenesDeServicioPage from '@/app/(dashboard)/ordenes-de-servicio/page';

test('Should render correct title', () => {
  render(<OrdenesDeServicioPage />);
  expect(screen.getByText('Ordenes de servicio')).toBeDefined();
});

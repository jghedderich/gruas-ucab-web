import SideBarLink from '@/components/navigation/SidebarLink';
import { render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';

vi.mock('next/navigation', () => ({
  usePathname: vi.fn(() => 'test'),
}));

test('should render correct body', () => {
  render(<SideBarLink name="Test" href="/test" icon={<div>Icon</div>} />);
  expect(screen.getByText('Icon')).toBeDefined();
});

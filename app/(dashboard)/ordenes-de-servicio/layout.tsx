'use client';
import { MapProvider } from '@/providers/maps-provider';

export default function OrdersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MapProvider>{children}</MapProvider>;
}

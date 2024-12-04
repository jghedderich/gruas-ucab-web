'use client';

import { MapLoadError } from '@/components/orders/MapLoadError';
import { MapLoading } from '@/components/orders/MapLoading';
import { Libraries, useJsApiLoader } from '@react-google-maps/api';
import { ReactNode } from 'react';

const libraries = ['places'];

export function MapProvider({ children }: { children: ReactNode }) {
  const { isLoaded: scriptLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: libraries as Libraries,
  });

  if (loadError) return <MapLoadError loadError={loadError} />;

  if (!scriptLoaded) return <MapLoading />;

  return children;
}

import React from 'react';
import { LoaderCircle } from 'lucide-react';

export const MapLoading = () => {
  return (
    <article className="min-h-[480px] flex flex-col items-center justify-center">
      <LoaderCircle className="size-10 mb-3 animate-spin text-primary" />
      <h3 className="text-lg">Cargando mapa...</h3>
    </article>
  );
};

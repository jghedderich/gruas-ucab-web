import React from 'react';

export const MapLoadError = ({ loadError }: { loadError: Error }) => {
  return (
    <article className="min-h-[480px] flex flex-col items-center justify-center">
      <h3 className="text-lg">Error al cargar el mapa: {loadError.message}</h3>
      <p className="text-sm">
        Intente recargar la página o contacte al administrador.
      </p>
    </article>
  );
};

import React from 'react';
import { Usuario } from '@/types';

export const useUsuariosTable = () => {
  const [activeUsuarios, setActiveUsuarios] = React.useState(new Set());
  const handleToggle = (usuario: Usuario) => {
    if (activeUsuarios.has(usuario.id)) {
      setActiveUsuarios(new Set(activeUsuarios.delete(usuario.id)));
    } else {
      setActiveUsuarios(new Set(activeUsuarios.add(usuario.id)));
    }
  };

  return {
    activeUsuarios,
    handleToggle,
  };
};

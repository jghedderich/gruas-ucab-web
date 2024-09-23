'use client';
import React from 'react';
import Table from '../ui/Table';
import Link from 'next/link';
import { PencilIcon } from '../icons/PencilIcon';
import { Usuario } from '@/types';
import Toggle from '../ui/Toggle';
import { useUsuariosTable } from '@/hooks/useUsuariosTable';

const columns = [
  {
    title: 'ID',
    field: 'id',
  },
  {
    title: 'Nombre',
    field: 'nombre',
  },
  {
    title: 'Correo',
    field: 'correo',
  },
  {
    title: 'Rol',
    field: 'rol',
  },
];

const pageInfo = {
  page: 1,
  perPage: 10,
  itemCount: 100,
  pageCount: 10,
  hasPreviousPage: true,
  hasNextPage: true,
};

interface UsuariosTableProps {
  usuarios: Usuario[];
}

export const UsuariosTable = ({ usuarios }: UsuariosTableProps) => {
  const { handleToggle, activeUsuarios } = useUsuariosTable();

  return (
    <Table columns={columns} pageInfo={pageInfo}>
      {usuarios.map((usuario) => (
        <tr key={usuario.id} className="border-y">
          <td className="py-4 px-5">
            <h6>{usuario.id}</h6>
          </td>
          <td className="py-4 px-5">
            <p>
              {usuario.apellido}, {usuario.nombre}
            </p>
          </td>
          <td className="py-4 px-5">
            <p>{usuario.email}</p>
          </td>

          <td className="py-4 px-5">
            <p>{usuario.rol}</p>
          </td>

          <td className="py-4 px-6">
            <Toggle
              handleClick={() => handleToggle(usuario)}
              isToggleOn={true}
            />
          </td>
          <td className="px-6">
            <Link
              href={`Usuarios/${usuario.id}`}
              className="hover:text-brand-500 transition ease-out"
            >
              <PencilIcon width={20} height={20} />
            </Link>
          </td>
        </tr>
      ))}
    </Table>
  );
};

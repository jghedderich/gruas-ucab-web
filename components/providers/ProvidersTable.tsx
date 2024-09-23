'use client';
import React from 'react';
import Table from '../ui/Table';
import Link from 'next/link';
import { PencilIcon } from '../icons/PencilIcon';
import Toggle from '../ui/Toggle';
import { Provider } from '@/types';
import { useProvidersTable } from '@/hooks/useProvidersTable';

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
    title: 'Administrador',
    field: 'admin',
  },
  {
    title: 'Flota',
    field: 'flota',
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

interface ProvidersTableProps {
  providers: Provider[];
}

export const ProvidersTable = ({ providers }: ProvidersTableProps) => {
  const { handleToggle, activeProviders } = useProvidersTable();

  return (
    <Table columns={columns} pageInfo={pageInfo}>
      {providers.map((provider) => (
        <tr key={provider.id} className="border-y">
          <td className="py-4 px-5">
            <h6>{provider.id}</h6>
          </td>
          <td className="py-4 px-5">
            <p>{provider.nombre}</p>
          </td>
          <td className="py-4 px-5">
            <p>
              {provider.admin.lastName}, {provider.admin.firstName}
            </p>
          </td>

          <td className="py-4 px-5">
            <p>{provider.flota.length} vehículos</p>
          </td>

          <td className="py-4 px-6">
            <Toggle
              handleClick={() => handleToggle(provider)}
              isToggleOn={activeProviders.has(provider.id)}
            />
          </td>
          <td className="px-6">
            <Link
              href={`providers/${provider.id}`}
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

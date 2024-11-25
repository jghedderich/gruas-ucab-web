'use client';
import React from 'react';
import Table from '../ui/Table';
import Link from 'next/link';
import { PencilIcon } from '../icons/PencilIcon';
import { IPagination, Provider } from '@/types';
import { Trash2 } from 'lucide-react';
import { useTable } from '@/hooks/use-table';

const columns = [
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
  {
    title: 'Ubicación',
    field: 'ubicacion',
  },
];

interface ProvidersTableProps {
  providers: IPagination<Provider>;
}

export const ProvidersTable = ({ providers }: ProvidersTableProps) => {
  const { handleDelete, activeItems } = useTable(
    providers.data,
    '/providers-service/providers'
  );

  return (
    <Table
      columns={columns}
      pageIndex={providers.pageIndex}
      pageSize={10}
      count={activeItems.length}
    >
      {activeItems.map((provider) => (
        <tr key={provider.id} className="border-y">
          <td className="py-3 px-4">
            <b>{provider.company.name}</b>
          </td>
          <td className="py-3 px-4">
            <p>
              {provider.name.lastName}, {provider.name.firstName}
            </p>
          </td>

          <td className="py-3 px-4">
            <p>
              {provider.vehicles.length} vehículos, {provider.drivers.length}{' '}
              conductores
            </p>
          </td>
          <td className="py-3 px-4">
            <p>
              {provider.company.city}, {provider.company.state}
            </p>
          </td>

          <td className="px-6">
            <Link
              href={`proveedores/${provider.id}`}
              className="hover:text-brand-500 transition ease-out"
            >
              <PencilIcon width={20} height={20} />
            </Link>
          </td>
          <td className="p-3">
            <button
              className="hover:text-red-500 transition ease-out"
              onClick={() => handleDelete(provider)}
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </td>
        </tr>
      ))}
    </Table>
  );
};

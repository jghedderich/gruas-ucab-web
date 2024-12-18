'use client';
import React from 'react';
import Table from '../ui/Table';
import Link from 'next/link';
import { PencilIcon } from '../icons/PencilIcon';
import { IPagination, Driver } from '@/types';
import { useTable } from '@/hooks/use-table';
import { DeleteDialog } from '../ui/DeleteDialog';

const columns = [
  {
    title: 'Nombre',
    field: 'nombre',
  },
  {
    title: 'Teléfono',
    field: 'telefono',
  },
  {
    title: 'Cédula',
    field: 'cedula',
  },
  {
    title: 'Correo electrónico',
    field: 'email',
  },
];

interface DriversTableProps {
  drivers: IPagination<Driver>;
}

export const DriversTable = ({ drivers }: DriversTableProps) => {
  const { handleDelete, activeItems } = useTable(
    drivers.data,
    '/providers-service/drivers'
  );
  return (
    <Table
      columns={columns}
      count={activeItems.length}
      pageSize={drivers.pageSize}
      pageIndex={drivers.pageIndex}
    >
      {activeItems.map((driver) => (
        <tr key={driver.id} className="border-y">
          <td className="py-3 px-4">
            <p>
              {driver.name.lastName}, {driver.name.firstName}
            </p>
          </td>
          <td className="py-3 px-4">
            <p>{driver.phone}</p>
          </td>
          <td className="py-3 px-4">
            <p>
              {driver.dni.type}-{driver.dni.number}
            </p>
          </td>

          <td className="py-3 px-4">
            <p>{driver.email}</p>
          </td>
          <td className="p-3">
            <Link
              href={`conductores/${driver.id}`}
              className="hover:text-primary transition ease-out"
            >
              <PencilIcon width={20} height={20} />
            </Link>
          </td>
          <td className="p-3">
            <DeleteDialog handleDelete={() => handleDelete(driver)} />
          </td>
        </tr>
      ))}
    </Table>
  );
};

'use client';
import React from 'react';
import Table from '../ui/Table';
import Link from 'next/link';
import { PencilIcon } from '../icons/PencilIcon';
import { IPagination, Driver } from '@/types';
import { Trash2 } from 'lucide-react';
import { useDriversTable } from '@/hooks/drivers/useDriversTable';

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
  const { handleDelete, activeDrivers } = useDriversTable(drivers.data);
  return (
    <Table
      columns={columns}
      count={activeDrivers.length}
      pageSize={drivers.pageSize}
      pageIndex={drivers.pageIndex}
    >
      {activeDrivers.map((driver) => (
        <tr key={driver.id} className="border-y">
          <td className="py-4 px-5">
            <p>
              {driver.name.lastName}, {driver.name.firstName}
            </p>
          </td>
          <td className="py-4 px-5">
            <p>{driver.phone}</p>
          </td>
          <td className="py-4 px-5">
            <p>
              {driver.dni.type}-{driver.dni.number}
            </p>
          </td>

          <td className="py-4 px-5">
            <p>{driver.email}</p>
          </td>
          <td className="py-4 px-6">
            <Link
              href={`vehiculos/${driver.id}`}
              className="hover:text-primary transition ease-out"
            >
              <PencilIcon width={20} height={20} />
            </Link>
          </td>
          <td className="py-4 px-6">
            <button
              className="hover:text-red-500 transition ease-out"
              onClick={() => handleDelete(driver)}
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </td>
        </tr>
      ))}
    </Table>
  );
};

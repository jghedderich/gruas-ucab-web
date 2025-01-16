'use client';
import React from 'react';
import Table from '../ui/Table';
import Link from 'next/link';
import { PencilIcon } from '../icons/PencilIcon';
import { IPagination, Driver } from '@/types';
import { useTable } from '@/hooks/use-table';
import { DeleteDialog } from '../ui/DeleteDialog';
import { Badge } from '../ui/badge';
import { useAuth } from '@/hooks/auth/use-auth';

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
  {
    title: 'Status',
    field: 'status',
  },
];

interface DriversTableProps {
  drivers: IPagination<Driver>;
}

export const DriversTable = ({ drivers }: DriversTableProps) => {
  const { user } = useAuth();
  const { handleDelete } = useTable(drivers.data, '/providers-service/drivers');
  const filteredDrivers =
    user?.userType === 'provider'
      ? drivers.data.filter((driver) => driver.providerId === user!.id)
      : drivers.data;

  return (
    <Table
      columns={columns}
      count={filteredDrivers.length}
      pageSize={drivers.pageSize}
      pageIndex={drivers.pageIndex}
    >
      {filteredDrivers.map((driver) => (
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

          <td className="py-3 px-4">
            <Badge
              className="rounded-full"
              variant={
                driver.status === 'Available' ? 'secondary' : 'destructive'
              }
            >
              {driver.status === 'Available' ? 'Disponible' : 'Ocupado'}
            </Badge>
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
            <DeleteDialog
              handleDelete={() => handleDelete(driver)}
              isToggleOn={driver.isActive}
            />
          </td>
        </tr>
      ))}
    </Table>
  );
};

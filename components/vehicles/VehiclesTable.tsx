'use client';
import React from 'react';
import Table from '../ui/Table';
import Link from 'next/link';
import { PencilIcon } from '../icons/PencilIcon';
import { IPagination, Vehicle } from '@/types';
import { useTable } from '@/hooks/use-table';
import { DeleteDialog } from '../ui/DeleteDialog';
import { useAuth } from '@/hooks/auth/use-auth';
import { Badge } from '../ui/badge';

const columns = [
  {
    title: 'Vehículo',
    field: 'vehiculo',
  },
  {
    title: 'Año',
    field: 'year',
  },
  {
    title: 'Tipo',
    field: 'tipo',
  },
  {
    title: 'Matrícula',
    field: 'licensePlate',
  },
];

const vehicleTypeMapping = {
  Light: 'Liviano',
  Medium: 'Mediano',
  Heavy: 'Pesado',
  Motorcycle: 'Moto',
};

interface VehiclesTableProps {
  vehicles: IPagination<Vehicle>;
}

export const VehiclesTable = ({ vehicles }: VehiclesTableProps) => {
  const { user } = useAuth();
  const { handleDelete } = useTable(
    user?.userType === 'provider'
      ? vehicles.data.filter((vehicle) => vehicle.providerId === user!.id)
      : vehicles.data,
    '/providers-service/vehicles'
  );
  return (
    <Table
      columns={columns}
      count={vehicles.count}
      pageSize={vehicles.pageSize}
      pageIndex={vehicles.pageIndex}
    >
      {vehicles.data.map((vehicle) => (
        <tr key={vehicle.id} className="border-y">
          <td className="py-3 px-4 flex gap-2 items-center">
            <div
              className="size-3 rounded-full"
              style={{ backgroundColor: vehicle.color }}
            />
            <p>
              <b>{vehicle.brand}</b> {vehicle.model}
            </p>
          </td>
          <td className="py-3 px-4">
            <p>{vehicle.year}</p>
          </td>
          <td className="py-3 px-4">
            <p>{vehicleTypeMapping[vehicle.type]}</p>
          </td>
          <td className="py-3 px-4 capitalize">
            <Badge variant="secondary">{vehicle.licensePlate}</Badge>
          </td>
          <td className="p-3">
            <Link
              href={`vehiculos/${vehicle.id}`}
              className="hover:text-primary transition ease-out"
            >
              <PencilIcon width={20} height={20} />
            </Link>
          </td>
          <td className="p-3">
            <DeleteDialog
              handleDelete={() => handleDelete(vehicle)}
              isToggleOn={vehicle.isActive}
            />
          </td>
        </tr>
      ))}
    </Table>
  );
};

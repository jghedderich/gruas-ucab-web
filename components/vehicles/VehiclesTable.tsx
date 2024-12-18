'use client';
import React from 'react';
import Table from '../ui/Table';
import Link from 'next/link';
import { PencilIcon } from '../icons/PencilIcon';
import { IPagination, Vehicle } from '@/types';
import { useTable } from '@/hooks/use-table';
import { DeleteDialog } from '../ui/DeleteDialog';

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
    title: 'Conductor',
    field: 'conductor',
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
  const { handleDelete, activeItems } = useTable(
    vehicles.data,
    '/providers-service/vehicles'
  );
  return (
    <Table
      columns={columns}
      count={activeItems.length}
      pageSize={vehicles.pageSize}
      pageIndex={vehicles.pageIndex}
    >
      {activeItems.map((vehicle) => (
        <tr key={vehicle.id} className="border-y">
          <td className="py-3 px-4">
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
          <td className="py-3 px-4">
            <p>{vehicle.providerId}</p>
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
            <DeleteDialog handleDelete={() => handleDelete(vehicle)} />
          </td>
        </tr>
      ))}
    </Table>
  );
};

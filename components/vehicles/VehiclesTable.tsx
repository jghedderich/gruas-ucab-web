'use client';
import React from 'react';
import Table from '../ui/Table';
import Link from 'next/link';
import { PencilIcon } from '../icons/PencilIcon';
import Toggle from '../ui/Toggle';
import { Vehicle } from '@/types';
import { useVehiclesTable } from '@/hooks/vehicles/useTrucksTable';

const columns = [
  {
    title: 'ID',
    field: 'id',
  },
  {
    title: 'Vehículo',
    field: 'vehiculo',
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

const pageInfo = {
  page: 1,
  perPage: 10,
  itemCount: 100,
  pageCount: 10,
  hasPreviousPage: true,
  hasNextPage: true,
};

interface VehiclesTableProps {
  vehicles: Vehicle[];
}

export const VehiclesTable = ({ vehicles }: VehiclesTableProps) => {
  const { handleToggle, activeVehicles } = useVehiclesTable();

  return (
    <Table columns={columns} pageInfo={pageInfo}>
      {vehicles.map((vehicle) => (
        <tr key={vehicle.id} className="border-y">
          <td className="py-4 px-5">
            <h6>{vehicle.id}</h6>
          </td>
          <td className="py-4 px-5">
            <p>
              <b>{vehicle.brand}</b> {vehicle.model} ({vehicle.year})
            </p>
          </td>
          <td className="py-4 px-5">
            <p>{vehicle.type}</p>
          </td>

          <td className="py-4 px-5">
            <p>{vehicle.owner}</p>
          </td>

          <td className="py-4 px-6">
            <Toggle
              handleClick={() => handleToggle(vehicle)}
              isToggleOn={activeVehicles.has(vehicle.id)}
            />
          </td>
          <td className="py-4 px-6">
            <Link
              href={`vehiculos/${vehicle.id}`}
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

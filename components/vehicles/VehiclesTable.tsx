'use client';
import React from 'react';
import Table from '../ui/Table';
import Link from 'next/link';
import { PencilIcon } from '../icons/PencilIcon';
import { Vehicle } from '@/types';
import Toggle from '../ui/Toggle';
import { useVehiclesTable } from '@/hooks/vehicles/useVehiclesTable';

const columns = [
  {
    title: 'ID',
    field: 'id',
  },
  {
    title: 'Marca',
    field: 'marca',
  },
  {
    title: 'Modelo',
    field: 'modelo',
  },
  {
    title: 'Año',
    field: 'año',
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
            <p>{vehicle.brand}</p>
          </td>
          <td className="py-4 px-5">
            <p>{vehicle.model}</p>
          </td>

          <td className="py-4 px-5">
            <p>{vehicle.year}</p>
          </td>

          <td className="py-4 px-6">
            <Toggle
              handleClick={() => handleToggle(vehicle)}
              isToggleOn={activeVehicles.has(vehicle.id)}
            />
          </td>
          <td>
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

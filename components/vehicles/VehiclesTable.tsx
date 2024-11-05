'use client';
import React from 'react';
import Table from '../ui/Table';
import Link from 'next/link';
import { PencilIcon } from '../icons/PencilIcon';
import { IPagination, Vehicle } from '@/types';
import { useVehiclesTable } from '@/hooks/vehicles/useVehiclesTable';
import { Trash2 } from 'lucide-react';

const columns = [
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

interface VehiclesTableProps {
  vehicles: IPagination<Vehicle>;
}

export const VehiclesTable = ({ vehicles }: VehiclesTableProps) => {
  const { handleDelete, activeVehicles } = useVehiclesTable(vehicles.data);
  return (
    <Table
      columns={columns}
      count={vehicles.count}
      pageSize={vehicles.pageSize}
      pageIndex={vehicles.pageIndex}
    >
      {activeVehicles.map((vehicle) => (
        <tr key={vehicle.id} className="border-y">
          <td className="py-4 px-5">
            <p>
              <b>{vehicle.brand}</b> {vehicle.model} ({vehicle.year})
            </p>
          </td>
          <td className="py-4 px-5">
            <p>{vehicle.type}</p>
          </td>

          <td className="py-4 px-5">
            <p>{vehicle.providerId}</p>
          </td>
          <td className="py-4 px-6">
            <Link
              href={`vehiculos/${vehicle.id}`}
              className="hover:text-primary transition ease-out"
            >
              <PencilIcon width={20} height={20} />
            </Link>
          </td>
          <td className="py-4 px-6">
            <button
              className="hover:text-red-500 transition ease-out"
              onClick={() => handleDelete(vehicle)}
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </td>
        </tr>
      ))}
    </Table>
  );
};

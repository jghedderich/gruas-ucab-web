'use client';
import React from 'react';
import Table from '../ui/Table';
import Link from 'next/link';
import { PencilIcon } from '../icons/PencilIcon';
import Toggle from '../ui/Toggle';
import { Truck } from '@/types';
import { useTrucksTable } from '@/hooks/vehicles/useTrucksTable';

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

interface TrucksTableProps {
  trucks: Truck[];
}

export const TrucksTable = ({ trucks }: TrucksTableProps) => {
  const { handleToggle, activeTrucks } = useTrucksTable();

  return (
    <Table columns={columns} pageInfo={pageInfo}>
      {trucks.map((truck) => (
        <tr key={truck.id} className="border-y">
          <td className="py-4 px-5">
            <h6>{truck.id}</h6>
          </td>
          <td className="py-4 px-5">
            <p>{truck.brand}</p>
          </td>
          <td className="py-4 px-5">
            <p>{truck.model}</p>
          </td>

          <td className="py-4 px-5">
            <p>{truck.year}</p>
          </td>

          <td className="py-4 px-6">
            <Toggle
              handleClick={() => handleToggle(truck)}
              isToggleOn={activeTrucks.has(truck.id)}
            />
          </td>
          <td>
            <Link
              href={`vehiculos/${truck.id}`}
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

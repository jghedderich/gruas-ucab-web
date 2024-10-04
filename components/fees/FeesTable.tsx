'use client';
import React from 'react';
import Table from '../ui/Table';
import Link from 'next/link';
import { PencilIcon } from '../icons/PencilIcon';
import { Fee } from '@/types';
import Toggle from '../ui/Toggle';
import { useFeesTable } from '@/hooks/fees/useFeesTable';

const columns = [
  {
    title: 'ID',
    field: 'id',
  },
  {
    title: 'Nombre',
    field: 'nombre',
  },
  {
    title: 'Costo base',
    field: 'base',
  },
  {
    title: 'Costo por km',
    field: 'perKm',
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

interface FeesTableProps {
  fees: Fee[];
}

export const FeesTable = ({ fees }: FeesTableProps) => {
  const { handleToggle, activeFees } = useFeesTable();

  return (
    <Table columns={columns} pageInfo={pageInfo}>
      {fees.map((fee) => (
        <tr key={fee.id} className="border-y">
          <td className="py-4 px-5">
            <h6>{fee.id}</h6>
          </td>
          <td className="py-4 px-5">
            <p>{fee.name}</p>
          </td>
          <td className="py-4 px-5">
            <p>${fee.base}</p>
          </td>
          <td className="py-4 px-5">
            <p>${fee.perKm}</p>
          </td>
          <td className="py-4 px-6">
            <Toggle
              handleClick={() => handleToggle(fee)}
              isToggleOn={activeFees.has(fee.id)}
            />
          </td>
          <td className="py-4 px-6">
            <Link
              href={`tarifas/${fee.id}`}
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

'use client';
import { AdditionalCost, IPagination } from '@/types';
import React from 'react';
import Table from '../ui/Table';
import { PencilIcon } from '../icons/PencilIcon';
import Link from 'next/link';
import { useTable } from '@/hooks/use-table';
import { Trash2 } from 'lucide-react';

const columns = [
  {
    title: 'Nombre',
    field: 'nombre',
  },
  {
    title: 'Descripción',
    field: 'description',
  },
];

interface AdditionalCostsTableProps {
  additionalCosts: IPagination<AdditionalCost>;
}

export const AdditionalCostsTable = ({
  additionalCosts,
}: AdditionalCostsTableProps) => {
  const { handleDelete, activeItems } = useTable(
    additionalCosts.data,
    '/orders-service/costdetails'
  );
  return (
    <Table
      columns={columns}
      count={additionalCosts.data.length}
      pageSize={additionalCosts.pageSize}
      pageIndex={additionalCosts.pageIndex}
    >
      {activeItems.map((cost) => (
        <tr key={cost.id} className="border-y">
          <td className="py-3 px-4">
            <h6>{cost.id}</h6>
          </td>
          <td className="py-3 px-4">
            <p>{cost.name}</p>
          </td>
          <td className="py-3 px-4">
            <p>{cost.description}</p>
          </td>

          <td className="p-3">
            <Link
              href={`costos-adicionales/${cost.id}`}
              className="hover:text-primary transition ease-out"
            >
              <PencilIcon width={20} height={20} />
            </Link>
          </td>
          <td className="p-3">
            <button
              className="hover:text-red-500 transition ease-out"
              onClick={() => handleDelete(cost)}
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </td>
        </tr>
      ))}
    </Table>
  );
};

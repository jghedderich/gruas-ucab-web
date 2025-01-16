'use client';
import React from 'react';
import Table from '../ui/Table';
import Link from 'next/link';
import { PencilIcon } from '../icons/PencilIcon';
import { IPagination, Policy } from '@/types';
import { useTable } from '@/hooks/use-table';
import { DeleteDialog } from '../ui/DeleteDialog';

const columns = [
  {
    title: 'Nombre',
    field: 'nombre',
  },
  {
    title: 'Cobertura',
    field: 'cobertura',
  },
  {
    title: 'Costo',
    field: 'costo',
  },
  {
    title: 'Tarifas',
    field: 'tarifas',
  },
];

interface PoliciesTableProps {
  policies: IPagination<Policy>;
}

export const PoliciesTable = ({ policies }: PoliciesTableProps) => {
  const { handleDelete } = useTable(policies.data, '/orders-service/policies');

  return (
    <Table
      columns={columns}
      count={policies.count}
      pageSize={policies.pageSize}
      pageIndex={policies.pageIndex}
    >
      {policies.data.map((policy) => (
        <tr key={policy.id} className="border-y">
          <td className="py-3 px-4">
            <h6>{policy.name}</h6>
          </td>
          <td className="py-3 px-4">
            <p>{policy.amountCovered} Km</p>
          </td>
          <td className="py-3 px-4">
            <p>
              ${policy.price.annualPrice}/Año ${policy.price.monthlyPrice}/Mes
            </p>
          </td>
          <td className="py-3 px-4">
            <p>
              ${policy.fees.baseFee} Base ${policy.fees.perKm} por Km
            </p>
          </td>
          <td className="p-3">
            <Link
              href={`polizas/${policy.id}`}
              className="hover:text-primary transition ease-out"
            >
              <PencilIcon width={20} height={20} />
            </Link>
          </td>
          <td className="p-3">
            <DeleteDialog
              handleDelete={() => handleDelete(policy)}
              isToggleOn={policy.isActive}
            />
          </td>
        </tr>
      ))}
    </Table>
  );
};

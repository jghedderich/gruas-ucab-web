'use client';
import React from 'react';
import Table from '../ui/Table';
import Link from 'next/link';
import { PencilIcon } from '../icons/PencilIcon';
import { Policy } from '@/types';
import Toggle from '../ui/Toggle';
import { usePoliciesTable } from '@/hooks/policies/usePoliciesTable';

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
    title: 'Costo Anual',
    field: 'costo anual',
  },
  {
    title: 'Cobertura',
    field: 'cobertura',
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

interface PoliciesTableProps {
  policies: Policy[];
}

export const PoliciesTable = ({ policies }: PoliciesTableProps) => {
  const { handleToggle, activePolicies } = usePoliciesTable();

  return (
    <Table columns={columns} pageInfo={pageInfo}>
      {policies.map((policy) => (
        <tr key={policy.id} className="border-y">
          <td className="py-3 px-4">
            <h6>{policy.id}</h6>
          </td>
          <td className="py-3 px-4">
            <p>{policy.name}</p>
          </td>
          <td className="py-3 px-4">
            <p>${policy.price}</p>
          </td>
          <td className="py-3 px-4">
            <p>${policy.amountCovered}</p>
          </td>
          <td className="p-3">
            <Toggle
              handleClick={() => handleToggle(policy)}
              isToggleOn={activePolicies.has(policy.id)}
            />
          </td>
          <td className="p-3">
            <Link
              href={`polizas/${policy.id}`}
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

'use client';
import React from 'react';
import Table from '../ui/Table';
import Link from 'next/link';
import { PencilIcon } from '../icons/PencilIcon';
import { IPagination, Operator } from '@/types';
import { Trash2 } from 'lucide-react';
import { useOperatorsTable } from '@/hooks/operators/use-operators-table';

const columns = [
  {
    title: 'Nombre',
    field: 'nombre',
  },
  {
    title: 'Teléfono',
    field: 'telefono',
  },
  {
    title: 'Correo electrónico',
    field: 'email',
  },
  {
    title: 'Órdenes',
    field: 'orders',
  },
];

interface OperatorsTableProps {
  operators: IPagination<Operator>;
}

export const OperatorsTable = ({ operators }: OperatorsTableProps) => {
  const { handleDelete, activeOperators } = useOperatorsTable(operators.data);
  return (
    <Table
      columns={columns}
      count={activeOperators.length}
      pageSize={operators.pageSize}
      pageIndex={operators.pageIndex}
    >
      {activeOperators.map((operator) => (
        <tr key={operator.id} className="border-y">
          <td className="py-3 px-4">
            <p>
              {operator.name.lastName}, {operator.name.firstName}
            </p>
          </td>
          <td className="py-3 px-4">
            <p>{operator.phone}</p>
          </td>
          <td className="py-3 px-4">
            <p>{operator.email}</p>
          </td>
          <td className="py-3 px-4">
            <p>{operator.orders.length}</p>
          </td>

          <td className="p-3">
            <Link
              href={`operadores/${operator.id}`}
              className="hover:text-primary transition ease-out"
            >
              <PencilIcon width={12} height={12} />
            </Link>
          </td>
          <td className="p-3">
            <button
              className="hover:text-red-500 transition ease-out"
              onClick={() => handleDelete(operator)}
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </td>
        </tr>
      ))}
    </Table>
  );
};

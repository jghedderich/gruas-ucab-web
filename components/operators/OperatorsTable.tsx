'use client';
import React from 'react';
import Table from '../ui/Table';
import Link from 'next/link';
import { PencilIcon } from '../icons/PencilIcon';
import { IPagination, Operator } from '@/types';
import { useTable } from '@/hooks/use-table';
import { DeleteDialog } from '../ui/DeleteDialog';

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
    title: 'Cédula',
    field: 'dni',
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
  const { handleDelete, activeItems } = useTable(
    operators.data,
    '/orders-service/operators'
  );
  return (
    <Table
      columns={columns}
      count={activeItems.length}
      pageSize={operators.pageSize}
      pageIndex={operators.pageIndex}
    >
      {activeItems.map((operator) => (
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
            <p>
              {operator.dni.type}-{operator.dni.number}
            </p>
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
            <DeleteDialog handleDelete={() => handleDelete(operator)} />
          </td>
        </tr>
      ))}
    </Table>
  );
};

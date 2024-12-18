'use client';
import React from 'react';
import Link from 'next/link';
import Table from '../ui/Table';
import { Department, IPagination } from '@/types';
import { PencilIcon } from '../icons/PencilIcon';
import { useTable } from '@/hooks/use-table';
import { DeleteDialog } from '../ui/DeleteDialog';

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
    title: 'Descripción',
    field: 'description',
  },
];

interface DepartmentsTableProps {
  departments: IPagination<Department>;
}
export const DepartmentsTable = ({ departments }: DepartmentsTableProps) => {
  const { handleDelete, activeItems } = useTable(
    departments.data,
    '/admin-service/departments'
  );

  return (
    <Table
      columns={columns}
      count={activeItems.length}
      pageSize={departments.pageSize}
      pageIndex={departments.pageIndex}
    >
      {activeItems.map((department) => (
        <tr key={department.id} className="border-y">
          <td className="py-3 px-4">
            <h6>{department.id}</h6>
          </td>
          <td className="py-3 px-4">
            <p>{department.departmentName}</p>
          </td>
          <td className="py-3 px-4">
            <p>{department.description}</p>
          </td>

          <td className="p-3">
            <Link
              href={`departamentos/${department.id}`}
              className="hover:text-primary transition ease-out"
            >
              <PencilIcon width={20} height={20} />
            </Link>
          </td>
          <td className="p-3">
            <DeleteDialog handleDelete={() => handleDelete(department)} />
          </td>
        </tr>
      ))}
    </Table>
  );
};

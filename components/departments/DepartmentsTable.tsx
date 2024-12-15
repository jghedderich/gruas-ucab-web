'use client';
import { Department, IPagination } from '@/types';
import React from 'react';
import Table from '../ui/Table';
import { PencilIcon } from '../icons/PencilIcon';
import Link from 'next/link';
import { Trash2 } from 'lucide-react';
import { useTable } from '@/hooks/use-table';

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
  const { handleDelete } = useTable(
    departments.data,
    '/admin-service/departments'
  );

  return (
    <Table
      columns={columns}
      count={departments.count}
      pageSize={departments.pageSize}
      pageIndex={departments.pageIndex}
    >
      {departments.data.map((department) => (
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
            <button
              className="hover:text-red-500 transition ease-out"
              onClick={() => handleDelete(department)}
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </td>
        </tr>
      ))}
    </Table>
  );
};

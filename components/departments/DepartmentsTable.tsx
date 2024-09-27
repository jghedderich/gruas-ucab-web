'use client';
import { Department } from '@/types';
import React from 'react';
import Table from '../ui/Table';
import Toggle from '../ui/Toggle';
import { PencilIcon } from '../icons/PencilIcon';
import Link from 'next/link';
import { useDepartmentsTable } from '@/hooks/departments/useDepartmentsTable';

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

const pageInfo = {
  page: 1,
  perPage: 10,
  itemCount: 100,
  pageCount: 10,
  hasPreviousPage: true,
  hasNextPage: true,
};

interface DepartmentsTableProps {
  departments: Department[];
}
export const DepartmentsTable = ({ departments }: DepartmentsTableProps) => {
  const { handleToggle, activeDepartments } = useDepartmentsTable();

  return (
    <Table columns={columns} pageInfo={pageInfo}>
      {departments.map((department) => (
        <tr key={department.id} className="border-y">
          <td className="py-4 px-5">
            <h6>{department.id}</h6>
          </td>
          <td className="py-4 px-5">
            <p>{department.name}</p>
          </td>
          <td className="py-4 px-5">
            <p>{department.description}</p>
          </td>

          <td className="py-4 px-6">
            <Toggle
              handleClick={() => handleToggle(department)}
              isToggleOn={activeDepartments.has(department.id)}
            />
          </td>
          <td className="px-6">
            <Link
              href={`departments/${department.id}`}
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

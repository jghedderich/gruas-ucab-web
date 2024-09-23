'use client';
import React from 'react';
import Table from '../ui/Table';
import Link from 'next/link';
import { PencilIcon } from '../icons/PencilIcon';
import Toggle from '../ui/Toggle';
import { useUsersTable } from '@/hooks/useUsersTable';
import { Badge } from '../ui/badge';
import { User } from '@/types';

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
    title: 'Correo',
    field: 'correo',
  },
  {
    title: 'Rol',
    field: 'rol',
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

interface UsersTableProps {
  users: User[];
}

export const UsersTable = ({ users }: UsersTableProps) => {
  const { handleToggle, activeUsers } = useUsersTable();

  return (
    <Table columns={columns} pageInfo={pageInfo}>
      {users.map((user) => (
        <tr key={user.id} className="border-y">
          <td className="py-4 px-5">
            <h6>{user.id}</h6>
          </td>
          <td className="py-4 px-5">
            <p>
              {user.lastName}, {user.firstName}
            </p>
          </td>
          <td className="py-4 px-5">
            <p>{user.email}</p>
          </td>

          <td className="py-4 px-5">
            <Badge variant={'secondary'} className="rounded-full">
              {user.role}
            </Badge>
          </td>

          <td className="py-4 px-6">
            <Toggle
              handleClick={() => handleToggle(user)}
              isToggleOn={activeUsers.has(user.id)}
            />
          </td>
          <td className="px-6">
            <Link
              href={`users/${user.id}`}
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

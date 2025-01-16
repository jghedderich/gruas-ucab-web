'use client';
import React from 'react';
import Table from '../ui/Table';
import Link from 'next/link';
import { IPagination, Order } from '@/types';
import { ExternalLink, Trash2 } from 'lucide-react';
import { useTable } from '@/hooks/use-table';
import { StatusBadge } from './StatusBadge';

const columns = [
  {
    title: 'Cliente',
    field: 'client',
  },
  {
    title: 'Vehículo',
    field: 'vehicle',
  },
  {
    title: 'Ubicación',
    field: 'location',
  },
  {
    title: 'Destino',
    field: 'destination',
  },
  {
    title: 'Status',
    field: 'status',
  },
];

interface OrdersTableProps {
  orders: IPagination<Order>;
}

export const OrdersTable = ({ orders }: OrdersTableProps) => {
  const { handleDelete, activeItems } = useTable<Order>(
    orders.data,
    '/orders-service/orders'
  );

  return (
    <Table
      columns={columns}
      count={activeItems.length}
      pageSize={orders.pageSize}
      pageIndex={orders.pageIndex}
    >
      {activeItems.map((order) => (
        <tr key={order.id} className="border-y">
          <td className="py-3 px-4">
            <p>
              {order.client.name.lastName}, {order.client.name.firstName}
            </p>
          </td>
          <td className="py-3 px-4">
            <p>
              {order.client.clientVehicle.brand}{' '}
              {order.client.clientVehicle.model}
            </p>
          </td>
          <td className="py-3 px-4">
            <p className="line-clamp-1 text-ellipsis max-w-48">
              {order.incidentAddress.city}, {order.incidentAddress.addressLine1}
            </p>
          </td>
          <td className="py-3 px-4">
            <p className="line-clamp-1 text-ellipsis max-w-48">
              {order.destinationAddress.city},{' '}
              {order.destinationAddress.addressLine1}
            </p>
          </td>

          <td className="py-3 px-4">
            <StatusBadge status={order.orderStatus} />
          </td>
          <td className="p-3">
            <Link
              href={`ordenes-de-servicio/${order.id}`}
              className="hover:text-primary transition ease-out"
            >
              <ExternalLink />
            </Link>
          </td>
          <td className="p-3">
            <button
              className="hover:text-red-500 transition ease-out flex items-center"
              onClick={() => handleDelete(order)}
            >
              <Trash2 />
            </button>
          </td>
        </tr>
      ))}
    </Table>
  );
};

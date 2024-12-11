import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Status } from '@/types';

interface StatusBadgeProps {
  status: Status;
}

function getStatusInfo(status: Status): { text: string; color: string } {
  switch (status) {
    case Status.ToBeAssigned:
      return { text: 'Por Asignar', color: 'bg-gray-500' };
    case Status.ToBeAccepted:
      return { text: 'Por Aceptar', color: 'bg-yellow-500' };
    case Status.Accepted:
      return { text: 'Aceptado', color: 'bg-blue-500' };
    case Status.InProcess:
      return { text: 'En Proceso', color: 'bg-orange-500' };
    case Status.Completed:
      return { text: 'Completado', color: 'bg-green-500' };
    case Status.Canceled:
      return { text: 'Cancelado', color: 'bg-red-500' };
    default:
      return { text: 'Desconocido', color: 'bg-gray-300' };
  }
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const { text, color } = getStatusInfo(status);

  return (
    <Badge
      className={`${color} rounded-full py-1 text-white hover:bg-${color}`}
    >
      {text}
    </Badge>
  );
}

// Export the Status enum for use in other components
export { Status };

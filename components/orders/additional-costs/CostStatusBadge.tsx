import React from 'react';
import { Badge } from '@/components/ui/badge';
import { StatusC } from '@/types';

interface StatusBadgeProps {
  status: StatusC;
}

function getStatusInfo(status: StatusC): { text: string; color: string } {
  switch (status) {
    case StatusC.Pending:
      return { text: 'En Proceso', color: 'bg-orange-500' };
    case StatusC.Approved:
      return { text: 'Aprobado', color: 'bg-green-500' };
    case StatusC.Rejected:
      return { text: 'Rechazado', color: 'bg-red-500' };
    default:
      return { text: 'Desconocido', color: 'bg-gray-300' };
  }
}

export function CostStatusBadge({ status }: StatusBadgeProps) {
  const { text, color } = getStatusInfo(status);

  return (
    <Badge
      className={`${color} rounded-full py-1 text-white hover:bg-${color}`}
    >
      {text}
    </Badge>
  );
}

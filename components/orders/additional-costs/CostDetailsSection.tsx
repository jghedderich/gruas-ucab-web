'use client';
import React from 'react';
import { CostDetail } from '@/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../ui/card';
import { AdditionalCostItem } from './AdditionalCostItem';

interface CostDetailSectionProps {
  costDetails: CostDetail[];
}

export const CostDetailSection = ({ costDetails }: CostDetailSectionProps) => {
  costDetails.sort((a, b) => {
    if (a.statusC === 'Pending' && b.statusC !== 'Pending') {
      return -1;
    } else if (a.statusC !== 'Pending' && b.statusC === 'Pending') {
      return 1;
    }
    return 0;
  });
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between gap-3 text-lg">
          Costos adicionales
          <span className="text-sm text-gray-500">
            {costDetails.length} solicitudes
          </span>
        </CardTitle>
        <CardDescription>
          Los costos adicionales solicitados por el conductor.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {costDetails.length > 0 ? (
          costDetails?.map((cost) => (
            <AdditionalCostItem
              key={cost.id}
              status={cost.statusC}
              amount={cost.amount}
              description={cost.description}
              id={cost.id}
            />
          ))
        ) : (
          <p>No se han solicitado costos adicionales</p>
        )}
      </CardContent>
    </Card>
  );
};

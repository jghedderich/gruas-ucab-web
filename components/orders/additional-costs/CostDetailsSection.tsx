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
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between gap-3">
          <h3 className=" mb-2">COSTOS ADICIONALES</h3>
          <p className="text-sm text-gray-500">{costDetails.length} pedidos</p>
        </CardTitle>
        <CardDescription>
          Los costos adicionales solicitados por el conductor.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {costDetails.length > 0 ? (
          costDetails?.map((cost) => (
            <AdditionalCostItem
              key={cost.id}
              status="pending"
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

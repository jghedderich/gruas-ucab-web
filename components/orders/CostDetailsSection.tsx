'use client';
import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../ui/card';
import { CostDetail } from '@/types';

interface CostDetailSectionProps {
  costDetails: CostDetail[];
}

export const CostDetailSection = ({ costDetails }: CostDetailSectionProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between gap-3">
          <CardTitle>Costos adicionales</CardTitle>
        </div>
        <CardDescription>
          Los pedidos de costos adicionales solicitados por el conductor.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {costDetails.length > 0 ? (
          costDetails?.map((cost) => (
            <div key={cost.id}>
              {cost.amount} - {cost.description}
            </div>
          ))
        ) : (
          <p>No se han solicitado costos adicionales</p>
        )}
      </CardContent>
    </Card>
  );
};

import { CostDetail, Policy } from '@/types';
import React from 'react';

interface SummaryDetailsProps {
  policy: Policy;
  distance: string;
  duration: string;
  additionalCosts?: CostDetail[];
}

export const SummaryDetails = ({
  policy,
  distance,
  duration,
  additionalCosts,
}: SummaryDetailsProps) => {
  return (
    <section className="mt-6 grid gap-2 ">
      <h4 className="text-lg">Información de ruta</h4>
      <div className="flex justify-between">
        <p className="text-gray-500">Distancia</p>
        <p className="text-right">{distance}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-500">Duración</p>
        <p className="text-right">{duration}</p>
      </div>
      <h4 className="text-lg">Información de póliza</h4>
      <div className="flex justify-between">
        <p className="text-gray-500">Nombre</p>
        <p className="text-right">{policy.name}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-500">Tarifa Base</p>
        <p className="text-right">${policy.fees.baseFee}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-500">Costo por Km (${policy.fees.perKm})</p>
        <p className="text-right">
          ${policy.fees.perKm * parseFloat(distance)}
        </p>
      </div>
      {additionalCosts && additionalCosts.length > 0 && (
        <div className="flex justify-between">
          <p className="text-gray-500">Costos adicionales</p>
          <p className="text-right">
            ${additionalCosts.reduce((acc, cost) => acc + cost.amount, 0)}
          </p>
        </div>
      )}
      <div className="flex justify-between">
        <p className="text-gray-500">Cobertura</p>
        <p className="text-right text-red-500">-${policy.amountCovered}</p>
      </div>
      <hr className="my-3" />
      <div className="flex text-lg justify-between">
        <p className="font-semibold">Total</p>
        <p className="text-right">
          {policy.fees.baseFee +
            policy.fees.perKm * parseFloat(distance) -
            policy.amountCovered}
          $
        </p>
      </div>
    </section>
  );
};

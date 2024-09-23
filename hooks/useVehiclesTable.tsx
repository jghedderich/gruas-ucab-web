import React from 'react';
import { Vehicle } from '@/types';

export const useVehiclesTable = () => {
  const [activeVehicles, setActiveVehicles] = React.useState(new Set());
  const handleToggle = (vehicle: Vehicle) => {
    if (activeVehicles.has(vehicle.id)) {
      setActiveVehicles(new Set(activeVehicles.delete(vehicle.id)));
    } else {
      setActiveVehicles(new Set(activeVehicles.add(vehicle.id)));
    }
  };

  return {
    activeVehicles,
    handleToggle,
  };
};

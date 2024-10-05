import React from 'react';
import { Vehicle } from '@/types';

export const useVehiclesTable = () => {
  const [activeVehicles, setActiveVehicles] = React.useState(new Set());

  const handleToggle = (vehicle: Vehicle) => {
    if (activeVehicles.has(vehicle.id)) {
      activeVehicles.delete(vehicle.id);
    } else {
      activeVehicles.add(vehicle.id);
    }
    setActiveVehicles(new Set(activeVehicles));
  };

  return {
    activeVehicles,
    handleToggle,
  };
};

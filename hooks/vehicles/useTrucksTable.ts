import React from 'react';
import { Truck } from '@/types';

export const useTrucksTable = () => {
  const [activeTrucks, setActiveTrucks] = React.useState(new Set());

  const handleToggle = (vehicle: Truck) => {
    if (activeTrucks.has(vehicle.id)) {
      activeTrucks.delete(vehicle.id);
    } else {
      activeTrucks.add(vehicle.id);
    }
    setActiveTrucks(new Set(activeTrucks));
  };

  return {
    activeTrucks,
    handleToggle,
  };
};

import React from 'react';
import { Department } from '@/types';

export const useDepartmentsTable = () => {
  const [activeDepartments, setActiveDepartments] = React.useState(new Set());

  const handleToggle = (provider: Department) => {
    if (activeDepartments.has(provider.id)) {
      activeDepartments.delete(provider.id);
    } else {
      activeDepartments.add(provider.id);
    }
    setActiveDepartments(new Set(activeDepartments));
  };

  return {
    activeDepartments,
    handleToggle,
  };
};

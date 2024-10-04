import React from 'react';
import { Fee } from '@/types';

export const useFeesTable = () => {
  const [activeFees, setActiveFees] = React.useState(new Set());

  const handleToggle = (fee: Fee) => {
    if (activeFees.has(fee.id)) {
      activeFees.delete(fee.id);
    } else {
      activeFees.add(fee.id);
    }
    setActiveFees(new Set(activeFees));
  };

  return {
    activeFees,
    handleToggle,
  };
};

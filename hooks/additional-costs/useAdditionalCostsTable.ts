import React from 'react';
import { AdditionalCost } from '@/types';

export const useAdditionalCostsTable = () => {
  const [activeAdditionalCosts, setActiveAdditionalCosts] = React.useState(
    new Set()
  );

  const handleToggle = (provider: AdditionalCost) => {
    if (activeAdditionalCosts.has(provider.id)) {
      activeAdditionalCosts.delete(provider.id);
    } else {
      activeAdditionalCosts.add(provider.id);
    }
    setActiveAdditionalCosts(new Set(activeAdditionalCosts));
  };

  return {
    activeAdditionalCosts,
    handleToggle,
  };
};

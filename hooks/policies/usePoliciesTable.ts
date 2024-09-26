import React from 'react';
import { Policy } from '@/types';

export const usePoliciesTable = () => {
  const [activePolicies, setActivePolicies] = React.useState(new Set());

  const handleToggle = (policy: Policy) => {
    if (activePolicies.has(policy.id)) {
      activePolicies.delete(policy.id);
    } else {
      activePolicies.add(policy.id);
    }
    setActivePolicies(new Set(activePolicies));
  };

  return {
    activePolicies,
    handleToggle,
  };
};

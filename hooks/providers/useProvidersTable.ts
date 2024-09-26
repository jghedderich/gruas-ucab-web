import React from 'react';
import { Provider } from '@/types';

export const useProvidersTable = () => {
  const [activeProviders, setActiveProviders] = React.useState(new Set());

  const handleToggle = (provider: Provider) => {
    if (activeProviders.has(provider.id)) {
      activeProviders.delete(provider.id);
    } else {
      activeProviders.add(provider.id);
    }
    setActiveProviders(new Set(activeProviders));
  };

  return {
    activeProviders,
    handleToggle,
  };
};

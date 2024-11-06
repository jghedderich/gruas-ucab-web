import { Provider } from '@/types';
import { useMutation } from '../useMutation';

export const useProvidersTable = (providers: Provider[]) => {
  const activeProviders = providers.filter((provider) => provider.isActive);
  const { mutate } = useMutation();
  const handleDelete = async (provider: Provider) => {
    await mutate({
      route: `/providers-service/providers/${provider.id}`,
      method: 'DELETE',
    });
  };

  return {
    activeProviders,
    handleDelete,
  };
};

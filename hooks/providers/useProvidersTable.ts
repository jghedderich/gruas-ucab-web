import { Provider } from '@/types';
import { useToast } from '../use-toast';
import { fetchData } from '@/lib/fetchData';

export const useProvidersTable = (providers: Provider[]) => {
  const activeProviders = providers.filter((provider) => provider.isActive);

  const { toast } = useToast();
  const handleDelete = async (provider: Provider) => {
    try {
      await fetchData(`/providers-service/providers/${provider.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.log(error);
      toast({
        title: 'Error al eliminar proveedor',
        description: 'No se ha eliminado el proveedor correctamente.',
        variant: 'destructive',
      });
    }
    toast({
      title: 'Proveedor eliminado',
      description: 'Se ha eliminado el proveedor correctamente.',
    });
  };

  return {
    activeProviders,
    handleDelete,
  };
};

import { Driver } from '@/types';
import { useToast } from '../use-toast';
import { fetchData } from '@/lib/fetchData';
import { useRouter } from 'next/navigation';

export const useDriversTable = (drivers: Driver[]) => {
  const activeDrivers = drivers.filter((driver) => driver.isActive);
  const { toast } = useToast();
  const { refresh } = useRouter();
  const handleDelete = async (driver: Driver) => {
    try {
      await fetchData(`/providers-service/drivers/${driver.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      refresh();
    } catch (error) {
      console.log(error);
      toast({
        title: 'Error al eliminar conductor',
        description: 'No se ha eliminado el conductor correctamente.',
        variant: 'destructive',
      });
    }
    toast({
      title: 'Conductor eliminado',
      description: 'Se ha eliminado el conductor correctamente.',
    });
  };

  return {
    activeDrivers,
    handleDelete,
  };
};

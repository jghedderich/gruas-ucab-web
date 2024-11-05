import { Vehicle } from '@/types';
import { useToast } from '../use-toast';
import { fetchData } from '@/lib/fetchData';
import { useRouter } from 'next/navigation';

export const useVehiclesTable = (vehicles: Vehicle[]) => {
  const activeVehicles = vehicles.filter((vehicle) => vehicle.isActive);
  const { toast } = useToast();
  const router = useRouter();
  const handleDelete = async (vehicle: Vehicle) => {
    try {
      await fetchData(`/providers-service/vehicles/${vehicle.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      toast({
        title: 'Vehículo eliminado',
        description: 'Se ha eliminado el vehículo correctamente.',
      });
      router.refresh();
    } catch (error) {
      console.log(error);
      toast({
        title: 'Error al eliminar vehículo',
        description: 'No se ha eliminado el vehículo correctamente.',
        variant: 'destructive',
      });
    }
  };

  return {
    activeVehicles,
    handleDelete,
  };
};

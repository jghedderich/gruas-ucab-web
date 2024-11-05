import { Vehicle } from '@/types';
import { useToast } from '../use-toast';
import { fetchData } from '@/lib/fetchData';

export const useVehiclesTable = (vehicles: Vehicle[]) => {
  const activeVehicles = vehicles.filter((vehicle) => vehicle.isActive);
  const { toast } = useToast();
  const handleDelete = async (vehicle: Vehicle) => {
    try {
      await fetchData(`/providers-service/vehicles/${vehicle.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.log(error);
      toast({
        title: 'Error al eliminar vehículo',
        description: 'No se ha eliminado el vehículo correctamente.',
        variant: 'destructive',
      });
    }
    toast({
      title: 'Vehículo eliminado',
      description: 'Se ha eliminado el vehículo correctamente.',
    });
  };

  return {
    activeVehicles,
    handleDelete,
  };
};

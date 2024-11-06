import { Vehicle } from '@/types';
import { useMutation } from '../useMutation';

export const useVehiclesTable = (vehicles: Vehicle[]) => {
  const activeVehicles = vehicles.filter((vehicle) => vehicle.isActive);
  const { mutate } = useMutation();
  const handleDelete = async (vehicle: Vehicle) => {
    await mutate({
      route: `/providers-service/vehicles/${vehicle.id}`,
      method: 'DELETE',
    });
  };

  return {
    activeVehicles,
    handleDelete,
  };
};

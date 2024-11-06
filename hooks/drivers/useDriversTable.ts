import { Driver } from '@/types';
import { useMutation } from '../useMutation';

export const useDriversTable = (drivers: Driver[]) => {
  const activeDrivers = drivers.filter((driver) => driver.isActive);
  const { mutate } = useMutation();
  const handleDelete = async (driver: Driver) => {
    await mutate({
      route: `/providers-service/drivers/${driver.id}`,
      method: 'DELETE',
    });
  };

  return {
    activeDrivers,
    handleDelete,
  };
};

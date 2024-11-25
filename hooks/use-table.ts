import { IEntity } from '@/types';
import { useMutation } from './useMutation';

export const useTable = <T extends IEntity>(data: T[], route: string) => {
  const activeItems = data.filter((item) => item.isActive);
  const { mutate } = useMutation();
  const handleDelete = async (item: T) => {
    await mutate({
      route: route + `/${item.id}`,
      method: 'DELETE',
    });
  };

  return {
    activeItems,
    handleDelete,
  };
};

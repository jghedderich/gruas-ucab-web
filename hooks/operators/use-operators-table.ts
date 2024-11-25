import { Operator } from '@/types';
import { useMutation } from '../useMutation';

export const useOperatorsTable = (operators: Operator[]) => {
  const activeOperators = operators.filter((operator) => operator.isActive);
  const { mutate } = useMutation();
  const handleDelete = async (operator: Operator) => {
    await mutate({
      route: `/orders-service/operators/${operator.id}`,
      method: 'DELETE',
    });
  };

  return {
    activeOperators,
    handleDelete,
  };
};

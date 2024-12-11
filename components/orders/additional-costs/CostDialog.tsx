import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import React from 'react';

interface CostDialogProps {
  description: string;
  amount: number;
  type: 'approve' | 'reject';
  onConfirm: () => void;
}

export const CostDialog = ({
  description,
  amount,
  type,
  onConfirm,
}: CostDialogProps) => {
  return (
    <DialogContent className="max-w-sm bg-white">
      <DialogHeader>
        <DialogTitle>
          ¿{type === 'approve' ? 'Aceptar' : 'Rechazar'} costo adicional?
        </DialogTitle>
        <DialogDescription>Esta acción no se puede deshacer.</DialogDescription>
      </DialogHeader>
      <section className="flex gap-2 py-3 justify-center">
        <h6>{description}</h6>
        <Badge variant={'secondary'}>${amount}</Badge>
      </section>
      <DialogFooter className="flex items-center justify-center gap-2">
        <Button
          onClick={onConfirm}
          variant={type === 'approve' ? 'default' : 'destructive'}
          className="w-full"
        >
          {type === 'approve' ? 'Aprobar' : 'Rechazar'}
        </Button>
        <DialogClose asChild>
          <Button type="button" variant="outline" className="w-full">
            Cancelar
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
};

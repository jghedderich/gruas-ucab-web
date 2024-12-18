import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog';
import { Button } from './button';
import { Trash2 } from 'lucide-react';

export const DeleteDialog = ({
  handleDelete,
}: {
  handleDelete: () => void;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="hover:text-red-500 transition ease-out">
          <Trash2 className="w-5 h-5" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-xs bg-white">
        <DialogHeader>
          <DialogTitle>¿Desea borrar este registro?</DialogTitle>
          <DialogDescription>
            Esta acción no se puede deshacer.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-10">
          <Button variant={'destructive'} onClick={handleDelete}>
            Borrar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

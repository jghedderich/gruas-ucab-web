import React from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog';
import { Button } from './button';
import Toggle from './Toggle';

export const DeleteDialog = ({
  handleDelete,
  isToggleOn,
}: {
  isToggleOn: boolean;
  handleDelete: () => void;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>
          <Toggle isToggleOn={isToggleOn} />
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-sm bg-white">
        <DialogHeader>
          <DialogTitle className="">
            ¿Desea {isToggleOn ? 'desactivar' : 'activar'} este registro?
          </DialogTitle>
          <DialogDescription>
            Esta acción no se puede deshacer.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-10">
          <DialogClose>
            <Button
              variant={isToggleOn ? 'destructive' : 'default'}
              onClick={handleDelete}
            >
              {isToggleOn ? 'Desactivar' : 'Activar'}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

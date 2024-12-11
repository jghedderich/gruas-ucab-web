import React from 'react';
import { Badge } from '../../ui/badge';
import { Button } from '../../ui/button';
import { Check, X } from 'lucide-react';
import { Dialog, DialogTrigger } from '../../ui/dialog';
import { CostDialog } from './CostDialog';

interface AdditionalCostItemProps {
  id: string;
  description: string;
  amount: number;
  status: string;
}

export const AdditionalCostItem = ({
  id,
  description,
  amount,
  status,
}: AdditionalCostItemProps) => {
  const handleApprove = () => {
    console.log('approve', id);
  };

  const handleReject = () => {
    console.log('reject', id);
  };

  return (
    <article className="flex items-center gap-6 justify-between">
      <div className="flex flex-wrap items-center gap-2">
        <h6>{description}</h6>
        <Badge variant={'secondary'}>${amount}</Badge>
      </div>
      <div className="flex items-center gap-2">
        {status === 'pending' ? (
          <>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Check className="w-5 h-5" />
                </Button>
              </DialogTrigger>
              <CostDialog
                amount={amount}
                description={description}
                type="approve"
                onConfirm={handleApprove}
              />
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <X className="w-5 h-5" />
                </Button>
              </DialogTrigger>
              <CostDialog
                amount={amount}
                description={description}
                type="reject"
                onConfirm={handleReject}
              />
            </Dialog>
          </>
        ) : (
          <Badge variant="destructive" className="rounded-full">
            Rechazado
          </Badge>
        )}
      </div>
    </article>
  );
};

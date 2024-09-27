'use client';
import { X, Check } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '../ui/card';
import {
  DialogHeader,
  DialogFooter,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '../ui/dialog';
import { toast } from '@/hooks/use-toast';
import { ExtraPaymentRequest } from '@/types';
import { Badge } from '../ui/badge';

interface ExtraPaymentRequestDetailProps {
  extraPaymentRequest: ExtraPaymentRequest;
}

export const ExtraPaymentRequestDetail = ({
  extraPaymentRequest,
}: ExtraPaymentRequestDetailProps) => {
  const [isExtraPaymentDialogOpen, setIsExtraPaymentDialogOpen] =
    useState(false);

  const handleExtraPaymentApproval = (approved: boolean) => {
    // Here you would typically send this decision to your backend
    const action = approved ? 'approved' : 'declined';
    console.log(`Extra payment request ${action}`);
    setIsExtraPaymentDialogOpen(false);
    toast({
      title: 'Extra Payment Request',
      description: `The extra payment request has been ${action}.`,
    });
    // In a real application, you would update the order state here
  };
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between gap-3">
          <CardTitle>Extra Payment Request</CardTitle>
          <Badge>{extraPaymentRequest.status}</Badge>
        </div>
        <CardDescription>
          Review and manage extra payment requests from the driver
        </CardDescription>
      </CardHeader>
      <CardContent>
        {extraPaymentRequest ? (
          <div className="space-y-2">
            <p>
              <span className="font-semibold">Amount:</span> $
              {extraPaymentRequest.amount}
            </p>
            <p>
              <span className="font-semibold">Reason:</span>{' '}
              {extraPaymentRequest.reason}
            </p>
          </div>
        ) : (
          <p>No extra payment requests for this </p>
        )}
      </CardContent>
      {extraPaymentRequest && extraPaymentRequest.status === 'Pending' && (
        <CardFooter className="flex justify-end space-x-2">
          <Dialog
            open={isExtraPaymentDialogOpen}
            onOpenChange={setIsExtraPaymentDialogOpen}
          >
            <DialogTrigger asChild>
              <Button variant="outline">Review Request</Button>
            </DialogTrigger>
            <DialogContent className="bg-white">
              <DialogHeader>
                <DialogTitle>Review Extra Payment Request</DialogTitle>
                <DialogDescription>
                  Please review the extra payment request from the driver.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <p>
                  <span className="font-semibold">Amount:</span> $
                  {extraPaymentRequest.amount}
                </p>
                <p>
                  <span className="font-semibold">Reason:</span>{' '}
                  {extraPaymentRequest.reason}
                </p>
              </div>
              <DialogFooter className="flex justify-end space-x-2">
                <Button
                  onClick={() => handleExtraPaymentApproval(false)}
                  variant="destructive"
                >
                  <X className="mr-2 h-4 w-4" /> Decline
                </Button>
                <Button onClick={() => handleExtraPaymentApproval(true)}>
                  <Check className="mr-2 h-4 w-4" /> Approve
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardFooter>
      )}
    </Card>
  );
};

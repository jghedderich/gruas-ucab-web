'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Driver, Order, Policy, Vehicle } from '@/types';
import { ClientDetail } from './ClientDetail';
import { CostDetailSection } from './additional-costs/CostDetailsSection';
import { DriverAndVehicleDetail } from './DriverAndVehicleDetail';
import { SummarySection } from './form/SummarySection';

interface OrderDetailProps {
  order: Order;
  driver: Driver;
  driverVehicle: Vehicle;
  policy: Policy;
}

export default function OrderDetail({
  order,
  driver,
  driverVehicle,
  policy,
}: OrderDetailProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardContent>
          <SummarySection
            origin={{
              lat: parseFloat(order.incidentAddress.coordinates.latitude),
              lng: parseFloat(order.incidentAddress.coordinates.longitude),
            }}
            destination={{
              lat: parseFloat(order.destinationAddress.coordinates.latitude),
              lng: parseFloat(order.destinationAddress.coordinates.longitude),
            }}
            policy={policy}
          />
        </CardContent>
      </Card>
      <div className="flex flex-col gap-4">
        <Card className="h-fit">
          <CardHeader>
            <CardTitle className="text-lg">Cliente y conductor</CardTitle>
            <CardDescription>
              Toda la información del cliente y el conductor.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ClientDetail client={order.client} />
            <DriverAndVehicleDetail driver={driver} vehicle={driverVehicle} />
          </CardContent>
        </Card>

        <CostDetailSection costDetails={order.costDetails} />
      </div>
    </div>
  );
}

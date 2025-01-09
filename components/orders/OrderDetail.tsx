'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { DriverWithVehicle, Order, Policy } from '@/types';
import { ClientDetail } from './ClientDetail';
import { CostDetailSection } from './additional-costs/CostDetailsSection';
import { DriverSection } from './DriverSection';
import { SummarySection } from './form/SummarySection';

interface OrderDetailProps {
  order: Order;
  drivers: DriverWithVehicle[];
  policy: Policy;
}

export default function OrderDetail({
  order,
  drivers,
  policy,
}: OrderDetailProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Resumen de la orden</CardTitle>
          <CardDescription>
            Todos los datos generales de la orden.
          </CardDescription>
        </CardHeader>
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
            additionalCosts={order.costDetails}
          />
        </CardContent>
      </Card>
      <div className="flex flex-col gap-4">
        <Card className="h-fit">
          <CardHeader>
            <CardTitle className="text-lg">Cliente</CardTitle>
            <CardDescription>
              Toda la información del cliente y su vehículo.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ClientDetail client={order.client} />
          </CardContent>
        </Card>
        <DriverSection
          driverId={order.driverId}
          drivers={drivers}
          orderStatus={order.orderStatus}
        />
        <CostDetailSection costDetails={order.costDetails} />
      </div>
    </div>
  );
}

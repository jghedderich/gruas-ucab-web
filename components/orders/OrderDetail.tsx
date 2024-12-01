'use client';

import { MapPin } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Order } from '@/types';
import { ClientDetail } from './ClientDetail';
import { DriverAndTowVehicleDetail } from './DriverAndVehicleDetail';
import { ExtraPaymentRequestDetail } from './ExtraPaymentRequestDetail';

// Note: You would need to implement or import an actual map component
const MapComponent = ({ location, destination }) => (
  <div className="h-64 bg-gray-200 flex items-center justify-center">
    <p className="text-gray-500">Map showing route from</p>
  </div>
);

interface OrderDetailProps {
  order: Order;
}

export default function OrderDetail({ order }: OrderDetailProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between gap-3 items-center">
            <CardTitle>Información de la orden</CardTitle>
            <Badge variant={'secondary'}>{order.orderStatus}</Badge>
          </div>
          <CardDescription>Detalles sobre la orden de servicio</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div>
            <span className="font-semibold">Ubicación:</span>
            <p className="flex items-baseline">
              <MapPin className="mr-2" size={16} />{' '}
              {order.incidentAddress.addressLine1}{' '}
              {order.incidentAddress.addressLine2}, {order.incidentAddress.zip},{' '}
              {order.incidentAddress.city}, {order.incidentAddress.state}
            </p>
          </div>
          <div>
            <span className="font-semibold">Destino:</span>
            <p className="flex items-baseline">
              <MapPin className="mr-2" size={16} />{' '}
              {order.destinationAddress.addressLine1}{' '}
              {order.destinationAddress.addressLine2},{' '}
              {order.destinationAddress.zip},{' '}
            </p>
          </div>
          <div>
            <span className="font-semibold">Descripción:</span>
            <p>{order.description}</p>
          </div>
          <div>
            <span className="font-semibold">Distancia total:</span>
            <p>{order.totalDistance}Km</p>
          </div>
          {order.costDetails.length > 0 && (
            <div>
              <span className="font-semibold">Tarifas extra:</span>
              {order.costDetails.map((detail, index) => (
                <p key={index}>
                  {detail.amount}, {detail.reason}
                </p>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Route Map</CardTitle>
        </CardHeader>
        <CardContent>
          <MapComponent
            location={order.incidentAddress}
            destination={order.destinationAddress}
          />
        </CardContent>
      </Card>
      <ClientDetail client={order.client} />
      {/* <DriverAndTowVehicleDetail
        driver={order.driver}
        vehicle={order.vehicle}
      /> */}
      {/* <ExtraPaymentRequestDetail
        extraPaymentRequest={order.extraPaymentRequest}
      /> */}
    </div>
  );
}

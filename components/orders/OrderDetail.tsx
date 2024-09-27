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
import { DriverAndTowTruckDetail } from './DriverAndTruckDetail';
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between gap-3 items-center">
            <CardTitle>Información de la orden</CardTitle>
            <Badge>{order.status}</Badge>
          </div>
          <CardDescription>Detalles sobre la orden de servicio</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div>
            <span className="font-semibold">Ubicación:</span>
            <p className="flex items-baseline">
              <MapPin className="mr-2" size={16} /> {order.location.street}{' '}
              {order.location.urbanization}, {order.location.municipality},{' '}
              {order.location.zipCode}, {order.location.city},{' '}
              {order.location.state}
            </p>
          </div>
          <div>
            <span className="font-semibold">Destino:</span>
            <p className="flex items-baseline">
              <MapPin className="mr-2" size={16} /> {order.destination.street}{' '}
              {order.destination.urbanization}, {order.destination.municipality}
              , {order.destination.zipCode}, {order.destination.city},{' '}
              {order.destination.state}
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
          <div>
            <span className="font-semibold">Tarifas extra:</span>
            <p>
              ${order.extraCosts.amount}, {order.extraCosts.reason}
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Route Map</CardTitle>
        </CardHeader>
        <CardContent>
          <MapComponent
            location={order.location}
            destination={order.destination}
          />
        </CardContent>
      </Card>
      <ClientDetail client={order.client} />
      <DriverAndTowTruckDetail
        driver={order.driver}
        towTruck={order.towTruck}
      />
      <ExtraPaymentRequestDetail
        extraPaymentRequest={order.extraPaymentRequest}
      />
    </div>
  );
}

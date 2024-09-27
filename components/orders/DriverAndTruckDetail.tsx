import { Driver, TowTruck } from '@/types';
import { User, Phone, Mail, IdCard, Truck } from 'lucide-react';
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
interface DriverAndTowTruckDetailProps {
  driver: Driver;
  towTruck: TowTruck;
}

export const DriverAndTowTruckDetail = ({
  driver,
  towTruck,
}: DriverAndTowTruckDetailProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Conductor e Información de la Grúa</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="text-sm text-gray-500 mb-2">CONDUCTOR</h3>
          <p className="flex items-center">
            <User className="mr-2" size={16} /> {driver.name}
          </p>
          <p className="flex items-center">
            <Phone className="mr-2" size={16} /> {driver.phone}
          </p>
          <p className="flex items-center">
            <Mail className="mr-2" size={16} /> {driver.email}
          </p>
          <p className="flex items-center">
            <IdCard className="mr-2" size={16} /> {driver.dni}
          </p>
        </div>
        <hr />
        <div>
          <h3 className="text-gray-500 text-sm mb-2">GRÚA</h3>
          <p className="flex items-center">
            <Truck className="mr-2" size={16} /> {towTruck.brand}{' '}
            {towTruck.model} ({towTruck.year})
          </p>
          <p>Matricula: {towTruck.licensePlate}</p>
        </div>
      </CardContent>
    </Card>
  );
};

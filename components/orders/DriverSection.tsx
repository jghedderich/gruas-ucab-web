import { DriverWithVehicle } from '@/types';
import { User, Phone, Mail, IdCard, Building } from 'lucide-react';
import React from 'react';
import { VehicleIcon } from '../icons/TruckIcon';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { ReAssignDriverDialog } from './ReAssignDriverDialog';

interface DriverSectionProps {
  drivers: DriverWithVehicle[];
  driverId: string;
  orderStatus: string;
}

export const DriverSection = ({
  drivers,
  driverId,
  orderStatus,
}: DriverSectionProps) => {
  const driverData = drivers.filter(
    (driver) => driver.driver.id === driverId
  )[0];
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Conductor</CardTitle>
        <CardDescription>
          Toda la información del conductor relevante para el servicio.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="flex items-center">
          <User className="mr-2" size={16} /> {driverData.driver.name.firstName}{' '}
          {driverData.driver.name.lastName}
        </p>
        <p className="flex items-center">
          <Phone className="mr-2" size={16} /> {driverData.driver.phone}
        </p>
        <p className="flex items-center">
          <Mail className="mr-2" size={16} /> {driverData.driver.email}
        </p>
        <p className="flex items-center">
          <IdCard className="mr-2" size={16} /> {driverData.driver.dni.type}-
          {driverData.driver.dni.number}
        </p>
        <h4 className="mt-3 text-sm text-gray-500">PROVEEDOR</h4>
        <p className="flex items-center">
          <Building className="mr-2" size={16} />{' '}
          {driverData.provider.company.name} -{' '}
          {driverData.provider.company.state},{' '}
          {driverData.provider.company.city}
        </p>
        <p className="flex items-center">
          <User className="mr-2" size={16} />{' '}
          {driverData.provider.name.firstName}{' '}
          {driverData.provider.name.lastName}
        </p>
        <h4 className="mt-3 text-sm text-gray-500">GRÚA</h4>
        <p className="flex items-center">
          <VehicleIcon className="mr-2 w-5" /> {driverData.vehicle.brand}{' '}
          {driverData.vehicle.model} ({driverData.vehicle.year})
        </p>
      </CardContent>
      <CardFooter className=" flex justify-end">
        <ReAssignDriverDialog orderStatus={orderStatus} drivers={drivers} />
      </CardFooter>
    </Card>
  );
};

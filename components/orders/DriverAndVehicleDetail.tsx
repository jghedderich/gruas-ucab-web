import { Driver, Vehicle } from '@/types';
import { User, Phone, Mail, IdCard } from 'lucide-react';
import React from 'react';
import { VehicleIcon } from '../icons/TruckIcon';

interface DriverAndVehicleDetailProps {
  driver: Driver;
  vehicle: Vehicle;
}

export const DriverAndVehicleDetail = ({
  driver,
  vehicle,
}: DriverAndVehicleDetailProps) => {
  return (
    <section className="space-y-4">
      <div>
        <h3 className="text-gray-500 mb-2">CONDUCTOR</h3>
        <p className="flex items-center">
          <User className="mr-2" size={16} /> {driver.name.firstName}{' '}
          {driver.name.lastName}
        </p>
        <p className="flex items-center">
          <Phone className="mr-2" size={16} /> {driver.phone}
        </p>
        <p className="flex items-center">
          <Mail className="mr-2" size={16} /> {driver.email}
        </p>
        <p className="flex items-center">
          <IdCard className="mr-2" size={16} /> {driver.dni.type}-
          {driver.dni.number}
        </p>
      </div>
      <div>
        <h3 className="text-gray-500 mb-2">VEHÍCULO</h3>
        <p className="flex items-center">
          <VehicleIcon className="mr-2 size-6" /> {vehicle.brand}{' '}
          {vehicle.model} ({vehicle.year})
        </p>
      </div>
    </section>
  );
};

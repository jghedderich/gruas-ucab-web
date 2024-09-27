import { Client } from '@/types';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { User, Phone, Mail, IdCard, CarIcon } from 'lucide-react';

interface ClientDetailProps {
  client: Client;
}

export const ClientDetail = ({ client }: ClientDetailProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Información del Cliente</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="flex items-center">
          <User className="mr-2" size={16} /> {client.name}
        </p>
        <p className="flex items-center">
          <Phone className="mr-2" size={16} /> {client.phone}
        </p>
        <p className="flex items-center">
          <Mail className="mr-2" size={16} /> {client.email}
        </p>
        <p className="flex items-center">
          <IdCard className="mr-2" size={16} /> {client.dni}
        </p>
        <div>
          <h3 className="font-semibold mb-2">Vehículo</h3>
          <p className="flex items-center">
            <CarIcon className="mr-2" size={16} /> {client.vehicle.brand}{' '}
            {client.vehicle.model} ({client.vehicle.year}) -{' '}
            {client.vehicle.color}
          </p>
          <p>Matricula: {client.vehicle.licensePlate}</p>
          <p>Tipo: {client.vehicle.type}</p>
        </div>
      </CardContent>
    </Card>
  );
};

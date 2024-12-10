import { Client } from '@/types';
import React from 'react';
import { User, Phone, Mail, IdCard, CarIcon } from 'lucide-react';

interface ClientDetailProps {
  client: Client;
}

export const ClientDetail = ({ client }: ClientDetailProps) => {
  return (
    <section>
      <h3 className="text-gray-500 mb-2">CLIENTE</h3>
      <p className="flex items-center">
        <User className="mr-2" size={16} /> {client.name.firstName}{' '}
        {client.name.lastName}
      </p>
      <p className="flex items-center">
        <Phone className="mr-2" size={16} /> {client.phone}
      </p>
      <p className="flex items-center">
        <Mail className="mr-2" size={16} /> {client.email}
      </p>
      <p className="flex items-center">
        <IdCard className="mr-2" size={16} /> {client.dni.type}-
        {client.dni.number}
      </p>
      <p className="flex items-center">
        <CarIcon className="mr-2" size={16} /> {client.clientVehicle.brand}{' '}
        {client.clientVehicle.model} ({client.clientVehicle.year}) -{' '}
        {client.clientVehicle.type}
      </p>
    </section>
  );
};

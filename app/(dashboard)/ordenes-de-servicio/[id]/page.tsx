import OrderDetail from '@/components/orders/OrderDetail';
import Section from '@/components/ui/Section';
import { Order } from '@/types';
import { Metadata } from 'next';

const orderData: Order = {
  id: 'ORD-12345',
  status: 'In Progress',
  location: {
    street: 'El Tártago',
    urbanization: 'La Castellana',
    municipality: 'Chacao',
    zipCode: '1060',
    city: 'Caracas',
    state: 'Miranda',
    latitude: 0,
    longitude: 0,
  },
  destination: {
    street: 'El Tártago',
    urbanization: 'La Castellana',
    municipality: 'Chacao',
    zipCode: '1060',
    city: 'Caracas',
    state: 'Miranda',
    latitude: 0,
    longitude: 0,
  },
  totalDistance: 100,
  description: 'Vehicle broken down on highway shoulder',
  extraCosts: {
    amount: 25,
    reason: 'Night service fee',
  },
  client: {
    name: 'John',
    lastName: 'Doe',
    phone: '+1 (555) 123-4567',
    email: 'john.doe@example.com',
    dni: 'V123456789',
    vehicle: {
      model: 'Camry',
      brand: 'Toyota',
      type: 'motorcycle',
      year: 2018,
      licensePlate: 'AC-1234',
      color: 'Black',
    },
  },
  driver: {
    name: 'Mike',
    lastName: 'Smith',
    dni: 'V6911402',
    phone: '+1 (555) 987-6543',
    email: 'mike.smith@towservice.com',
    provider: 'Gruas Meru',
  },
  towTruck: {
    model: 'F-450',
    brand: 'Ford',
    year: 2020,
    licensePlate: 'TOW-1234',
    color: 'Silver',
  },

  extraPaymentRequest: {
    amount: 50,
    reason: 'Additional winching required due to difficult terrain',
    status: 'Pending',
  },
};

export const metadata: Metadata = {
  title: `Orden ${orderData.id} | Grúas UCAB`,
  description: 'Detalle de una Orden de Servicio gestionada por Grúas Ucab',
};

export default function OrdenesDeServicioPage() {
  return (
    <Section
      title="Ordenes de servicio"
      subtitle={`Orden ${orderData.id}`}
      description="Detalle de una Orden de Servicio gestionada por Grúas Ucab."
    >
      <OrderDetail order={orderData} />
    </Section>
  );
}

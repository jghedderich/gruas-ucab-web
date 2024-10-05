import Section from '@/components/ui/Section';
import { PlusIcon } from '@/components/icons/PlusIcon';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Vehicle } from '@/types';
import { VehiclesTable } from '@/components/vehicles/VehiclesTable';

export const metadata = {
  title: 'Vehículos | Grúas UCAB',
  description: 'Lista de vehículos gestionados por Grúas Ucab',
};

const vehiclesData: Vehicle[] = [
  {
    id: 1,
    brand: 'Ford',
    model: 'F-350',
    year: 2020,
    owner: 'John Doe',
    licensePlate: 'ABC1234',
    color: 'Red',
    type: 'heavyTruck',
  },
  {
    id: 2,
    brand: 'Chevrolet',
    model: 'Silverado 2500',
    year: 2019,
    owner: 'Jane Smith',
    licensePlate: 'XYZ5678',
    color: 'Blue',
    type: 'lightTruck',
  },
  {
    id: 3,
    brand: 'Ram',
    model: '1500',
    year: 2021,
    owner: 'Mike Johnson',
    licensePlate: 'LMN9012',
    color: 'Black',
    type: 'lightTruck',
  },
  {
    id: 4,
    brand: 'Harley-Davidson',
    model: 'Street 750',
    year: 2022,
    owner: 'Emily Davis',
    licensePlate: 'MOTO4567',
    color: 'Silver',
    type: 'motorcycle',
  },
];

export default function VehiclesPage() {
  return (
    <Section
      title="Vehículos"
      subtitle="Todos las vehículos"
      description="La lista de vehículos de Grúas Ucab."
      trailing={
        <Link href="vehiculos/crear">
          <Button className="min-w-max flex gap-2">
            <PlusIcon className="w-5 h-5" />
            <span className="hidden md:flex shrink-0">Crear vehículo</span>
          </Button>
        </Link>
      }
    >
      <VehiclesTable vehicles={vehiclesData} />
    </Section>
  );
}

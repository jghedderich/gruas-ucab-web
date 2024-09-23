import Section from '@/components/ui/Section';
import { PlusIcon } from '@/components/icons/PlusIcon';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Vehicle } from '@/types';
import { VehiclesTable } from '@/components/vehicles/VehiclesTable';

export const metadata = {
  title: 'Grúas Ucab | Vehículos',
  description: 'Lista de vehículos gestionados por Grúas Ucab',
};

const vehiclesData: Vehicle[] = [
  {
    id: 1,
    brand: 'Toyota',
    model: 'Camry',
    year: 2020,
    owner: 'Alice Johnson',
  },
  {
    id: 2,
    brand: 'Honda',
    model: 'Civic',
    year: 2019,
    owner: 'Bob Smith',
  },
  {
    id: 3,
    brand: 'Ford',
    model: 'Mustang',
    year: 2021,
    owner: 'Charlie Brown',
  },
  {
    id: 4,
    brand: 'Chevrolet',
    model: 'Malibu',
    year: 2018,
    owner: 'Diana Prince',
  },
  {
    id: 5,
    brand: 'Tesla',
    model: 'Model S',
    year: 2022,
    owner: 'Ethan Hunt',
  },
  {
    id: 6,
    brand: 'Toyota',
    model: 'Camry',
    year: 2020,
    owner: 'Alice Johnson',
  },
  {
    id: 7,
    brand: 'Honda',
    model: 'Civic',
    year: 2019,
    owner: 'Bob Smith',
  },
];

export default function VehiculosPage() {
  return (
    <Section
      title="Vehículos"
      subtitle="Todos los vehículos"
      description="La lista de vehículos de Grúas Ucab."
      trailing={
        <Link href="vehiculos/crear">
          <Button className="min-w-max flex gap-2">
            <PlusIcon className="w-5 h-5" />
            <span className="hidden md:flex shrink-0">Crear Vehículo</span>
          </Button>
        </Link>
      }
    >
      <VehiclesTable vehicles={vehiclesData} />
    </Section>
  );
}

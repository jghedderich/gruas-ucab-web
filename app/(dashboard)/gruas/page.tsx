import Section from '@/components/ui/Section';
import { PlusIcon } from '@/components/icons/PlusIcon';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Truck } from '@/types';
import { TrucksTable } from '@/components/trucks/TrucksTable';

export const metadata = {
  title: 'Grúas | Grúas UCAB',
  description: 'Lista de grúas gestionados por Grúas Ucab',
};

const trucksData: Truck[] = [
  {
    id: 1,
    brand: 'Toyota',
    model: 'Camry',
    year: 2020,
    owner: 'Alice Johnson',
    licensePlate: '',
    color: 'black',
  },
  {
    id: 2,
    brand: 'Honda',
    model: 'Civic',
    year: 2019,
    owner: 'Bob Smith',
    licensePlate: '',
    color: 'black',
  },
  {
    id: 3,
    brand: 'Ford',
    model: 'Mustang',
    year: 2021,
    owner: 'Charlie Brown',
    licensePlate: '',
    color: 'black',
  },
  {
    id: 4,
    brand: 'Chevrolet',
    model: 'Malibu',
    year: 2018,
    owner: 'Diana Prince',
    licensePlate: '',
    color: 'black',
  },
  {
    id: 5,
    brand: 'Tesla',
    model: 'Model S',
    year: 2022,
    owner: 'Ethan Hunt',
    licensePlate: '',
    color: 'black',
  },
  {
    id: 6,
    brand: 'Toyota',
    model: 'Camry',
    year: 2020,
    owner: 'Alice Johnson',
    licensePlate: '',
    color: 'black',
  },
  {
    id: 7,
    brand: 'Honda',
    model: 'Civic',
    year: 2019,
    owner: 'Bob Smith',
    licensePlate: '',
    color: 'black',
  },
];

export default function TrucksPage() {
  return (
    <Section
      title="Grúas"
      subtitle="Todas las grúas"
      description="La lista de grúas de Grúas Ucab."
      trailing={
        <Link href="gruas/crear">
          <Button className="min-w-max flex gap-2">
            <PlusIcon className="w-5 h-5" />
            <span className="hidden md:flex shrink-0">Crear grúa</span>
          </Button>
        </Link>
      }
    >
      <TrucksTable trucks={trucksData} />
    </Section>
  );
}

import { FeesTable } from '@/components/fees/FeesTable';
import { Button } from '@/components/ui/button';
import Section from '@/components/ui/Section';
import { PlusIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const feesData = [
  {
    id: 1,
    name: 'Pesada',
    base: 30,
    perKm: 2,
    isActive: false,
  },
  {
    id: 2,
    name: 'Mediana',
    base: 20,
    perKm: 1,
    isActive: false,
  },
  {
    id: 3,
    name: 'Ligera',
    base: 10,
    perKm: 0.5,
    isActive: false,
  },
];

export const metadata = {
  title: 'Tarifas | Grúas UCAB',
  description: 'Lista de tarifas gestionados por Grúas Ucab',
};

export default function FeesPage() {
  return (
    <Section
      title="Tarifas"
      subtitle="Todas las tarifas"
      description="Lista de tarifas gestionadas por Grúas Ucab"
      trailing={
        <Link href="tarifas/crear">
          <Button className="min-w-max flex gap-2">
            <PlusIcon className="w-5 h-5" />
            <span className="hidden md:flex shrink-0">Crear tarifa</span>
          </Button>
        </Link>
      }
    >
      <FeesTable fees={feesData} />
    </Section>
  );
}

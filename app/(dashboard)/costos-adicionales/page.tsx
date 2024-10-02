import Section from '@/components/ui/Section';
import { PlusIcon } from '@/components/icons/PlusIcon';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AdditionalCost } from '@/types';
import { AdditionalCostsTable } from '@/components/additional-costs/AdditionalCostsTable';

const additionalCostsData: AdditionalCost[] = [
  {
    id: 1,
    name: 'Peaje',
    description: 'Descripción del costo adicional 1',
  },
  {
    id: 2,
    name: 'Estacionamiento difícil',
    description: 'Descripción del costo adicional 2',
  },
  {
    id: 3,
    name: 'Zonas Rojas',
    description: 'Descripción del costo adicional 3',
  },
  {
    id: 4,
    name: 'Vehículo volteado',
    description: 'Descripción del costo adicional 4',
  },
  {
    id: 5,
    name: 'Terreno difícil',
    description: 'Descripción del costo adicional 5',
  },
];

export const metadata = {
  title: 'Costos adicionales | Grúas UCAB',
  description:
    'Lista de costos adicionales para las ordenes gestionadas por Grúas Ucab',
};

export default function AdditionalCostsPage() {
  return (
    <Section
      title="Costos adicionales"
      subtitle="Todos los costos adicionales"
      description="La lista de costos adicionales de Grúas Ucab."
      trailing={
        <Link href="costos-adicionales/crear">
          <Button className="min-w-max flex gap-2">
            <PlusIcon className="w-5 h-5" />
            <span className="hidden md:flex shrink-0">
              Crear costo adicional
            </span>
          </Button>
        </Link>
      }
    >
      <AdditionalCostsTable additionalCosts={additionalCostsData} />
    </Section>
  );
}

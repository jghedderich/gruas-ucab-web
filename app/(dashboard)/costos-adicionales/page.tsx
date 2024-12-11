import Section from '@/components/ui/Section';
import { PlusIcon } from '@/components/icons/PlusIcon';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AdditionalCostsTable } from '@/components/additional-costs/AdditionalCostsTable';
import { fetchData } from '@/lib/fetchData';

export const metadata = {
  title: 'Costos adicionales | Grúas UCAB',
  description:
    'Lista de costos adicionales para las ordenes gestionadas por Grúas Ucab',
};

export default async function AdditionalCostsPage() {
  const { costDetails } = await fetchData('/orders-service/costdetails', {
    cache: 'no-store',
  });
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
      <AdditionalCostsTable additionalCosts={costDetails} />
    </Section>
  );
}

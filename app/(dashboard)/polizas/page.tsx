import { PoliciesTable } from '@/components/policies/PoliciesTable';
import { Button } from '@/components/ui/button';
import Section from '@/components/ui/Section';
import { fetchData } from '@/lib/fetchData';
import { Policy } from '@/types';
import { PlusIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const policiesData: Policy[] = [
  {
    id: 1,
    name: 'Bronce',
    price: 20,
    amountCovered: 100,
    isActive: true,
  },
  {
    id: 2,
    name: 'Gold',
    price: 30,
    amountCovered: 200,
    isActive: true,
  },
  {
    id: 3,
    name: 'Platinum',
    price: 40,
    amountCovered: 300,
    isActive: true,
  },
];

export const metadata = {
  title: 'Grúas Ucab | Tarifas',
  description: 'Lista de tarifas gestionados por Grúas Ucab',
};

export default async function PoliciesPage() {
  const response = await fetchData('/orders-service/policies', {
    cache: 'no-store',
  });

  return (
    <Section
      title="Pólizas"
      subtitle="Todas las pólizas"
      description="Lista de pólizas gestionadas por Grúas Ucab"
      trailing={
        <Link href="polizas/crear">
          <Button className="min-w-max flex gap-2">
            <PlusIcon className="w-5 h-5" />
            <span className="hidden md:flex shrink-0">Crear póliza</span>
          </Button>
        </Link>
      }
    >
      <PoliciesTable policies={policiesData} />
    </Section>
  );
}

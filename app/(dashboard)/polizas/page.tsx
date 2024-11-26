import { PoliciesTable } from '@/components/policies/PoliciesTable';
import { Button } from '@/components/ui/button';
import Section from '@/components/ui/Section';
import { fetchData } from '@/lib/fetchData';
import { PlusIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export const metadata = {
  title: 'Grúas Ucab | Pólizas',
  description: 'Lista de pólizas gestionados por Grúas Ucab',
};

export default async function PoliciesPage() {
  const { policies } = await fetchData('/orders-service/policies', {
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
      <PoliciesTable policies={policies} />
    </Section>
  );
}

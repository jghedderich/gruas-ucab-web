import { PoliciesTable } from '@/components/policies/PoliciesTable';
import Section from '@/components/ui/Section';
import { ValidatedLink } from '@/components/ui/ValidatedLink';
import { fetchData } from '@/lib/fetchData';

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
      trailing={<ValidatedLink text="Crear póliza" href="polizas/crear" />}
    >
      <PoliciesTable policies={policies} />
    </Section>
  );
}

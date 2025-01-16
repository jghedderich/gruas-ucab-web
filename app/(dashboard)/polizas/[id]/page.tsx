import { PoliciesForm } from '@/components/policies/PoliciesForm';
import Section from '@/components/ui/Section';
import { fetchData } from '@/lib/fetchData';
import { cookies } from 'next/headers';

export const metadata = {
  title: 'Editar póliza | Grúas UCAB',
  description: 'Edita una póliza.',
};

export default async function EditPoliciesPage({
  params,
}: {
  params: { id: string };
}) {
  const token = cookies().get('token')?.value;
  const { policy } = await fetchData('/orders-service/policies/' + params.id, {
    cache: 'no-store',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return (
    <Section
      title="Pólizas"
      subtitle="Editar una póliza."
      description="Ingresa los datos de la póliza que deseas editar."
    >
      <PoliciesForm policy={policy} />
    </Section>
  );
}

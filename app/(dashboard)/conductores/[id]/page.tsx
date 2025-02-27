import DriverForm from '@/components/drivers/DriverForm';
import Section from '@/components/ui/Section';
import { fetchData } from '@/lib/fetchData';
import { cookies } from 'next/headers';

export const metadata = {
  title: 'Editar conductor | Grúas UCAB',
  description: 'Edita los datos de la conductor seleccionado.',
};

export default async function EditDriversPage({
  params,
}: {
  params: { id: string };
}) {
  const token = cookies().get('token')?.value;
  const { driver } = await fetchData(
    `/providers-service/drivers/${params.id}`,
    {
      cache: 'no-store',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const { providers } = await fetchData('/providers-service/providers', {
    cache: 'no-store',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return (
    <Section
      title="Conductores"
      subtitle="Editar un conductor."
      description="Edita los datos de la conductor seleccionado."
    >
      <DriverForm driver={driver} providers={providers} />
    </Section>
  );
}

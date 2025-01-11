import DriverForm from '@/components/drivers/DriverForm';
import Section from '@/components/ui/Section';
import { fetchData } from '@/lib/fetchData';
import { cookies } from 'next/headers';

export const metadata = {
  title: 'Crear conductor | Grúas UCAB',
  description: 'Crea un conductor.',
};

export default async function CreateDriverPage() {
  const token = cookies().get('token')?.value;
  const { providers } = await fetchData('/providers-service/providers', {
    cache: 'no-store',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return (
    <Section
      title="Conductor"
      subtitle="Crear un conductor."
      description="Ingresa los datos del conductor que deseas crear."
    >
      <DriverForm providers={providers} />
    </Section>
  );
}

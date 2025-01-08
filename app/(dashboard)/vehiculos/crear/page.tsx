import Section from '@/components/ui/Section';
import VehicleForm from '@/components/vehicles/VehicleForm';
import { fetchData } from '@/lib/fetchData';
import { cookies } from 'next/headers';

export const metadata = {
  title: 'Crear vehículo | Grúas UCAB',
  description: 'Crea un vehículo.',
};

export default async function CreateVehiclesPage() {
  const token = cookies().get('token')?.value;
  const { providers } = await fetchData('/providers-service/providers', {
    cache: 'no-store',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return (
    <Section
      title="Vehículos"
      subtitle="Crear un vehículo."
      description="Ingresa los datos del vehículo que deseas crear."
    >
      <VehicleForm providers={providers} />
    </Section>
  );
}

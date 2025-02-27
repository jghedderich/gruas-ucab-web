import Section from '@/components/ui/Section';
import VehicleForm from '@/components/vehicles/VehicleForm';
import { fetchData } from '@/lib/fetchData';
import { cookies } from 'next/headers';

export const metadata = {
  title: 'Editar vehículo | Grúas UCAB',
  description: 'Edita los datos de la vehículo seleccionado.',
};

export default async function EditVehiclesPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const token = cookies().get('token')?.value;
  const { vehicle } = await fetchData(`/providers-service/vehicles/${id}`, {
    cache: 'no-store',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const { providers } = await fetchData('/providers-service/providers', {
    cache: 'no-store',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return (
    <Section
      title="Vehículos"
      subtitle="Editar un vehículo."
      description="Edita los datos de la vehículo seleccionado."
    >
      <VehicleForm vehicle={vehicle} providers={providers} />
    </Section>
  );
}

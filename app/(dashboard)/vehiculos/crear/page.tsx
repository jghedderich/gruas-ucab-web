import Section from '@/components/ui/Section';
import VehicleForm from '@/components/vehicles/VehicleForm';
import { fetchData } from '@/lib/fetchData';

export const metadata = {
  title: 'Crear vehículo | Grúas UCAB',
  description: 'Crea un vehículo.',
};

export default async function CreateVehiclesPage() {
  const { providers } = await fetchData('/providers-service/providers', {
    cache: 'no-store',
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

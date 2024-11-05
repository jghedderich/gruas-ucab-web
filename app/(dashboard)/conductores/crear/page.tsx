import DriverForm from '@/components/drivers/DriverForm';
import Section from '@/components/ui/Section';
import { fetchData } from '@/lib/fetchData';

export const metadata = {
  title: 'Crear conductor | Grúas UCAB',
  description: 'Crea un conductor.',
};

export default async function CreateDriverPage() {
  const vehiclesResponse = await fetchData('/providers-service/vehicles');
  const providersResponse = await fetchData('/providers-service/providers');
  return (
    <Section
      title="Conductor"
      subtitle="Crear un conductor."
      description="Ingresa los datos del conductor que deseas crear."
    >
      <DriverForm
        vehicles={vehiclesResponse.vehicles}
        providers={providersResponse.providers}
      />
    </Section>
  );
}

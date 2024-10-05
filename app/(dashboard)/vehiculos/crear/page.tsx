import Section from '@/components/ui/Section';
import VehicleForm from '@/components/vehicles/VehicleForm';

export const metadata = {
  title: 'Crear vehículo | Grúas UCAB',
  description: 'Crea un vehículo.',
};

export default function CreateVehiclesPage() {
  return (
    <Section
      title="Vehículos"
      subtitle="Crear un vehículo."
      description="Ingresa los datos del vehículo que deseas crear."
    >
      <VehicleForm />
    </Section>
  );
}

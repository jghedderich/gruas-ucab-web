import Section from '@/components/ui/Section';
import VehicleForm from '@/components/vehicles/VehiclesForm';

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

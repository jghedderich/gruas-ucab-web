import Section from '@/components/ui/Section';
import VehicleForm from '@/components/vehicles/VehiclesForm';

const existingVehicle = {
  id: 1,
  model: 'Model 3',
  brand: 'Tesla',
  year: 2022,
  owner: 'john',
};

export const metadata = {
  title: 'Editar vehículo | Grúas UCAB',
  description: 'Edita los datos del vehículo seleccionado.',
};

export default function EditVehiclesPage() {
  return (
    <Section
      title="Vehículos"
      subtitle="Editar un vehículo."
      description="Edita los datos del vehículo seleccionado."
    >
      <VehicleForm vehicle={existingVehicle} />
    </Section>
  );
}

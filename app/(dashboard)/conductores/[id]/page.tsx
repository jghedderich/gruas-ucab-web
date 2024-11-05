import Section from '@/components/ui/Section';
import VehicleForm from '@/components/vehicles/VehicleForm';
import { Vehicle } from '@/types';

const existingVehicle: Vehicle = {
  id: 1,
  model: 'Model 3',
  brand: 'Tesla',
  year: 2022,
  owner: 'john',
  type: 'motorcycle',
  licensePlate: 'AC-1234',
  color: 'blue',
};

export const metadata = {
  title: 'Editar vehículo | Grúas UCAB',
  description: 'Edita los datos de la vehículo seleccionado.',
};

export default function EditVehiclesPage() {
  return (
    <Section
      title="Grúas"
      subtitle="Editar un vehículo."
      description="Edita los datos de la vehículo seleccionado."
    >
      <VehicleForm vehicle={existingVehicle} />
    </Section>
  );
}

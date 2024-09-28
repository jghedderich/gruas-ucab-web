import Section from '@/components/ui/Section';
import { Truck } from '@/types';
import TruckForm from '@/components/trucks/TrucksForm';

const existingTruck: Truck = {
  id: 1,
  model: 'Model 3',
  brand: 'Tesla',
  year: 2022,
  owner: 'john',
  licensePlate: '',
  color: 'blue',
};

export const metadata = {
  title: 'Editar grúa | Grúas UCAB',
  description: 'Edita los datos de la grúa seleccionada.',
};

export default function EditTrucksPage() {
  return (
    <Section
      title="Grúas"
      subtitle="Editar una grúa."
      description="Edita los datos de la grúa seleccionada."
    >
      <TruckForm truck={existingTruck} />
    </Section>
  );
}

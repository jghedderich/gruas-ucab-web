import Section from '@/components/ui/Section';
import { AdditionalCost } from '@/types';
import { AdditionalCostForm } from '@/components/additional-costs/AdditionalCostForm';

const existingCost: AdditionalCost = {
  id: 1,
  name: 'Peaje',
  description: 'Descripción del costo adicional 1',
};

export const metadata = {
  title: 'Editar vehículo | Grúas UCAB',
  description: 'Edita los datos de la vehículo seleccionada.',
};

export default function EditVehiclesPage() {
  return (
    <Section
      title="Grúas"
      subtitle="Editar una vehículo."
      description="Edita los datos de la vehículo seleccionada."
    >
      <AdditionalCostForm additionalCost={existingCost} />
    </Section>
  );
}

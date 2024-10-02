import Section from '@/components/ui/Section';
import { AdditionalCost } from '@/types';
import { AdditionalCostForm } from '@/components/additional-costs/AdditionalCostForm';

const existingCost: AdditionalCost = {
  id: 1,
  name: 'Peaje',
  description: 'Descripción del costo adicional 1',
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
      <AdditionalCostForm additionalCost={existingCost} />
    </Section>
  );
}

import Section from '@/components/ui/Section';
import { AdditionalCostForm } from '@/components/additional-costs/AdditionalCostForm';

export const metadata = {
  title: 'Crear costo adicional | Grúas UCAB',
  description: 'Crea un costo adicional.',
};

export default function CreateAdditionalCostsPage() {
  return (
    <Section
      title="Costos adicionales"
      subtitle="Crear un costo adicional"
      description="Ingresa los datos del costo adicional que deseas crear."
    >
      <AdditionalCostForm />
    </Section>
  );
}

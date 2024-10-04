import { FeesForm } from '@/components/fees/FeeForm';
import Section from '@/components/ui/Section';

export const metadata = {
  title: 'Crear tarifa | Grúas UCAB',
  description: 'Crea una tarifa.',
};

export default function CreateFeesPage() {
  return (
    <Section
      title="Tarifas"
      subtitle="Crear una tarifa"
      description="Ingresa los datos de la tarifa que deseas crear."
    >
      <FeesForm />
    </Section>
  );
}

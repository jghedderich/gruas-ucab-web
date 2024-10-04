import { FeesForm } from '@/components/fees/FeeForm';
import Section from '@/components/ui/Section';
import { Fee } from '@/types';

const testFee: Fee = {
  id: 1,
  name: 'Pesada',
  base: 30,
  perKm: 2,
  isActive: false,
};

export const metadata = {
  title: 'Editar póliza | Grúas UCAB',
  description: 'Edita una póliza.',
};

export default function EditPoliciesPage() {
  return (
    <Section
      title="Tarifas"
      subtitle="Editar una tarifa."
      description="Ingresa los datos de la tarifa que deseas editar."
    >
      <FeesForm fee={testFee} />
    </Section>
  );
}

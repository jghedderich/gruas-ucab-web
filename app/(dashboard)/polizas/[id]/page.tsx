import { PoliciesForm } from '@/components/policies/PoliciesForm';
import Section from '@/components/ui/Section';
import { Policy } from '@/types';

const testPolicy: Policy = {
  id: 1,
  name: 'Bronce Prueba',
  price: 20,
  isActive: true,
  amountCovered: 0,
};

export const metadata = {
  title: 'Editar póliza | Grúas UCAB',
  description: 'Edita una póliza.',
};

export default function EditPoliciesPage() {
  return (
    <Section
      title="Pólizas"
      subtitle="Editar una póliza."
      description="Ingresa los datos de la póliza que deseas editar."
    >
      <PoliciesForm policy={testPolicy} />
    </Section>
  );
}

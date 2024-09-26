import { PoliciesForm } from '@/components/policies/PoliciesForm';
import Section from '@/components/ui/Section';

export const metadata = {
  title: 'Crear póliza | Grúas UCAB',
  description: 'Crea una póliza.',
};

export default function CreatePoliciesPage() {
  return (
    <Section
      title="Pólizas"
      subtitle="Crear una póliza."
      description="Ingresa los datos de la póliza que deseas crear."
    >
      <PoliciesForm />
    </Section>
  );
}

import OperatorForm from '@/components/operators/OperatorForm';
import Section from '@/components/ui/Section';

export const metadata = {
  title: 'Crear operador | Grúas UCAB',
  description: 'Crea un operador.',
};

export default async function CreateOperatorPage() {
  return (
    <Section
      title="Operadores"
      subtitle="Crear un operador."
      description="Ingresa los datos del operador que deseas crear."
    >
      <OperatorForm />
    </Section>
  );
}

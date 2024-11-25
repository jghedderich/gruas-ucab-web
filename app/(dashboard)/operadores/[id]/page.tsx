import OperatorForm from '@/components/operators/OperatorForm';
import Section from '@/components/ui/Section';
import { fetchData } from '@/lib/fetchData';

export const metadata = {
  title: 'Editar operador | Grúas UCAB',
  description: 'Edita los datos de la operador seleccionado.',
};

export default async function EditOperatorPage({
  params,
}: {
  params: { id: string };
}) {
  const { operator } = await fetchData(
    `/orders-service/operators/${params.id}`,
    {
      cache: 'no-store',
    }
  );

  return (
    <Section
      title="Operadores"
      subtitle="Editar un operador"
      description="Edita los datos de la operador seleccionado."
    >
      <OperatorForm operator={operator} />
    </Section>
  );
}

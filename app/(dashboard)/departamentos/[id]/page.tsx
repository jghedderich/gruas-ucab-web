import { DepartmentsForm } from '@/components/departments/DepartmentsForm';
import Section from '@/components/ui/Section';
import { fetchData } from '@/lib/fetchData';

export const metadata = {
  title: 'Editar departamento | Grúas UCAB',
  description: 'Edita un departamento.',
};

export default async function EditDepartmentsPage({
  params,
}: {
  params: { id: string };
}) {
  const { department } = await fetchData(
    '/admin-service/departments/' + params.id,
    {
      cache: 'no-store',
    }
  );

  return (
    <Section
      title="Departamentos"
      subtitle="Editar un departamento."
      description="Ingresa los datos del departamento que deseas editar."
    >
      <DepartmentsForm department={department} />
    </Section>
  );
}

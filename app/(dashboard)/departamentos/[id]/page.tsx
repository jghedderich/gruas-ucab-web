import { DepartmentsForm } from '@/components/departments/DepartmentsForm';
import Section from '@/components/ui/Section';
import { Department } from '@/types';

const testDepartment: Department = {
  id: 1,
  name: 'Bronce Prueba',
  description: 'Descripción de prueba',
  employees: 10,
};

export const metadata = {
  title: 'Editar departamento | Grúas UCAB',
  description: 'Edita un departamento.',
};

export default function EditDepartmentsPage() {
  return (
    <Section
      title="Departamentos"
      subtitle="Editar un departamento."
      description="Ingresa los datos del departamento que deseas editar."
    >
      <DepartmentsForm department={testDepartment} />
    </Section>
  );
}

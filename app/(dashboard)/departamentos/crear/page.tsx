import { DepartmentsForm } from '@/components/departments/DepartmentsForm';
import Section from '@/components/ui/Section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Departamentos | Grúas UCAB',
  description: 'Crear un departamento de Grúas UCAB.',
};

export default function CrearDepartamentosPage() {
  return (
    <Section
      title="Departamentos"
      subtitle="Crear un departamento."
      description="Ingresa los datos del departamento que deseas crear."
    >
      <DepartmentsForm />
    </Section>
  );
}

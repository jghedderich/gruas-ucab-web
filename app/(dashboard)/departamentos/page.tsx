import { DepartmentsTable } from '@/components/departments/DepartmentsTable';
import { Button } from '@/components/ui/button';
import Section from '@/components/ui/Section';
import { Department } from '@/types';
import { PlusIcon } from '@radix-ui/react-icons';
import { Metadata } from 'next';
import Link from 'next/link';

const departmentsData: Department[] = [
  {
    id: 1,
    name: 'Mercadeo',
    description: 'Departamento de Mercadeo',
    employees: 10,
  },
  {
    id: 2,
    name: 'Recursos Humanos',
    description: 'Departamento de Recursos Humanos',
    employees: 10,
  },
  {
    id: 3,
    name: 'Centro de Salud',
    description: 'Departamento de Centro de Salud',
    employees: 10,
  },
];

export const metadata: Metadata = {
  title: 'Departamentos | Grúas Ucab',
  description: 'Lista de departamentos gestionados por Grúas Ucab',
};

export default function PoliciesPage() {
  return (
    <Section
      title="Departamentos"
      subtitle="Todas los departamentos"
      description="Lista de departamentos gestionados por Grúas Ucab"
      trailing={
        <Link href="departamentos/crear">
          <Button className="min-w-max flex gap-2">
            <PlusIcon className="w-5 h-5" />
            <span className="hidden md:flex shrink-0">Crear departamento</span>
          </Button>
        </Link>
      }
    >
      <DepartmentsTable departments={departmentsData} />
    </Section>
  );
}

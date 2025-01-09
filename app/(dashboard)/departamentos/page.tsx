import { DepartmentsTable } from '@/components/departments/DepartmentsTable';
import { Button } from '@/components/ui/button';
import Section from '@/components/ui/Section';
import { fetchData } from '@/lib/fetchData';
import { PlusIcon } from '@radix-ui/react-icons';
import { Metadata } from 'next';
import { cookies } from 'next/headers';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Departamentos | Grúas Ucab',
  description: 'Lista de departamentos gestionados por Grúas Ucab',
};

export default async function DepartmentsPage() {
  const token = cookies().get('token')?.value;
  const { departments } = await fetchData('/admin-service/departments', {
    cache: 'no-store',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
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
      <DepartmentsTable departments={departments} />
    </Section>
  );
}

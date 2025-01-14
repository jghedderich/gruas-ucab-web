import Section from '@/components/ui/Section';
import { PlusIcon } from '@/components/icons/PlusIcon';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { fetchData } from '@/lib/fetchData';
import { DriversTable } from '@/components/drivers/DriversTable';
import { cookies } from 'next/headers';

export const metadata = {
  title: 'Conductores | Grúas UCAB',
  description: 'Lista de conductores gestionados por Grúas Ucab',
};

export default async function DriversPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const token = cookies().get('token')?.value;
  const page = searchParams.page ? parseInt(searchParams.page) : 0;
  const response = await fetchData(
    '/providers-service/drivers?pageIndex=' + page,
    {
      cache: 'no-store',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return (
    <Section
      title="Conductores"
      subtitle="Lista de conductores"
      description="Revisa y gestiona los conductores registrados en Grúas UCAB"
      trailing={
        <Link href="conductores/crear">
          <Button className="min-w-max flex gap-2">
            <PlusIcon className="w-5 h-5" />
            <span className="hidden md:flex shrink-0">Crear conductor</span>
          </Button>
        </Link>
      }
    >
      <DriversTable drivers={response.drivers} />
    </Section>
  );
}

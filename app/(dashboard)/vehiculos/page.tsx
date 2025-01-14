import Section from '@/components/ui/Section';
import { PlusIcon } from '@/components/icons/PlusIcon';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { VehiclesTable } from '@/components/vehicles/VehiclesTable';
import { fetchData } from '@/lib/fetchData';
import { cookies } from 'next/headers';

export const metadata = {
  title: 'Vehículos | Grúas UCAB',
  description: 'Lista de vehículos gestionados por Grúas Ucab',
};

export default async function VehiclesPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const token = cookies().get('token')?.value;
  const page = searchParams.page ? parseInt(searchParams.page) : 0;

  const { vehicles } = await fetchData(
    `/providers-service/vehicles?pageIndex=${page}`,
    {
      cache: 'no-store',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return (
    <Section
      title="Vehículos"
      subtitle="Todos las vehículos"
      description="La lista de vehículos de Grúas Ucab."
      trailing={
        <Link href="vehiculos/crear">
          <Button className="min-w-max flex gap-2">
            <PlusIcon className="w-5 h-5" />
            <span className="hidden md:flex shrink-0">Crear vehículo</span>
          </Button>
        </Link>
      }
    >
      <VehiclesTable vehicles={vehicles} />
    </Section>
  );
}

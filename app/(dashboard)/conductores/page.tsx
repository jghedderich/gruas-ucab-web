import Section from '@/components/ui/Section';
import { PlusIcon } from '@/components/icons/PlusIcon';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { fetchData } from '@/lib/fetchData';
import { DriversTable } from '@/components/drivers/DriversTable';

export const metadata = {
  title: 'Conductores | Grúas UCAB',
  description: 'Lista de conductores gestionados por Grúas Ucab',
};

export default async function DriversPage() {
  const response = await fetchData('/providers-service/drivers');

  return (
    <Section
      title="Conductores"
      subtitle="Todos las conductores"
      description="La lista de conductores gestionados por Grúas Ucab."
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

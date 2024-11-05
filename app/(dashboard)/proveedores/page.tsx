import Section from '@/components/ui/Section';
import { PlusIcon } from '@/components/icons/PlusIcon';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ProvidersTable } from '@/components/providers/ProvidersTable';
import { fetchData } from '@/lib/fetchData';

export const metadata = {
  title: 'Proveedores | Grúas UCAB',
  description: 'Lista de proveedores gestionados por Grúas Ucab',
};

export default async function ProvidersPage() {
  const response = await fetchData('/providers-service/providers');
  return (
    <Section
      title="Proveedores"
      subtitle="Todos las proveedores"
      description="La lista de proveedores de Grúas Ucab."
      trailing={
        <Link href="proveedores/crear">
          <Button className="min-w-max flex gap-2">
            <PlusIcon className="w-5 h-5" />
            <span className="hidden md:flex shrink-0">Crear proveedor</span>
          </Button>
        </Link>
      }
    >
      <ProvidersTable providers={response.providers} />
    </Section>
  );
}

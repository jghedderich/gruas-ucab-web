import Section from '@/components/ui/Section';
import { ProvidersTable } from '@/components/providers/ProvidersTable';
import { fetchData } from '@/lib/fetchData';
import { ValidatedLink } from '@/components/ui/ValidatedLink';
import { cookies } from 'next/headers';

export const metadata = {
  title: 'Proveedores | Grúas UCAB',
  description: 'Lista de proveedores gestionados por Grúas Ucab',
};

export default async function ProvidersPage() {
  const token = cookies().get('token')?.value;
  const response = await fetchData('/providers-service/providers', {
    cache: 'no-store',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return (
    <Section
      title="Proveedores"
      subtitle="Todos las proveedores"
      description="La lista de proveedores de Grúas Ucab."
      trailing={
        <ValidatedLink href="/proveedores/crear" text="Crear proveedor" />
      }
    >
      <ProvidersTable providers={response.providers} />
    </Section>
  );
}

import ProviderForm from '@/components/providers/ProvidersForm';
import Section from '@/components/ui/Section';
import { fetchData } from '@/lib/fetchData';

export const metadata = {
  title: 'Editar proveedor | Grúas UCAB',
  description: 'Edita los datos de la proveedor seleccionado.',
};

export default async function EditProviderPage({
  params,
}: {
  params: { id: string };
}) {
  const { provider } = await fetchData(
    `/providers-service/providers/${params.id}`,
    {
      cache: 'no-store',
    }
  );

  return (
    <Section
      title="Conductores"
      subtitle="Editar un proveedor."
      description="Edita los datos de la proveedor seleccionado."
    >
      <ProviderForm provider={provider} />
    </Section>
  );
}

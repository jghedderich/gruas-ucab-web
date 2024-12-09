import OrderForm from '@/components/orders/OrderForm';
import Section from '@/components/ui/Section';
import { fetchData } from '@/lib/fetchData';
import { parseProvidersList } from '@/lib/parse-providers-list';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ordenes de Servicio | Grúas UCAB',
  description: 'Crear una orden de servicio.',
};

export default async function CreateOrdenesDeServicioPage() {
  const { providers } = await fetchData('/providers-service/providers', {
    cache: 'no-store',
  });
  const { policies } = await fetchData('/orders-service/policies', {
    cache: 'no-store',
  });
  const drivers = parseProvidersList(providers);
  return (
    <Section
      title="Ordenes de Servicio"
      subtitle="Crear una orden de servicio."
      description="Ingresa los datos de la orden de servicio que deseas crear."
    >
      <div className="pb-20">
        <OrderForm drivers={drivers} policies={policies} />
      </div>
    </Section>
  );
}

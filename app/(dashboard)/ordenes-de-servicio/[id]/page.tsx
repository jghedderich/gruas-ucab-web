import OrderDetail from '@/components/orders/OrderDetail';
import { StatusBadge } from '@/components/orders/StatusBadge';
import Section from '@/components/ui/Section';
import { fetchData } from '@/lib/fetchData';
import { parseProvidersList } from '@/lib/parse-providers-list';
import { Metadata } from 'next';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
  title: 'Detalle de orden | Grúas UCAB',
  description: 'Detalle de una Orden de Servicio gestionada por Grúas Ucab',
};

export default async function OrdenesDeServicioPage({
  params,
}: {
  params: { id: string };
}) {
  const token = cookies().get('token')?.value;
  const { order } = await fetchData('/orders-service/orders/' + params.id, {
    cache: 'no-store',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const { providers } = await fetchData('/providers-service/providers', {
    cache: 'no-store',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const drivers = parseProvidersList(providers);

  const { policy } = await fetchData(
    '/orders-service/policies/' + order.policyId,
    {
      cache: 'no-store',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return (
    <Section
      title="Ordenes de servicio"
      subtitle={`Orden ${order.id}`}
      description="Detalle de una Orden de Servicio gestionada por Grúas Ucab."
      trailing={<StatusBadge status={order.orderStatus} />}
    >
      <OrderDetail order={order} drivers={drivers} policy={policy} />
    </Section>
  );
}

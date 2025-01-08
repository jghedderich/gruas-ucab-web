import { OrdersTable } from '@/components/orders/OrdersTable';
import Section from '@/components/ui/Section';
import { ValidatedLink } from '@/components/ui/ValidatedLink';
import { fetchData } from '@/lib/fetchData';

export const metadata = {
  title: 'Ordenes de Servicio | Grúas UCAB',
  description: 'Lista de ordenes de servicio gestionados por Grúas Ucab',
};

export default async function OrdenesDeServicioPage() {
  const { orders } = await fetchData('/orders-service/orders', {
    cache: 'no-store',
  });
  return (
    <Section
      title="Ordenes de servicio"
      subtitle="Lista de órdenes"
      description="Revisa y gestiona las ordenes registradas en Grúas UCAB"
      trailing={
        <ValidatedLink
          text="Crear orden"
          href="ordenes-de-servicio/crear"
          validRoles={['operator']}
        />
      }
    >
      <OrdersTable orders={orders} />
    </Section>
  );
}

import { PlusIcon } from '@/components/icons/PlusIcon';
import { OrdersTable } from '@/components/orders/OrdersTable';
import { Button } from '@/components/ui/button';
import Section from '@/components/ui/Section';
import { fetchData } from '@/lib/fetchData';
import Link from 'next/link';

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
      subtitle="Todas los Ordenes de servicios"
      description="La lista de Ordenes de servicio de Grúas Ucab."
      trailing={
        <Link href="ordenes-de-servicio/crear">
          <Button className="min-w-max flex gap-2">
            <PlusIcon className="w-5 h-5" />
            <span className="hidden md:flex shrink-0">Crear orden</span>
          </Button>
        </Link>
      }
    >
      <OrdersTable orders={orders} />
    </Section>
  );
}

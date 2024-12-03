import OrderDetail from '@/components/orders/OrderDetail';
import Section from '@/components/ui/Section';
import { fetchData } from '@/lib/fetchData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Editar orden | Grúas UCAB',
  description: 'Detalle de una Orden de Servicio gestionada por Grúas Ucab',
};

export default async function OrdenesDeServicioPage({
  params,
}: {
  params: { id: string };
}) {
  const { order } = await fetchData('/orders-service/orders/' + params.id);
  const { driver } = await fetchData(
    '/providers-service/drivers/' + order.driverId
  );
  const { vehicle } = await fetchData(
    '/providers-service/vehicles/' + driver.vehicleId
  );

  return (
    <Section
      title="Ordenes de servicio"
      subtitle={`Orden ${order.id}`}
      description="Detalle de una Orden de Servicio gestionada por Grúas Ucab."
    >
      <OrderDetail order={order} driver={driver} driverVehicle={vehicle} />
    </Section>
  );
}

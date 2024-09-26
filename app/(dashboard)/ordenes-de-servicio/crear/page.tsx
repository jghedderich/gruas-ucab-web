import OrderForm from '@/components/orders/OrderForm';
import Section from '@/components/ui/Section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ordenes de Servicio | Grúas UCAB',
  description: 'Crear una orden de servicio.',
};

export default function CreateOrdenesDeServicioPage() {
  return (
    <Section
      title="Ordenes de Servicio"
      subtitle="Crear una orden de servicio."
      description="Ingresa los datos de la orden de servicio que deseas crear."
    >
      <div className="pb-20">
        <OrderForm />
      </div>
    </Section>
  );
}

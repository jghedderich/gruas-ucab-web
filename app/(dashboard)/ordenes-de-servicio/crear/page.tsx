import OrderForm from '@/components/orders/OrderForm';
import Section from '@/components/ui/Section';

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

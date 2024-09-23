import { PlusIcon } from '@/components/icons/PlusIcon';
import { Button } from '@/components/ui/button';
import Section from '@/components/ui/Section';
import Link from 'next/link';

export const metadata = {
  title: 'Grúas Ucab | Ordenes de Servicio',
  description: 'Lista de ordenes de servicio gestionados por Grúas Ucab',
};

export default function OrdenesDeServicioPage() {
  return (
    <Section
      title="Ordenes de servicio"
      subtitle="Todas los Ordenes de servicios"
      description="La lista de Ordenes de servicio de Grúas Ucab."
      trailing={
        <Link href="ordenes-de-servicio/crear">
          <Button className="min-w-max flex gap-2">
            <PlusIcon className="w-5 h-5" />
            <span className="hidden md:flex shrink-0">
              Crear Ordenes de servicio
            </span>
          </Button>
        </Link>
      }
    >
      A table
    </Section>
  );
}

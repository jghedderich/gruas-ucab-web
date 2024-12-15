import Section from '@/components/ui/Section';
import { PlusIcon } from '@/components/icons/PlusIcon';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { fetchData } from '@/lib/fetchData';
import { OperatorsTable } from '@/components/operators/OperatorsTable';

export const metadata = {
  title: 'Operadores | Grúas UCAB',
  description: 'Lista de operadores gestionados por Grúas Ucab',
};

export default async function OperatorsPage() {
  const { operators } = await fetchData('/orders-service/operators', {
    cache: 'no-store',
  });

  return (
    <Section
      title="Operadores"
      subtitle="Todos los operadores."
      description="La lista de operadores gestionados por Grúas Ucab."
      trailing={
        <Link href="operadores/crear">
          <Button className="min-w-max flex gap-2">
            <PlusIcon className="w-5 h-5" />
            <span className="hidden md:flex shrink-0">Crear operador</span>
          </Button>
        </Link>
      }
    >
      <OperatorsTable operators={operators} />
    </Section>
  );
}

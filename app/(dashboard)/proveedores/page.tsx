import Section from '@/components/ui/Section';
import { PlusIcon } from '@/components/icons/PlusIcon';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Provider, Role } from '@/types';
import { ProvidersTable } from '@/components/providers/ProvidersTable';

export const metadata = {
  title: 'Proveedores | Grúas UCAB',
  description: 'Lista de proveedores gestionados por Grúas Ucab',
};

const proveedoresData: Provider[] = [
  {
    id: 1,
    nombre: 'Super Grus',
    admin: {
      id: 1,
      firstName: 'Juan',
      lastName: 'Hernandez',
      email: 'juan@gruas.com',
      password: '123456',
      dni: 'V12345678',
      role: Role.Admin,
    },
    flota: [],
    conductores: [],
  },
];

export default function ProvidersPage() {
  return (
    <Section
      title="Proveedores"
      subtitle="Todos los proveedores"
      description="La lista de proveedores de Grúas Ucab."
      trailing={
        <Link href="proveedores/crear">
          <Button className="min-w-max flex gap-2">
            <PlusIcon className="w-5 h-5" />
            <span className="hidden md:flex shrink-0">Crear Proveedor</span>
          </Button>
        </Link>
      }
    >
      <ProvidersTable providers={proveedoresData} />
    </Section>
  );
}

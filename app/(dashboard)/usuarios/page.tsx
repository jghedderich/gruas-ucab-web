import { PlusIcon } from '@/components/icons/PlusIcon';
import { Button } from '@/components/ui/button';
import Section from '@/components/ui/Section';
import { UsuariosTable } from '@/components/usuarios/UsuariosTable';
import Link from 'next/link';

export const metadata = {
  title: 'Grúas Ucab | Usuarios',
  description: 'Lista de usuarios gestionados por Grúas Ucab',
};

const usuarios = [
  {
    id: 1,
    nombre: 'Juan',
    apellido: 'Hernandez',
    email: 'juan@gruas.com',
    rol: 'admin',
  },
  {
    id: 2,
    nombre: 'Pedro',
    apellido: 'Hernandez',
    email: 'pedro@gruas.com',
    rol: 'operador de cabina',
  },
  {
    id: 3,
    nombre: 'Carlos',
    apellido: 'Hernandez',
    email: 'carlos@gruas.com',
    rol: 'proveedor',
  },
  {
    id: 4,
    nombre: 'Luis',
    apellido: 'Hernandez',
    email: 'luis@gruas.com',
    rol: 'conductor',
  },
];

export default function UsuariosPage() {
  return (
    <Section
      title="Usuarios"
      subtitle="Todos los Usuarios"
      description="La lista de Usuarios de Grúas Ucab."
      trailing={
        <Link href="usuarios/crear">
          <Button className="min-w-max flex gap-2">
            <PlusIcon className="w-5 h-5" />
            <span className="hidden md:flex shrink-0">Crear usuario</span>
          </Button>
        </Link>
      }
    >
      <UsuariosTable usuarios={usuarios} />
    </Section>
  );
}

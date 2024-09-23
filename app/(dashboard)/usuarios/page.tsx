import { PlusIcon } from '@/components/icons/PlusIcon';
import { Button } from '@/components/ui/button';
import Section from '@/components/ui/Section';
import { UsersTable } from '@/components/users/UsersTable';
import { Role, User } from '@/types';
import Link from 'next/link';

export const metadata = {
  title: 'Usuarios | Grúas UCAB',
  description: 'Lista de usuarios gestionados por Grúas Ucab',
};

const usuarios: User[] = [
  {
    id: 1,
    firstName: 'Juan',
    lastName: 'Hernandez',
    email: 'juan@gruas.com',
    role: Role.Driver,
    dni: 'V1029302',
    password: '123456',
    isActive: false,
  },
  {
    id: 2,
    firstName: 'Pedro',
    lastName: 'Hernandez',
    email: 'pedro@gruas.com',
    role: Role.Driver,
    dni: 'V1029302',
    password: '123456',
    isActive: false,
  },
  {
    id: 3,
    firstName: 'Carlos',
    lastName: 'Hernandez',
    email: 'carlos@gruas.com',
    role: Role.Operator,
    dni: 'V1029302',
    password: '123456',
    isActive: false,
  },
  {
    id: 4,
    firstName: 'Luis',
    lastName: 'Hernandez',
    email: 'luis@gruas.com',
    role: Role.Provider,
    dni: 'V1029302',
    password: '123456',
    isActive: false,
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
      <UsersTable users={usuarios} />
    </Section>
  );
}

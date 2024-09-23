import Section from '@/components/ui/Section';
import { UsersForm } from '@/components/users/UsersForm';
import { Role, User } from '@/types';

export const metadata = {
  title: 'Editar usuario | Grúas UCAB',
  description: 'Edita los datos del usuario seleccionado.',
};

const testUser: User = {
  id: 1,
  firstName: 'Peter',
  lastName: 'Parker',
  password: '123456',
  dni: 'V12345678',
  email: 'john.doe@example.com',
  role: Role.Driver,
};

export default function EditUsuariosPage() {
  return (
    <Section
      title="Usuarios"
      subtitle="Editar un usuario."
      description="Edita los datos del usuario seleccionado."
    >
      <UsersForm user={testUser} />
    </Section>
  );
}

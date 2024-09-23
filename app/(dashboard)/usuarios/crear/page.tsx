import Section from '@/components/ui/Section';
import { UsersForm } from '@/components/users/UsersForm';

export const metadata = {
  title: 'Crear usuario | Grúas UCAB',
  description: 'Crea un usuario.',
};

export default function CreateUsuariosPage() {
  return (
    <Section
      title="Usuarios"
      subtitle="Crear un usuario."
      description="Ingresa los datos del usuario que deseas crear."
    >
      <UsersForm />
    </Section>
  );
}

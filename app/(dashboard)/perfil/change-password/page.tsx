import { ChangePasswordForm } from '@/components/profile/ChangePasswordForm';
import Section from '@/components/ui/Section';

export const metadata = {
  title: 'Cambiar contraseña | Grúas UCAB',
  description: 'Cambia tu contraseña.',
};

export default function ChangePasswordPage() {
  return (
    <Section
      title="Perfil"
      subtitle="Cambiar contraseña"
      description="Actualiza tu contraseña temporal por una permanente o restablece tu contraseña actual."
      className="max-w-3xl"
    >
      <ChangePasswordForm />
    </Section>
  );
}

import { ProfileForm } from '@/components/profile/ProfileForm';
import { Button } from '@/components/ui/button';
import Section from '@/components/ui/Section';
import { LockIcon } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Perfil | Grúas UCAB',
  description: 'Perfil de usuario',
};

export default function ProfilePage() {
  return (
    <Section
      title="Perfil"
      subtitle="Revisa tu perfil"
      description="Actualiza tus datos personales."
      className="max-w-3xl"
      trailing={
        <Link href="/perfil/change-password">
          <Button className="min-w-max flex gap-2">
            <LockIcon className="w-5 h-5" />
            <span className="hidden md:flex shrink-0">Cambiar contraseña</span>
          </Button>
        </Link>
      }
    >
      <ProfileForm />
    </Section>
  );
}

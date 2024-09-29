import { ProfileForm } from '@/components/profile/ProfileForm';
import { Button } from '@/components/ui/button';
import Section from '@/components/ui/Section';
import { Role, User } from '@/types';
import { LockIcon } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Perfil | Grúas UCAB',
  description: 'Perfil de usuario',
};

const user: User = {
  id: 1,
  firstName: 'Juan',
  lastName: 'Hedderich',
  email: 'juan@gruas.com',
  role: Role.Admin,
  dni: 'V1029302',
  password: '123456',
  isActive: false,
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
      <ProfileForm currentUser={user} />
    </Section>
  );
}

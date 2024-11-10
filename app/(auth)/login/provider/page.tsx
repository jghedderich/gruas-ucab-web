import LoginForm from '@/components/auth/LoginForm';

export const metadata = {
  title: 'Grúas Ucab | Provider Login',
  description: 'Ingresa a tu cuenta de Grúas Ucab',
};

export default function ProviderLoginPage() {
  return <LoginForm userType="provider" />;
}

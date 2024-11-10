import LoginForm from '@/components/auth/LoginForm';

export const metadata = {
  title: 'Grúas Ucab | Admin Login',
  description: 'Ingresa a tu cuenta de Grúas Ucab',
};

export default function AdminLoginPage() {
  return <LoginForm userType="admin" />;
}

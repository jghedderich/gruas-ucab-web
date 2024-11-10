import LoginForm from '@/components/auth/LoginForm';

export const metadata = {
  title: 'Grúas Ucab | Operator Login',
  description: 'Ingresa a tu cuenta de Grúas Ucab',
};

export default function OperatorLoginPage() {
  return <LoginForm userType="operator" />;
}

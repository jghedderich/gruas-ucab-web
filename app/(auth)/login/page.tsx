import LoginForm from '@/components/auth/LoginForm';

export const metadata = {
  title: 'Grúas Ucab | Login',
  description: 'Ingresa a tu cuenta de Grúas Ucab',
};

export default function LoginPage() {
  return (
    <div>
      <LoginForm />
    </div>
  );
}

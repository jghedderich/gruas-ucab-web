import { RequestCodeForm } from '@/components/password-recovery/RequestCodeForm';
import { ResetPasswordForm } from '@/components/password-recovery/ResetPasswordForm';
import { SuccessCard } from '@/components/password-recovery/SuccessCard';
import { VerifyCodeForm } from '@/components/password-recovery/VerifyCodeForm';
import { UserType } from '@/types';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Grúas Ucab | Recuperar contraseña',
  description: 'Recupere su contraseña para acceder al sistema',
};

export default function RecoveryPasswordPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const step = searchParams.step;
  const userType = searchParams.userType as UserType;
  const email = searchParams.email as string;
  const userId = searchParams.userId as string;

  if (!userType) {
    return notFound();
  }

  switch (step) {
    case 'request':
      return <RequestCodeForm userType={userType} />;
    case 'verify':
      return <VerifyCodeForm userType={userType} email={email} />;
    case 'reset':
      return <ResetPasswordForm userType={userType} userId={userId} />;
    case 'success':
      return <SuccessCard userType={userType} />;
    default:
      return notFound();
  }
}

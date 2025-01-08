import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'No autorizado | Grúas UCAB',
  description: 'No tienes permisos para acceder a esta página',
};

export default async function UnauthorizedPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <Image src="/forbidden.png" width={80} height={80} alt="No autorizado" />
      <h1 className="font-semibold text-3xl">403: No autorizado</h1>
      <p>No tienes permisos para acceder a esta página.</p>
      <Button>
        <Link href="/">Volver</Link>
      </Button>
    </div>
  );
}

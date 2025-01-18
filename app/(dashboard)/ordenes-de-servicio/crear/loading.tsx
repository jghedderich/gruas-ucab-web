import { LoaderCircle } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[480px]">
      <LoaderCircle className="size-10 mb-3 animate-spin text-primary" />
      <h3 className="text-lg text-gray-500">Cargando...</h3>
    </div>
  );
}

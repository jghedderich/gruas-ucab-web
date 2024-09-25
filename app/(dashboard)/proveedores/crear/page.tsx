import ProviderForm from '@/components/providers/ProvidersForm';
import Section from '@/components/ui/Section';

export const metadata = {
  title: 'Crear proveedor | Grúas UCAB',
  description: 'Crea un proveedor.',
};

export default function CreateProvidersPage() {
  return (
    <Section
      title="Proveedores"
      subtitle="Crear una proveedor."
      description="Ingresa los datos de la empresa proveedora que deseas crear."
    >
      <ProviderForm />
    </Section>
  );
}

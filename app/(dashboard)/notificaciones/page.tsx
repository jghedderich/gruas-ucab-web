import Section from '@/components/ui/Section';
import { fetchData } from '@/lib/fetchData';
import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { NotificationsForm } from '@/components/notifications/NotificationsForm';
import { parseProvidersList } from '@/lib/parse-providers-list';

export const metadata: Metadata = {
  title: 'Notificaciones | Grúas Ucab',
  description:
    'Envía una notificación a alguno de los conductores de Grúas Ucab',
};

export default async function NotificationsPage() {
  const token = cookies().get('token')?.value;
  const { providers } = await fetchData('/providers-service/providers', {
    cache: 'no-store',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const drivers = parseProvidersList(providers);

  return (
    <Section
      title="Notificaciones"
      subtitle="Enviar notificaciones"
      description="Selecciona un conductor para enviar una notificación"
    >
      <NotificationsForm drivers={drivers} />
    </Section>
  );
}

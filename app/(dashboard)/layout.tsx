'use client';
import { AppSidebar } from '@/components/navigation/AppSidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import { useAuth } from '@/hooks/auth/use-auth';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuth();
  return (
    <SidebarProvider>
      <AppSidebar userType={'admin'} />
      <section className="w-full">
        <div className="max-w-screen-lg mt-6 px-10">{children}</div>
      </section>
    </SidebarProvider>
  );
}

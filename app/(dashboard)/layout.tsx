import { AppSidebar } from '@/components/navigation/AppSidebar';
import { SidebarProvider } from '@/components/ui/sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar userType="admin" />
      <section className="w-full">
        <div className="max-w-screen-lg mt-6 px-10">{children}</div>
      </section>
    </SidebarProvider>
  );
}

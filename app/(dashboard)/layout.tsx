'use client';
import { AppSidebar } from '@/components/navigation/AppSidebar';
import { Navbar } from '@/components/ui/Navbar';
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
      <AppSidebar userType={user?.userType} />
      <section className="w-full">
        <Navbar userType={user?.userType} />
        <div className="max-w-screen-lg mt-20 md:mt-6 md:px-10 px-4 mx-auto">
          {children}
        </div>
      </section>
    </SidebarProvider>
  );
}

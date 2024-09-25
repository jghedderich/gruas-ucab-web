import Sidebar from '@/components/navigation/Sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex">
      <Sidebar />
      <div className="max-w-screen-lg mx-auto mt-6 pl-24 pr-6 w-full">
        {children}
      </div>
    </section>
  );
}

import Sidebar from '@/components/navigation/Sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex">
      <Sidebar />
      <div className="max-w-screen-lg w-full mx-auto mt-6 px-6">{children}</div>
    </section>
  );
}

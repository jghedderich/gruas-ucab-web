export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex justify-center items-center w-full h-screen gap-6 bg-teal-50">
      {children}
    </section>
  );
}

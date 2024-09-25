import React from 'react';

interface ISectionProps {
  title: string;
  subtitle: string;
  description: string;
  trailing?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

function Section({
  title,
  subtitle,
  description,
  trailing,
  children,
  className,
}: ISectionProps) {
  return (
    <main className={className}>
      <header>
        <h1 className="font-semibold text-3xl mb-8">{title}</h1>
        <section className="flex items-center justify-between mb-5">
          <div>
            <h2 className="font-semibold text-lg">{subtitle}</h2>
            <p className="text-text-600 text-sm">{description}</p>
          </div>
          {trailing}
        </section>
      </header>
      {children}
    </main>
  );
}

export default Section;

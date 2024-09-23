import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SideBarLinkProps {
  href: string;
  icon: React.ReactNode;
  name: string;
}

function SideBarLink({ href, icon, name }: SideBarLinkProps) {
  const path = usePathname();
  return (
    <div className="relative group">
      <Link
        href={href}
        className={`font-semibold text-gray-500 transition ease-out  hover:text-teal-500 flex gap-3 ${
          path.includes(href) ? 'text-teal-500' : ''
        }`}
      >
        {icon}
      </Link>
      <div className="group-hover:block hidden absolute -top-1 left-8 bg-teal-500 py-1 px-2 rounded min-w-max z-50">
        <span className="font-semibold text-white">{name}</span>
      </div>
    </div>
  );
}

export default SideBarLink;

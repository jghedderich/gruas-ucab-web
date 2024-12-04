import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar';

interface SideBarLinkProps {
  userType: 'admin' | 'operator' | 'provider';
  link: {
    name: string;
    href: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    roles: string[];
  };
}

function SideBarLink({ link, userType }: SideBarLinkProps) {
  const path = usePathname();
  if (link.roles.includes(userType)) {
    return (
      <SidebarMenuItem key={link.name}>
        <SidebarMenuButton asChild isActive={path.includes(link.href)}>
          <Link href={link.href}>
            <link.icon />
            <span className="ml-1">{link.name}</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }
}

export default SideBarLink;

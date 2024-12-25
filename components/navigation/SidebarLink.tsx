import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar';
import { NavigationLink, UserType } from '@/types';

interface SideBarLinkProps {
  userType: UserType;
  link: NavigationLink;
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

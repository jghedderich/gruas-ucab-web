'use client';
import React from 'react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';
import { AppSidebarFooter } from './SidebarFooter';
import { administrationLinks, orderLinks, providerLinks } from './links';
import SideBarLink from './SidebarLink';

interface AppSidebarProps {
  userType: 'admin' | 'operator' | 'provider';
}

export function AppSidebar({ userType }: AppSidebarProps) {
  const { state } = useSidebar();
  const user = {
    name: 'Juan Hedderich',
    email: 'juan@hedderich.com',
  };
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="flex items-center justify-between">
              <div className={state === 'collapsed' ? 'hidden' : ''}>
                <h2 className="text-xl font-semibold">Grúas Ucab</h2>
                <p className="text-gray-500 text-sm">
                  Dashboard administrativo
                </p>
              </div>
              <SidebarTrigger className="size-8" />
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Ordenes de servicio</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {orderLinks.map((link) => (
                <SideBarLink link={link} userType={userType} key={link.name} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Proveedores</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {providerLinks.map((link) => (
                <SideBarLink link={link} userType={userType} key={link.name} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Administración</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {administrationLinks.map((link) => (
                <SideBarLink link={link} userType={userType} key={link.name} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <AppSidebarFooter state={state} user={user} />
    </Sidebar>
  );
}

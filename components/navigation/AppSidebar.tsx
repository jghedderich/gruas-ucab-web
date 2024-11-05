'use client';
import React from 'react';
import Link from 'next/link';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';
import { UsersIcon } from '../icons/UsersIcon';
import { OrderIcon } from '../icons/OrderIcon';
import { ProviderIcon } from '../icons/ProviderIcon';
import { PolicyIcon } from '../icons/PolicyIcon';
import { TarifasIcon } from '../icons/TarifasIcon';
import { CostsIcon } from '../icons/CostsIcon';
import { VehicleIcon } from '../icons/TruckIcon';
import { AppSidebarFooter } from './SidebarFooter';

// Assuming you'll get the user type from a prop or context
type UserType = 'admin' | 'operator' | 'provider';

const orderLinks = [
  {
    name: 'Ordenes',
    href: '/ordenes-de-servicio',
    icon: OrderIcon,
    roles: ['operator', 'admin', 'provider'],
  },
  {
    name: 'Pólizas',
    href: '/polizas',
    icon: PolicyIcon,
    roles: ['operator', 'admin'],
  },
  {
    name: 'Operadores',
    href: '/operadores',
    icon: UsersIcon,
    roles: ['admin'],
  },
];

const providerLinks = [
  {
    name: 'Proveedores',
    href: '/proveedores',
    icon: ProviderIcon,
    roles: ['admin'],
  },
  {
    name: 'Vehículos',
    href: '/vehiculos',
    icon: VehicleIcon,
    roles: ['provider', 'admin'],
  },
  {
    name: 'Conductores',
    href: '/conductores',
    icon: UsersIcon,
    roles: ['provider', 'admin'],
  },
];

const administrationLinks = [
  {
    name: 'Departamentos',
    href: '/departamentos',
    icon: ProviderIcon,
    roles: ['admin'],
  },
  {
    name: 'Tarifas',
    href: '/tarifas',
    icon: TarifasIcon,
    roles: ['admin', 'operator'],
  },
  {
    name: 'Costos adicionales',
    href: '/costos-adicionales',
    icon: CostsIcon,
    roles: ['admin'],
  },
];

interface AppSidebarProps {
  userType: UserType;
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
              {orderLinks.map((link) => {
                if (link.roles.includes(userType)) {
                  return (
                    <SidebarMenuItem key={link.name}>
                      <SidebarMenuButton asChild>
                        <Link href={link.href}>
                          <link.icon className="w-6 h-6" />
                          <span className="ml-2">{link.name}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                }
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Proveedores</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {providerLinks.map((link) => (
                <SidebarMenuItem key={link.name}>
                  <SidebarMenuButton asChild>
                    <Link href={link.href}>
                      <link.icon className="w-6 h-6" />
                      <span className="ml-2">{link.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Administración</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {administrationLinks.map((link) => (
                <SidebarMenuItem key={link.name}>
                  <SidebarMenuButton asChild>
                    <Link href={link.href}>
                      <link.icon className="w-6 h-6" />
                      <span className="ml-2">{link.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <AppSidebarFooter state={state} user={user} />
    </Sidebar>
  );
}

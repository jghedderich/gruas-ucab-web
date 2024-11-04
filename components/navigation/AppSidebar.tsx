'use client';

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
import React from 'react';
import Link from 'next/link';
import { UsersIcon } from '../icons/UsersIcon';
import { OrderIcon } from '../icons/OrderIcon';
import { ProviderIcon } from '../icons/ProviderIcon';
import { PolicyIcon } from '../icons/PolicyIcon';
import { TarifasIcon } from '../icons/TarifasIcon';
import { CostsIcon } from '../icons/CostsIcon';
import { VehicleIcon } from '../icons/TruckIcon';
import { AppSidebarFooter } from './SidebarFooter';

const orderLinks = [
  { name: 'Ordenes', href: '/ordenes-de-servicio', icon: OrderIcon },
  { name: 'Pólizas', href: '/polizas', icon: PolicyIcon },
  { name: 'Operadores', href: '/operadores', icon: UsersIcon },
];

const providerLinks = [
  { name: 'Proveedores', href: '/proveedores', icon: ProviderIcon },
  { name: 'Vehículos', href: '/vehiculos', icon: VehicleIcon },
  { name: 'Conductores', href: '/conductores', icon: UsersIcon },
];

const administrationLinks = [
  { name: 'Departamentos', href: '/departamentos', icon: ProviderIcon },
  { name: 'Tarifas', href: '/tarifas', icon: TarifasIcon },
  { name: 'Costos adicionales', href: '/costos-adicionales', icon: CostsIcon },
];

// Assuming you'll get the user type from a prop or context
type UserType = 'admin' | 'operator' | 'provider';

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
              {orderLinks.map((link) => (
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

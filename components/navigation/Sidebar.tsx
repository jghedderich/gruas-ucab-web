'use client';
import React from 'react';
import SideBarLink from './SidebarLink';
import { UsersIcon } from '../icons/UsersIcon';
import { TruckIcon } from '../icons/TruckIcon';
import { TarifasIcon } from '../icons/TarifasIcon';
import { OrderIcon } from '../icons/OrderIcon';
import Image from 'next/image';
import UserPopover from '../auth/UserPopover';
import { ProviderIcon } from '../icons/ProviderIcon';

function Sidebar() {
  const sidebarLinksTop = [
    {
      name: 'Ordenes de Servicio',
      href: '/ordenes-de-servicio',
      icon: OrderIcon,
    },
    {
      name: 'Usuarios',
      href: '/usuarios',
      icon: UsersIcon,
    },
    {
      name: 'Proveedores',
      href: '/proveedores',
      icon: ProviderIcon,
    },
    {
      name: 'Vehículos',
      href: '/vehiculos',
      icon: TruckIcon,
    },
    {
      name: 'Tarifas',
      href: '/tarifas',
      icon: TarifasIcon,
    },
  ];

  return (
    <nav className="flex flex-col justify-between px-4 pb-8 pt-5 border-r w-20 h-screen bg-white z-50 ease-out duration-300">
      <div>
        <div className="flex justify-between items-center mb-10">
          <Image
            src="/ucab_logo_negro.png"
            width={80}
            height={80}
            alt={'Logo de la Universidad Católica de Andres Bello'}
          />
        </div>
        <div className="flex flex-col items-center gap-7">
          {sidebarLinksTop?.map((link) => (
            <SideBarLink
              key={link.name}
              name={link.name}
              href={link.href}
              icon={<link.icon width={26} height={26} />}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-6">
        <hr className="w-full" />
        <UserPopover />
      </div>
    </nav>
  );
}

export default Sidebar;

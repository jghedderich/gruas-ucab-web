'use client';

import React from 'react';
import SideBarLink from './SidebarLink';
import { UsersIcon } from '../icons/UsersIcon';
import { OrderIcon } from '../icons/OrderIcon';
import Image from 'next/image';
import UserPopover from '../profile/UserPopover';
import { ProviderIcon } from '../icons/ProviderIcon';
import { PolicyIcon } from '../icons/PolicyIcon';
import { TarifasIcon } from '../icons/TarifasIcon';
import { CostsIcon } from '../icons/CostsIcon';
import { VehicleIcon } from '../icons/TruckIcon';

// Assuming you'll get the user type from a prop or context
type UserType = 'admin' | 'operator' | 'provider';

interface SidebarProps {
  userType: UserType;
}

const adminLinks = [
  { name: 'Usuarios', href: '/usuarios', icon: UsersIcon },
  { name: 'Ordenes', href: '/ordenes-de-servicio', icon: OrderIcon },
  { name: 'Pólizas', href: '/polizas', icon: PolicyIcon },
  { name: 'Departamentos', href: '/departamentos', icon: ProviderIcon },
  { name: 'Vehículos', href: '/vehiculos', icon: VehicleIcon },
  { name: 'Tarifas', href: '/tarifas', icon: TarifasIcon },
  { name: 'Costos adicionales', href: '/costos-adicionales', icon: CostsIcon },
];

const operatorLinks = [
  { name: 'Ordenes', href: '/ordenes-de-servicio', icon: OrderIcon },
  { name: 'Pólizas', href: '/polizas', icon: PolicyIcon },
  { name: 'Tarifas', href: '/tarifas', icon: TarifasIcon },
];

const providerLinks = [
  { name: 'Ordenes', href: '/ordenes-de-servicio', icon: OrderIcon },
  { name: 'Vehículos', href: '/vehiculos', icon: VehicleIcon },
  { name: 'Conductores', href: '/conductores', icon: UsersIcon },
  { name: 'Proveedores', href: '/proveedores', icon: ProviderIcon },
  // { name: 'Pólizas', href: '/polizas', icon: PolicyIcon },
  // { name: 'Tarifas', href: '/tarifas', icon: TarifasIcon },
];

export default function Sidebar({ userType }: SidebarProps) {
  const sidebarLinks = React.useMemo(() => {
    switch (userType) {
      case 'admin':
        return adminLinks;
      case 'operator':
        return operatorLinks;
      case 'provider':
        return providerLinks;
      default:
        return [];
    }
  }, [userType]);

  return (
    <nav className="fixed flex flex-col justify-between px-4 pb-8 pt-5 border-r w-20 h-screen bg-white z-50 ease-out duration-300">
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
          {sidebarLinks.map((link) => (
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

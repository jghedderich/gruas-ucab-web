import {
  ClipboardCheck,
  ShieldCheck,
  Headset,
  Building,
  Users,
  Bell,
} from 'lucide-react';
import { ProviderIcon } from '../icons/ProviderIcon';
import { VehicleIcon } from '../icons/TruckIcon';
import { NavigationLink } from '@/types';

export const orderLinks: NavigationLink[] = [
  {
    name: 'Ordenes',
    href: '/ordenes-de-servicio',
    icon: ClipboardCheck,
    roles: ['operator', 'administrator', 'provider'],
  },
  {
    name: 'Pólizas',
    href: '/polizas',
    icon: ShieldCheck,
    roles: ['operator', 'administrator'],
  },
  {
    name: 'Operadores',
    href: '/operadores',
    icon: Headset,
    roles: ['administrator'],
  },
];

export const providerLinks: NavigationLink[] = [
  {
    name: 'Proveedores',
    href: '/proveedores',
    icon: Building,
    roles: ['administrator', 'operator'],
  },
  {
    name: 'Vehículos',
    href: '/vehiculos',
    icon: VehicleIcon,
    roles: ['provider', 'administrator'],
  },
  {
    name: 'Conductores',
    href: '/conductores',
    icon: Users,
    roles: ['provider', 'administrator'],
  },
];

export const adminLinks: NavigationLink[] = [
  {
    name: 'Departamentos',
    href: '/departamentos',
    icon: ProviderIcon,
    roles: ['administrator'],
  },
  {
    name: 'Notificaciones',
    href: '/notificaciones',
    icon: Bell,
    roles: ['administrator'],
  },
];

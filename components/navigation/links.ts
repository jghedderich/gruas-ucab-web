import {
  ClipboardCheck,
  ShieldCheck,
  Headset,
  Building,
  Users,
  BadgeDollarSign,
  Banknote,
} from 'lucide-react';
import { ProviderIcon } from '../icons/ProviderIcon';
import { VehicleIcon } from '../icons/TruckIcon';

export const orderLinks = [
  {
    name: 'Ordenes',
    href: '/ordenes-de-servicio',
    icon: ClipboardCheck,
    roles: ['operator', 'admin', 'provider'],
  },
  {
    name: 'Pólizas',
    href: '/polizas',
    icon: ShieldCheck,
    roles: ['operator', 'admin'],
  },
  {
    name: 'Operadores',
    href: '/operadores',
    icon: Headset,
    roles: ['admin'],
  },
];

export const providerLinks = [
  {
    name: 'Proveedores',
    href: '/proveedores',
    icon: Building,
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
    icon: Users,
    roles: ['provider', 'admin'],
  },
];

export const administrationLinks = [
  {
    name: 'Departamentos',
    href: '/departamentos',
    icon: ProviderIcon,
    roles: ['admin'],
  },
  {
    name: 'Tarifas',
    href: '/tarifas',
    icon: BadgeDollarSign,
    roles: ['admin', 'operator'],
  },
  {
    name: 'Costos adicionales',
    href: '/costos-adicionales',
    icon: Banknote,
    roles: ['admin'],
  },
];

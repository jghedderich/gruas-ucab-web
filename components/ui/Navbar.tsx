'use client';
import React from 'react';
import Image from 'next/image';
import { UserType } from '@/types';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { adminLinks, orderLinks, providerLinks } from '../navigation/links';
import { useAuth } from '@/hooks/auth/use-auth';

export const Navbar = ({ userType }: { userType?: UserType }) => {
  const { logout } = useAuth();
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <nav className="z-40 flex flex-col md:hidden fixed w-full">
      <div
        className={`flex justify-between items-center px-4 py-3 border-gray-200 ${
          !isOpen ? 'border-b' : ''
        }`}
      >
        <Image
          src="/ucab_logo_negro.png"
          alt="Grúas Ucab"
          width={36}
          height={36}
        />
        <button onClick={() => setIsOpen(!isOpen)}>
          <Menu />
        </button>
      </div>
      <div
        className={`bg-white w-full h-screen flex-col justify-between ${
          isOpen ? 'flex' : 'hidden'
        }`}
      >
        <section>
          <h6 className="px-4 text-sm text-gray-500 mt-6 mb-2">
            Órdenes de servicio
          </h6>
          {orderLinks.map((link) => (
            <div key={link.name}>
              <Link
                href={link.href}
                className="flex text-lg items-center px-6 py-2 font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                {link.name}
              </Link>
            </div>
          ))}
          <h6 className="px-4 text-sm text-gray-500 mt-6 mb-2">Proveedores</h6>
          {providerLinks.map((link) => (
            <div key={link.name}>
              <Link
                href={link.href}
                className="flex text-lg items-center px-6 py-2 font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                {link.name}
              </Link>
            </div>
          ))}
          <h6 className="px-4 text-sm text-gray-500 mt-6 mb-2">
            Administración
          </h6>
          {adminLinks.map((link) => (
            <div key={link.name}>
              <Link
                href={link.href}
                className="flex text-lg items-center px-6 py-2 font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                {link.name}
              </Link>
            </div>
          ))}
          <h6 className="px-4 text-sm text-gray-500 mt-6 mb-2">Perfil</h6>
          <Link
            href="/perfil"
            className="flex gap-2 text-lg items-center px-6 py-2 font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            Perfil
          </Link>

          <button
            onClick={logout}
            className="flex gap-2 text-lg items-center px-6 w-full py-2 font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            Cerrar sesión
          </button>
        </section>
      </div>
    </nav>
  );
};

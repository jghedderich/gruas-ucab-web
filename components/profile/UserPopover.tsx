'use client';

import { useState } from 'react';
import { User, LogOut } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import Link from 'next/link';
import Image from 'next/image';
import { UserCircle } from '../icons/UserCircle';
import { Badge } from '../ui/badge';

export default function UserPopover() {
  const [isOpen, setIsOpen] = useState(false);

  // Mock user data - replace with actual user data in your application
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    avatar: '/placeholder.svg?height=50&width=50',
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button className="mx-auto hover:text-teal-500 text-gray-500 transition ease-out">
          <UserCircle className="size-7" />
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="w-64"
        align="start"
        alignOffset={0}
        sideOffset={16}
      >
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <div>
              <div className="flex gap-2 items-center">
                <h4 className="font-semibold">{user.name}</h4>
                <Badge variant={'secondary'} className="px-2">
                  Admin
                </Badge>
              </div>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          </div>
          <hr className="border-gray-200" />
          <Link
            href="/perfil"
            className="flex items-center space-x-2 text-sm text-gray-700 hover:text-teal-500 transition ease-out"
            onClick={() => setIsOpen(false)}
          >
            <User className="h-4 w-4" />
            <span>Perfil</span>
          </Link>
          <button
            onClick={() => {
              // Add logout logic here
              setIsOpen(false);
            }}
            className="flex items-center space-x-2 text-sm text-gray-700 hover:text-teal-500 transition ease-out"
          >
            <LogOut className="h-4 w-4" />
            <span>Cerrar sesión</span>
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

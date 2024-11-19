import React from 'react';
import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '../ui/sidebar';
import { User as UserIcon, LogOut } from 'lucide-react';
import { Badge } from '../ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { User } from '@/types';
import Link from 'next/link';

interface AppSidebarFooterProps {
  state: string;
  user?: User;
  logout: () => void;
}

export function AppSidebarFooter({
  state,
  user,
  logout,
}: AppSidebarFooterProps) {
  return (
    <SidebarFooter className="mb-3">
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton>
                <UserIcon className="" />
                {state === 'expanded' && (
                  <span className="font-medium">
                    {user?.name.firstName} {user?.name.lastName}
                  </span>
                )}
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" side="right">
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <div>
                      <div className="flex gap-2 items-center">
                        <h4 className="font-semibold">
                          {user?.name.firstName} {user?.name.lastName}
                        </h4>
                        <Badge variant={'secondary'} className="px-2">
                          {user?.userType}
                        </Badge>
                      </div>
                      <p className="font-normal text-sm text-gray-500">
                        {user?.email}
                      </p>
                    </div>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link
                  href="/perfil"
                  className="w-full flex items-center space-x-2"
                >
                  <UserIcon className="w-4 h-4 mr-2" />
                  <span>Perfil</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={logout}>
                <LogOut className="w-4 h-4 mr-2" />
                <span>Cerrar sesión</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
}

import React from 'react';
import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '../ui/sidebar';
import { User, LogOut } from 'lucide-react';
import { Badge } from '../ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

interface AppSidebarFooterProps {
  state: string;
  user: any;
}

export function AppSidebarFooter({ state, user }: AppSidebarFooterProps) {
  return (
    <SidebarFooter className="mb-3">
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton>
                <User className="" />
                {state === 'expanded' && (
                  <span className="font-medium">Juan Hedderich</span>
                )}
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" side="right">
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <div>
                      <div className="flex gap-2 items-center">
                        <h4 className="font-semibold">{user.name}</h4>
                        <Badge variant={'secondary'} className="px-2">
                          Admin
                        </Badge>
                      </div>
                      <p className="font-normal text-sm text-gray-500">
                        {user.email}
                      </p>
                    </div>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="w-4 h-4 mr-2" />
                <span>Perfil</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
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

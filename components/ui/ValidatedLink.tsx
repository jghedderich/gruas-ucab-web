'use client';

import Link from 'next/link';
import React from 'react';
import { Button } from './button';
import { PlusIcon } from 'lucide-react';
import { useAuth } from '@/hooks/auth/use-auth';
import { UserType } from '@/types';

interface ValidatedLinkProps {
  href: string;
  text: string;
  validRoles?: UserType[];
}

export const ValidatedLink = ({
  href,
  text,
  validRoles,
}: ValidatedLinkProps) => {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  if (
    validRoles?.includes(user.userType) ||
    user.userType === 'administrator'
  ) {
    return (
      <Link href={href}>
        <Button className="min-w-max flex gap-2">
          <PlusIcon className="w-5 h-5" />
          <span className="hidden md:flex shrink-0">{text}</span>
        </Button>
      </Link>
    );
  }
};

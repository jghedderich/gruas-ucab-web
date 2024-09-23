import React from 'react';
import { User } from '@/types';

export const useUsersTable = () => {
  const [activeUsers, setActiveUsers] = React.useState(new Set());

  const handleToggle = (user: User) => {
    if (activeUsers.has(user.id)) {
      activeUsers.delete(user.id);
    } else {
      activeUsers.add(user.id);
    }
    setActiveUsers(new Set(activeUsers));
  };

  return {
    activeUsers,
    handleToggle,
  };
};

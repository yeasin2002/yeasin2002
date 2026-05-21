import type { Access } from 'payload';

type UserWithRole = {
  role?: string;
};

export const isAdmin: Access = ({ req }) => {
  const user = req.user as UserWithRole | undefined;

  return user?.role === 'admin';
};

export const publicRead: Access = () => true;

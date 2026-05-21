import type { CollectionConfig } from 'payload';

import { isAdmin } from '../access/isAdmin';

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    group: 'System',
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'role', 'updatedAt'],
  },
  access: {
    create: isAdmin,
    delete: isAdmin,
    read: isAdmin,
    update: isAdmin,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'admin',
      saveToJWT: true,
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
      ],
    },
  ],
  timestamps: true,
};

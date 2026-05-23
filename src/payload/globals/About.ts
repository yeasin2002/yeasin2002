import type { GlobalConfig } from 'payload';

import { isAdmin, publicRead } from '../access/isAdmin.ts';

export const About: GlobalConfig = {
  slug: 'about',
  admin: {
    group: 'Content',
  },
  access: {
    read: publicRead,
    update: isAdmin,
  },
  fields: [
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'skills',
      type: 'relationship',
      relationTo: 'skills',
      hasMany: true,
    },
  ],
};

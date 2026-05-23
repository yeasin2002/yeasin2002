import type { CollectionConfig } from 'payload';

import { isAdmin, publicRead } from '../access/isAdmin.ts';

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    group: 'System',
    defaultColumns: ['filename', 'mimeType', 'alt', 'updatedAt'],
  },
  access: {
    create: isAdmin,
    delete: isAdmin,
    read: publicRead,
    update: isAdmin,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
    {
      name: 'credit',
      type: 'text',
    },
  ],
  timestamps: true,
  upload: {
    mimeTypes: ['image/*', 'application/pdf'],
  },
};

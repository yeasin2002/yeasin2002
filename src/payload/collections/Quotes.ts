import type { CollectionConfig } from 'payload';

import { isAdmin, publicRead } from '../access/isAdmin';

export const Quotes: CollectionConfig = {
  slug: 'quotes',
  admin: {
    group: 'Content',
    useAsTitle: 'author',
    defaultColumns: ['author', 'updatedAt'],
  },
  access: {
    create: isAdmin,
    delete: isAdmin,
    read: publicRead,
    update: isAdmin,
  },
  orderable: true,
  fields: [
    {
      name: 'quote',
      type: 'textarea',
      required: true,
    },
    {
      name: 'author',
      type: 'text',
      required: true,
    },
  ],
  timestamps: true,
};

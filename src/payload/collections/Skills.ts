import type { CollectionConfig } from 'payload';

import { isAdmin, publicRead } from '../access/isAdmin';

export const Skills: CollectionConfig = {
  slug: 'skills',
  admin: {
    group: 'Content',
    useAsTitle: 'name',
    defaultColumns: ['name', 'href', 'updatedAt'],
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
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
      required: true,
      filterOptions: {
        mimeType: {
          contains: 'image',
        },
      },
    },
    {
      name: 'href',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
    },
  ],
  timestamps: true,
};

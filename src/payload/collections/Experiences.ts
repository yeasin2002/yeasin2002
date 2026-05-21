import type { CollectionConfig } from 'payload';

import { isAdmin, publicRead } from '../access/isAdmin';

export const Experiences: CollectionConfig = {
  slug: 'experiences',
  admin: {
    group: 'Content',
    useAsTitle: 'company',
    defaultColumns: [
      'company',
      'position',
      'startDate',
      'endDate',
      'updatedAt',
    ],
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
      name: 'company',
      type: 'text',
      required: true,
    },
    {
      name: 'position',
      type: 'text',
      required: true,
    },
    {
      name: 'location',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
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
      name: 'description',
      type: 'array',
      fields: [
        {
          name: 'value',
          type: 'textarea',
          required: true,
        },
      ],
    },
    {
      name: 'startDate',
      type: 'text',
      required: true,
    },
    {
      name: 'endDate',
      type: 'text',
      required: true,
    },
    {
      name: 'website',
      type: 'text',
    },
    {
      name: 'technologies',
      type: 'relationship',
      relationTo: 'skills',
      hasMany: true,
    },
    {
      name: 'isCurrent',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
  timestamps: true,
};

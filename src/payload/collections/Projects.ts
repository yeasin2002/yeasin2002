import type { CollectionBeforeValidateHook, CollectionConfig } from 'payload';

import { isAdmin, publicRead } from '../access/isAdmin';
import { slugify } from '../utils/slugify';

const syncSlug: CollectionBeforeValidateHook = ({ data, operation }) => {
  const title = typeof data?.title === 'string' ? data.title : '';

  if (!title) {
    return data;
  }

  if (operation === 'create' || !data?.slug) {
    return {
      ...data,
      slug: slugify(title),
    };
  }

  return data;
};

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    group: 'Content',
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'isWorking', 'updatedAt'],
  },
  access: {
    create: isAdmin,
    delete: isAdmin,
    read: publicRead,
    update: isAdmin,
  },
  hooks: {
    beforeValidate: [syncSlug],
  },
  orderable: true,
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      index: true,
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
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
      name: 'link',
      type: 'text',
    },
    {
      name: 'live',
      type: 'text',
    },
    {
      name: 'technologies',
      type: 'relationship',
      relationTo: 'skills',
      hasMany: true,
    },
    {
      name: 'details',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'isWorking',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
  timestamps: true,
};

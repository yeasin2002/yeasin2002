import { lexicalEditor } from '@payloadcms/richtext-lexical';
import type { CollectionBeforeValidateHook, CollectionConfig } from 'payload';

import { isAdmin, publicRead } from '../access/isAdmin.ts';
import { slugify } from '../utils/slugify.ts';

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

export const BlogPosts: CollectionConfig = {
  slug: 'blog-posts',
  admin: {
    group: 'Content',
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'publishedAt', 'updatedAt'],
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
  defaultSort: '-publishedAt',
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
      name: 'excerpt',
      type: 'textarea',
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      filterOptions: {
        mimeType: {
          contains: 'image',
        },
      },
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({}),
      required: true,
    },
    {
      name: 'publishedAt',
      type: 'date',
      required: true,
      defaultValue: () => new Date().toISOString(),
    },
  ],
  timestamps: true,
};

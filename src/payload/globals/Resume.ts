import type { GlobalConfig } from 'payload';

import { isAdmin, publicRead } from '../access/isAdmin.ts';

export const Resume: GlobalConfig = {
  slug: 'resume',
  admin: {
    group: 'Content',
  },
  access: {
    read: publicRead,
    update: isAdmin,
  },
  fields: [
    {
      name: 'file',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
};

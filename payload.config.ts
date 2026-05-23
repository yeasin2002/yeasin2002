import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildConfig } from 'payload';
import sharp from 'sharp';

import { BlogPosts } from './src/payload/collections/BlogPosts.ts';
import { Experiences } from './src/payload/collections/Experiences.ts';
import { Media } from './src/payload/collections/Media.ts';
import { Projects } from './src/payload/collections/Projects.ts';
import { Quotes } from './src/payload/collections/Quotes.ts';
import { Skills } from './src/payload/collections/Skills.ts';
import { Users } from './src/payload/collections/Users.ts';
import { About } from './src/payload/globals/About.ts';
import { Resume } from './src/payload/globals/Resume.ts';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const rootDir = dirname;
const blobReadWriteToken = process.env.BLOB_READ_WRITE_TOKEN;
const hasBlobReadWriteToken =
  typeof blobReadWriteToken === 'string' &&
  blobReadWriteToken.startsWith('vercel_blob_rw_');

export default buildConfig({
  admin: {
    user: 'users',
    importMap: {
      baseDir: path.resolve(rootDir, 'src/app/payload/(payload)'),
      importMapFile: path.resolve(
        rootDir,
        'src/app/payload/(payload)/admin/importMap.js',
      ),
    },
  },
  collections: [Users, Media, Skills, Experiences, Projects, BlogPosts, Quotes],
  db: vercelPostgresAdapter({
    pool: {
      connectionString:
        process.env.DATABASE_URL ?? process.env.POSTGRES_URL ?? undefined,
    },
  }),
  editor: lexicalEditor({}),
  globals: [About, Resume],
  plugins: [
    vercelBlobStorage({
      enabled: hasBlobReadWriteToken,
      token: blobReadWriteToken,
      collections: {
        media: true,
      },
    }),
  ],
  routes: {
    admin: '/payload/admin',
    api: '/payload/api',
    graphQL: '/payload/api/graphql',
    graphQLPlayground: '/payload/api/graphql-playground',
  },
  secret: process.env.PAYLOAD_SECRET || 'payload-secret-dev',
  serverURL: process.env.NEXT_PUBLIC_URL || 'http://localhost:3000',
  sharp,
  typescript: {
    outputFile: path.resolve(rootDir, 'payload-types.ts'),
  },
});

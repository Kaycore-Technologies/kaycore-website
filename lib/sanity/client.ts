import { createClient } from '@sanity/client';
import type { SanityClient } from '@sanity/client';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = '2024-01-01';

if (!projectId || !dataset) {
  console.warn(
    'Missing Sanity environment variables. Please set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET'
  );
}

export const client: SanityClient = createClient({
  projectId: projectId || 'not-configured',
  dataset: dataset || 'production',
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
});

export default client;

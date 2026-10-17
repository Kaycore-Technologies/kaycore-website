import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kaycore Technologies',
    short_name: 'Kaycore',
    description:
      'Kaycore Technologies is a founder-led AI Quality Engineering firm. We test AI systems, and the websites and apps AI builds, for startups and enterprises.',
    start_url: '/',
    display: 'browser',
    background_color: '#F6F8FC',
    theme_color: '#F6F8FC',
    icons: [
      { src: '/icon.png', sizes: '452x452', type: 'image/png' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  };
}

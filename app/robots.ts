import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/studio/', '/admin/', '/private/'],
            },
            {
                userAgent: ['Googlebot', 'Bingbot'],
                allow: '/',
            },
            {
                userAgent: ['AhrefsBot', 'SemrushBot'],
                disallow: '/',
            },
        ],
        sitemap: 'https://www.kaycore.com/sitemap.xml',
    };
}

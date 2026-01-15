/**
 * Image configuration for open-source images
 * Uses Unsplash, Pexels, and Pixabay as sources
 *
 * Image URLs are loaded from CDN or API endpoints
 */

export const imageConfig = {
  heroes: {
    home: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop',
    about: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop',
    services: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop',
    blog: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop',
    caseStudies: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop',
    contact: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&h=1080&fit=crop',
  },

  team: {
    member1: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
    member2: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop',
    member3: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
    member4: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop',
    member5: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
    member6: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop',
  },

  services: {
    webDevelopment: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=300&fit=crop',
    cloudSolutions: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=300&fit=crop',
    dataAnalytics: 'https://images.unsplash.com/photo-1551432945-e56dcaab2db5?w=300&h=300&fit=crop',
    aiMl: 'https://images.unsplash.com/photo-1599721032343-a2b45d66ed42?w=300&h=300&fit=crop',
    consulting: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=300&fit=crop',
    security: 'https://images.unsplash.com/photo-1563986768609-322914651429?w=300&h=300&fit=crop',
    optimization: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=300&fit=crop',
    devops: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=300&fit=crop',
  },

  blog: {
    featured: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
    post1: 'https://images.unsplash.com/photo-1563986768609-322914651429?w=1200&h=600&fit=crop',
    post2: 'https://images.unsplash.com/photo-1599720032343-a2b45d66ed42?w=1200&h=600&fit=crop',
    post3: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop',
  },

  caseStudies: {
    retail: 'https://images.unsplash.com/photo-1564466809058-bf4ee00e9b5d?w=1200&h=800&fit=crop',
    finance: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
    healthcare: 'https://images.unsplash.com/photo-1576091160550-112173f1f664?w=1200&h=800&fit=crop',
    ecommerce: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop',
    saas: 'https://images.unsplash.com/photo-1551432945-e56dcaab2db5?w=1200&h=800&fit=crop',
    enterprise: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=800&fit=crop',
  },
};

/**
 * Get image URL with fallback
 * @param category - Image category (heroes, team, services, blog, caseStudies)
 * @param key - Image key within category
 * @param fallback - Fallback color/placeholder
 * @returns Image URL string
 */
export function getImageUrl(
  category: keyof typeof imageConfig,
  key: string,
  fallback = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
): string {
  return imageConfig[category as keyof typeof imageConfig]?.[
    key as keyof (typeof imageConfig)[keyof typeof imageConfig]
  ] as string | undefined || fallback;
}

import type { Metadata } from 'next';
import { getAllServices } from '@/lib/sanity/queries';
import ServicesContent from './ServicesContent';

interface Service {
  id: string | number;
  title: string;
  emoji: string;
  description: string;
  features: string[];
  slug: string;
}

// Mock data for services (Fallback)
const mockServices: Service[] = [
  {
    id: 1,
    title: 'AI & Automation Solutions',
    emoji: '🤖',
    description: 'Custom AI dashboards, workflow automation, intelligent bots, and internal tools to drive operational efficiency.',
    features: ['Workflow Automation', 'Intelligent Chatbots', 'AI Dashboards', 'Process Optimization'],
    slug: 'ai-automation',
  },
  {
    id: 2,
    title: 'Software Development',
    emoji: '💻',
    description: 'Enterprise-grade web applications, SaaS platforms, and internal systems built for scale and performance.',
    features: ['Web Applications', 'SaaS Platforms', 'Internal Systems', 'Mobile Solutions'],
    slug: 'software-development',
  },
  {
    id: 3,
    title: 'Cloud & DevOps',
    emoji: '☁️',
    description: 'Zero-downtime cloud migration, CI/CD pipeline automation, and scalable infrastructure architecture.',
    features: ['Cloud Migration', 'CI/CD Automation', 'Scalable Architecture', 'Infrastructure as Code'],
    slug: 'cloud-devops',
  },
  {
    id: 4,
    title: 'Cybersecurity & Compliance',
    emoji: '🔒',
    description: 'Comprehensive security audits, real-time monitoring, and risk mitigation strategies.',
    features: ['Security Audits', 'Real-time Monitoring', 'Risk Mitigation', 'Compliance Frameworks'],
    slug: 'cybersecurity',
  },
  {
    id: 5,
    title: 'Tech Consulting & Strategy',
    emoji: '📊',
    description: 'Expert architecture planning, system audits, and digital transformation roadmaps.',
    features: ['Architecture Planning', 'System Audits', 'Digital Transformation', 'Tech Roadmap'],
    slug: 'tech-consulting',
  },
];

export const metadata: Metadata = {
  title: 'AI Testing & AI Quality Engineering Services | Kaycore',
  description: 'Explore Kaycore’s AI Quality Engineering services including AI risk audits, LLM testing, AI QA automation, and ongoing AI quality retainers.',
};

export default async function Services() {
  const sanityServices = await getAllServices();

  // Transform Sanity services to match the component's expected structure
  const transformedSanityServices: Service[] = sanityServices.map(service => ({
    id: service._id,
    title: service.title,
    // Handle emoji/icon. Mock uses 'emoji', Sanity uses 'icon'.
    emoji: service.icon || '🚀',
    description: service.description,
    features: service.features || [],
    slug: typeof service.slug === 'object' && service.slug !== null && 'current' in service.slug ? (service.slug as any).current : service.slug,
  }));

  // const services: Service[] = transformedSanityServices.length > 0 ? transformedSanityServices : mockServices;

  return <ServicesContent />;
}

import { SchemaTypeDefinition } from 'sanity';

const post: SchemaTypeDefinition = {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(100),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      validation: (Rule) => Rule.required().min(20).max(300),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Cloud Technology', value: 'Cloud Technology' },
          { title: 'Cybersecurity', value: 'Cybersecurity' },
          { title: 'AI & ML', value: 'AI & ML' },
          { title: 'DevOps', value: 'DevOps' },
          { title: 'Compliance', value: 'Compliance' },
          { title: 'Architecture', value: 'Architecture' },
          { title: 'Infrastructure', value: 'Infrastructure' },
          { title: 'Development', value: 'Development' },
          { title: 'Operations', value: 'Operations' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'readTime',
      title: 'Read Time (minutes)',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(60),
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      date: 'publishedAt',
    },
    prepare(selection) {
      const { author, date } = selection;
      return {
        title: selection.title,
        subtitle: author && date ? `by ${author} on ${new Date(date).toLocaleDateString()}` : author,
      };
    },
  },
};

const caseStudy: SchemaTypeDefinition = {
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(150),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'client',
      title: 'Client Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'industry',
      title: 'Industry',
      type: 'string',
      options: {
        list: [
          { title: 'Retail', value: 'Retail' },
          { title: 'Financial Services', value: 'Financial Services' },
          { title: 'Healthcare', value: 'Healthcare' },
          { title: 'Banking', value: 'Banking' },
          { title: 'Manufacturing', value: 'Manufacturing' },
          { title: 'Media & Entertainment', value: 'Media & Entertainment' },
          { title: 'Technology', value: 'Technology' },
          { title: 'Other', value: 'Other' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'text',
      validation: (Rule) => Rule.required().min(50),
    },
    {
      name: 'problem',
      title: 'The Challenge',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'solution',
      title: 'Our Solution',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'results',
      title: 'Results',
      type: 'object',
      fields: [
        {
          name: 'metrics',
          title: 'Key Metrics',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'label', type: 'string', title: 'Metric Label' },
                { name: 'value', type: 'string', title: 'Metric Value' },
              ],
            },
          ],
        },
        {
          name: 'achievements',
          title: 'Key Achievements',
          type: 'array',
          of: [{ type: 'string' }],
        },
      ],
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'duration',
      title: 'Project Duration',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      client: 'client',
      industry: 'industry',
    },
    prepare(selection) {
      const { client, industry } = selection;
      return {
        title: selection.title,
        subtitle: `${client} • ${industry}`,
      };
    },
  },
};

const service: SchemaTypeDefinition = {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(100),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'text',
      validation: (Rule) => Rule.required().min(20).max(500),
    },
    {
      name: 'icon',
      title: 'Icon Emoji',
      type: 'string',
      validation: (Rule) => Rule.required().max(2),
    },
    {
      name: 'fullDescription',
      title: 'Full Description',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(3),
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};

const blockContent: SchemaTypeDefinition = {
  name: 'blockContent',
  title: 'Block Content',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Heading 2', value: 'h2' },
        { title: 'Heading 3', value: 'h3' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Link',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
              },
            ],
          },
        ],
      },
    },
    {
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
    },
    {
      type: 'code',
      options: {
        language: 'javascript',
        highlightedLines: [],
        theme: 'github',
      },
    },
  ],
};

import news from '@/schemas/news';

export const schemaTypes = [post, caseStudy, service, news, blockContent];

import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'news',
    title: 'News & Insights',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'date',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Press Release', value: 'Press Release' },
                    { title: 'Insights', value: 'Insights' },
                    { title: 'Company News', value: 'Company News' },
                    { title: 'Case Study', value: 'Case Study' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Cover Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                }
            ]
        }),
        defineField({
            name: 'link',
            title: 'External Link (Optional)',
            type: 'url',
            description: 'Use this if the news item links to an external page instead of an internal slug',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'category',
            media: 'image',
        },
    },
});

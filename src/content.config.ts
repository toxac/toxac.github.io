import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    // Load Markdown and MDX files in the `src/content/blog/` directory.
    loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
    // Type-check frontmatter using a schema
    schema: z.object({
        icon: z.string(),
        title: z.string(),
        description: z.string(),
        categories: z.array(z.enum(['Web Development', 'Marketing', 'Data', 'Guide', 'Project', "Thoughts"])).optional(),
        // Transform string to Date object
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string().optional(),
        tags: z.array(z.string()).optional(),
    }),
});

const projects = defineCollection({
    // Load Markdown and MDX files in the `src/content/blog/` directory.
    loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
    // Type-check frontmatter using a schema
    schema: z.object({
        icon: z.string(),
        title: z.string(),
        year: z.number(),
        description: z.string(),
        categories: z.array(z.enum(['Technology & Apps', 'Business & Marketing', 'Data and Analysis', 'Multidisciplinary', "Research & Planning", "Teaching", "Venture"])).optional(),
        // Transform string to Date object
        associations: z.array(z.string()).optional(),
        status: z.enum(['In Progress', 'Completed', 'On Hold', 'Cancelled']).optional(),
        image: z.string().optional(),
        imageAlt: z.string(),
        tags: z.array(z.string()).optional(),
    }),
});

export const collections = { blog, projects };
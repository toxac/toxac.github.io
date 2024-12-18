import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

// Series collection schema
const series = defineCollection({
	// Load Markdown and MDX files in the `src/content/series/` directory.
	loader: glob({ base: './src/content/series', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
	  title: z.string(),
	  description: z.string(),
	  posts: z.array(z.string()), // Array of blog post slugs in order
	  theme: z.enum([
		'webDevelopment', 
		'dataAnalysis', 
		'marketing', 
		'business', 
		'entrepreneurship', 
		'craft', 
		'food', 
		'education'
	  ]),
	  category: z.enum([
		'work', 
		'thoughts', 
		'curiosity', 
		'projects'
	  ]),
	  totalPosts: z.number().min(2).max(10), // Enforce series size
	  coverImage: z.string().optional()
	})
});

// blog schema
const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		draft: z.boolean().default(false),
		// Content Classification 
		theme: z.enum([
			'webDevelopment', 
			'dataAnalysis', 
			'marketing', 
			'business', 
			'entrepreneurship', 
			'craft', 
			'food', 
			'education'
		]),
		category: z.enum([
			'work', 
			'thoughts', 
			'curiosity', 
			'projects'
		]),
		// Tags for additional flexibility
		tags: z.array(z.string()).optional(),

		// New series-related fields
		series: z.object({
			name: z.string().optional(), // Name of the series
			part: z.number().optional(), // Part number in the series
			total: z.number().optional(), // Total parts in the series
			previousPost: z.string().optional(), // Slug of previous post in series
			nextPost: z.string().optional() // Slug of next post in series
		}).optional()
	}),
});

export const collections = { blog, series };

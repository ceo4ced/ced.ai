import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/content/work' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        tag: z.string(),
        tagColor: z.string(),
        headline: z.string(),
        metric: z.string().optional(),
        metricLabel: z.string().optional(),
        domain: z.string(),
        timeline: z.string(),
        status: z.string(),
        techStack: z.array(z.string()),
        methodologySteps: z.array(z.number()),
        order: z.number(),
    }),
});

export const collections = { work };

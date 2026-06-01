import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.messagesur.bzh',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.messagesur.bzh/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.messagesur.bzh/blog/faux-numero',
      lastModified: new Date('2026-06-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.messagesur.bzh/blog/carte-vitale',
      lastModified: new Date('2026-05-25'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.messagesur.bzh/blog/faux-colis-ia',
      lastModified: new Date('2026-05-19'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.messagesur.bzh/blog/vishing',
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.messagesur.bzh/blog/impots',
      lastModified: new Date('2026-05-04'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.messagesur.bzh/blog/faux-pv',
      lastModified: new Date('2026-04-27'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.messagesur.bzh/blog/chronopost',
      lastModified: new Date('2026-04-24'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.messagesur.bzh/blog/ameli',
      lastModified: new Date('2026-04-24'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.messagesur.bzh/blog/clic-suspect',
      lastModified: new Date('2026-04-24'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}

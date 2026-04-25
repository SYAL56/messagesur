import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://www.messagesur.bzh', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://www.messagesur.bzh/blog', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://www.messagesur.bzh/blog/chronopost', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.messagesur.bzh/blog/ameli', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.messagesur.bzh/blog/clic-suspect', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.messagesur.bzh/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://www.messagesur.bzh/guide', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://www.messagesur.bzh/confidentialite', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://www.messagesur.bzh/mentions-legales', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]
}

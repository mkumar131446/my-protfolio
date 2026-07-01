import type { VercelRequest, VercelResponse } from '@vercel/node'
import Parser from 'rss-parser'

const parser = new Parser()

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const feed = await parser.parseURL('https://medium.com/feed/@mkumar131446')
    // Medium's feed has no `description`/`content`/`contentSnippet` field — rss-parser
    // only exposes the body as `content:encodedSnippet` / `content:encoded`.
    const posts = (feed.items ?? []).slice(0, 10).map((item) => ({
      title: item.title ?? '',
      link: item.link ?? '',
      pubDate: item.pubDate ?? item.isoDate ?? '',
      description: item['content:encodedSnippet'] ?? item['content:encoded'] ?? '',
    }))
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200).json({ posts })
  } catch (err) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(500).json({ error: 'Failed to fetch Medium feed', posts: [] })
  }
}

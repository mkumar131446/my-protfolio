import type { VercelRequest, VercelResponse } from '@vercel/node'
import Parser from 'rss-parser'

const parser = new Parser()

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const feed = await parser.parseURL('https://medium.com/feed/@mkumar131446')
    const posts = feed.items?.slice(0, 10)
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.status(200).json({ posts })
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch Medium feed', details: err })
  }
}

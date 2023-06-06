// /api/book?bookId=48b86ac2-014e-401d-bcbb-331ce5f4a457

import { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405)
  }

  const books = await prisma.book.findMany()

  return res.json({ books })
}

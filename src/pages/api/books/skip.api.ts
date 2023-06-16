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

  const { skip } = req.query

  const books = await prisma.book.findMany({
    skip: Number(skip),
    orderBy: {
      name: 'asc',
    },
  })

  const booksFormatted = books.map((books) => {
    return {
      author: books.author,
      id: books.id,
      name: books.name,
      imageUrl: books.cover_url,
    }
  })

  return res.json({ books: booksFormatted })
}

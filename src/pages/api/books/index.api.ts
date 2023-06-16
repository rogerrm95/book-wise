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

  const results = await prisma.$transaction([
    prisma.book.count(), // QUANTIDADE DE LIVROS CADASTRADOS //
    prisma.book.findMany({
      take: 9,
      orderBy: {
        name: 'asc',
      },
    }),
  ])

  const total = results[0] ?? 0
  const books = results[1].map((book) => {
    return {
      author: book.author,
      id: book.id,
      name: book.name,
      imageUrl: book.cover_url,
    }
  }) as any

  return res.json({ total, books })
}

// /api/book?bookId=48b86ac2-014e-401d-bcbb-331ce5f4a457
import { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '@/lib/prisma'
import { calculateAverage } from '@/utils/calculateAverage'

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
      orderBy: {
        name: 'asc',
      },
      include: {
        categories: {
          select: {
            category: true,
          },
        },
        ratings: {
          select: {
            rate: true,
          },
        },
      },
    }),
  ])

  const total = results[0] ?? 0
  const books = results[1].map((book) => {
    const { average } = calculateAverage(book.ratings.map((rate) => rate.rate))

    return {
      author: book.author,
      id: book.id,
      name: book.name,
      imageUrl: book.cover_url,
      categories: book.categories.map((category) => category.category.name),
      ratings: average,
    }
  }) as any

  return res.json({ total, books })
}

import { prisma } from '@/lib/prisma'
import { calculateAverage } from '@/utils/calculateAverage'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const data = await prisma.book.findMany({
    orderBy: { ratings: { _count: 'desc' } },
    include: {
      ratings: {
        select: {
          id: true,
          rate: true,
        },
      },
    },
    take: 4,
  })

  if (!data) {
    return res.status(404).json({ popularBooks: [] })
  }

  const popularBooks = data.map((book) => {
    const { average } = calculateAverage(book.ratings.map((rate) => rate.rate))
    return {
      id: book.id,
      name: book.name,
      author: book.author,
      imageUrl: book.cover_url,
      rating: Number(average),
    }
  })

  return res.status(201).json({ popularBooks })
}

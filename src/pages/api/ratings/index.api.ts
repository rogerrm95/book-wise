import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  // QUANTIDADE DE AVALIAÇÕES CARREGADAS NO FRONT-END //
  let AMOUNT_RATINGS

  if (req.query.take) {
    AMOUNT_RATINGS = Number(req.query.take)
  }

  const data = await prisma.rating.findMany({
    orderBy: {
      created_at: 'desc',
    },
    include: {
      book: {
        select: {
          author: true,
          name: true,
          cover_url: true,
        },
      },
      user: {
        select: {
          name: true,
          avatar_url: true,
        },
      },
    },
    take: AMOUNT_RATINGS,
  })

  const ratings = data.map((rating) => {
    return {
      id: rating.id,
      rating: rating.rate,
      description: rating.description,
      createdAt: rating.created_at,
      book: {
        bookId: rating.book_id,
        name: rating.book.name,
        imageUrl: rating.book.cover_url,
        author: rating.book.author,
      },
      user: {
        userId: rating.user_id,
        name: rating.user.name,
        avatar: rating.user.avatar_url,
      },
    }
  })

  return res.status(201).json({ ratings })
}

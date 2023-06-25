import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const userId = String(req.query.userId)

  const data = await prisma.rating.findFirst({
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
    where: {
      user_id: userId,
    },
    take: 1,
  })

  if (!data) {
    return res.status(200).json({})
  }

  const rating = {
    id: data.id,
    rating: data.rate,
    description: data.description,
    createdAt: data.created_at,
    book: {
      bookId: data.book_id,
      name: data.book.name,
      imageUrl: data.book.cover_url,
      author: data.book.author,
    },
    user: {
      userId: data.user_id,
      name: data.user.name,
      avatar: data.user.avatar_url,
    },
  }

  return res.status(201).json({ rating })
}

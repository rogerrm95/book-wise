import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const { userId } = String(req.query.userId)

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
    where: {
      user_id: userId,
    },
    take: 1,
  })

  console.log(data)

  return res.status(201).json({})
}

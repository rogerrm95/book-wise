import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const userId = String(req.query.userId)

  if (!userId) {
    return res.status(404).end()
  }

  await prisma.user
    .findUniqueOrThrow({
      where: {
        id: userId,
      },
    })
    .catch((_) => {
      return res.status(404).json({ message: 'Usuário não encontrado' })
    })

  const { data } = req.body

  const response = await prisma.rating.create({
    data: {
      description: data.description,
      rate: data.rate,
      book_id: data.book_id,
      user_id: userId,
    },
    include: {
      user: {
        select: {
          name: true,
          avatar_url: true,
        },
      },
    },
  })

  const rating = {
    ...response,
    rating: response.rate,
    user: {
      avatar: response.user.avatar_url,
      name: response.user.name,
    },
  }

  return res.status(201).json({ rating })
}

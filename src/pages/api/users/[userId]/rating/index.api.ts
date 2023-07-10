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
    return res.status(404).json({ message: 'User ID not found!' })
  }

  const isUserExists = await prisma.user.findUniqueOrThrow({
    where: {
      id: userId,
    },
  })

  if (!isUserExists) {
    return res.status(403).json({ message: 'User not exists!' })
  }

  const { data } = req.body

  await prisma.rating.create({
    data: {
      description: data.description,
      rate: data.rate,
      book_id: data.book_id,
      user_id: userId,
    },
  })

  return res.status(201).json({ message: 'OK' })
}

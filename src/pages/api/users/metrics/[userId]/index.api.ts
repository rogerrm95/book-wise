import { prisma } from '@/lib/prisma'
import { itemMostOften } from '@/utils/itensMostOften'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const userId = String(req.query.userId)

  if (!userId) {
    return res.status(400).json({ message: 'User ID not found' })
  }

  const response = await prisma.user.findFirstOrThrow({
    where: {
      id: userId,
    },
    include: {
      ratings: {
        select: {
          id: true,
          rate: true,
          created_at: true,
          description: true,
          book: {
            select: {
              name: true,
              author: true,
              cover_url: true,
              total_pages: true,
              categories: {
                select: {
                  category: true,
                },
              },
            },
          },
        },
      },
    },
  })

  const userInfo = {
    name: response.name,
    avatar: response.avatar_url,
    createdAt: response.created_at,
    ratings: response.ratings.map((rating) => {
      return {
        id: rating.id,
        rate: rating.rate,
        description: rating.description,
        createdAt: rating.created_at,
        book: {
          name: rating.book.name,
          author: rating.book.author,
          image: rating.book.cover_url,
        },
      }
    }),
  }

  if (response.ratings.length === 0) {
    const userMetrics = {
      totalPages: 0,
      totalAuthors: 0,
      ratedBooks: 0,
      categoryMostRead: null,
    }

    return res.status(201).json({
      user: {
        metrics: userMetrics,
        info: userInfo,
      },
    })
  }

  // TOTAL DE PÁGINAS LIDAS //
  const totalPages = response.ratings.reduce((acc, book) => {
    return (acc += book.book.total_pages)
  }, 0)

  // TOTAL DE LIVROS AVALIADOS //
  const authorsList = response.ratings.map((book) => {
    return book.book.author
  })

  // TOTAL DE AUTORES LIDOS //
  const authorsUniqueList = new Set(authorsList).size

  // CATEGORIA MAIS LIDA //
  const ratings = response.ratings
    .map((rating) => {
      return rating.book.categories.map((category) => category.category.name)
    })
    .toString()
    .split(',')
    .sort()

  const categoryMostOften = itemMostOften(ratings)

  // DADOS FINAIS //
  const userMetrics = {
    totalPages,
    totalAuthors: authorsUniqueList,
    ratedBooks: authorsList.length,
    categoryMostRead: categoryMostOften || null,
  }

  const user = {
    metrics: userMetrics,
    info: userInfo,
  }

  return res.status(201).json({ user })
}

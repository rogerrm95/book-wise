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

  const data = await prisma.rating.findMany({
    where: {
      user_id: userId,
    },
    include: {
      book: {
        select: {
          author: true,
          total_pages: true,
          name: true,
          categories: {
            select: {
              category: true,
            },
          },
        },
      },
    },
  })

  if (data.length === 0) {
    const userMetrics = {
      totalPages: 0,
      totalAuthors: 0,
      ratedBooks: 0,
      FavoriteCategory: null,
    }

    return res.status(201).json({ userMetrics })
  }

  // TOTAL DE PÁGINAS LIDAS //
  const totalPages = data.reduce((acc, book) => {
    return (acc += book.book.total_pages)
  }, 0)

  // TOTAL DE LIVROS AVALIADOS //
  const authorsList = data.map((book) => {
    return book.book.author
  })

  // TOTAL DE AUTORES LIDOS //
  const authorsUniqueList = new Set(authorsList).size

  // CATEGORIA MAIS LIDA //
  const ratings = data
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

  return res.status(201).json({ userMetrics })
}

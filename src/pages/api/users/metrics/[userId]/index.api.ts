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

  const data = await prisma.rating.findMany({
    where: {
      user_id: 'c296c6c0-5c59-40dd-aa8a-ef2b015b7502',
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

  // console.log('METRICAS:', data)

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
  const categoriesGroup = data.map((book) => book.book.categories)

  const categoriesList = categoriesGroup.map((category) => {
    return category.map((i) => i.category.name)
  })

  // Continuar daqui //
  // RANKEAR AS CATEGORIAS MAIS LIDAS //
  const categories = []

  console.log(categoriesList)

  const userMetrics = {
    totalPages,
    totalAuthors: authorsUniqueList,
    ratedBooks: authorsList.length,
    FavoriteCategory: null,
  }

  return res.status(201).json({ userMetrics })
}

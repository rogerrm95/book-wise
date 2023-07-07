import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { useSession } from 'next-auth/react'
import { buildNextAuthOptions } from '../api/auth/[...nextauth].api'

import { api } from '@/lib/axios'

import { BookReview, RatingType } from '@/components/BookReview'
import { Box } from '@/components/Box'
import { Card } from '@/components/Card'
import { LastBookRead } from '@/components/LastBookRead'
import { Menu } from '@/components/Menu'
import { PageTitle } from '@/components/PageTitle'

import { CaretRight, ChartLineUp } from '@phosphor-icons/react'
import {
  Container,
  Main,
  Header,
  SectionContainer,
  PopularBooks,
  Content,
} from './styles'

interface HomeProps {
  ratings: RatingType[]
  rating: RatingType | null
  popularBooks: {
    name: string
    author: string
    imageUrl: string
    rating: number
  }[]
}

export default function Home({ ratings, rating, popularBooks }: HomeProps) {
  const { status } = useSession()

  return (
    <Container>
      <Menu />

      <Main>
        <PageTitle title="Início" Icon={ChartLineUp} />

        <Content>
          {/* ÚLTIMA LEITURA */}
          {status === 'authenticated' && (
            <SectionContainer>
              <Header>
                <span>Sua última leitura</span>

                <Link href="/">
                  Ver todos
                  <CaretRight size={16} />
                </Link>
              </Header>
              {rating ? (
                <LastBookRead
                  book={{
                    imageUrl: rating.book.imageUrl,
                    author: rating.book.author,
                    name: rating.book.name,
                    description: rating.description,
                    rating: rating.rating,
                  }}
                />
              ) : (
                <Box backgroundMode="light" textSize="sm">
                  Sem avaliações cadastradas
                </Box>
              )}
            </SectionContainer>
          )}

          {/* AVALIAÇÕES MAIS RECENTES */}
          <SectionContainer>
            <Header>
              <span>Avaliações mais recentes</span>
            </Header>

            {ratings.length > 0 &&
              ratings.map((rating) => (
                <BookReview key={rating.id} rating={rating} />
              ))}
          </SectionContainer>
        </Content>
      </Main>

      {/* LIVROS MAIS POPULARES */}
      <PopularBooks>
        <Header>
          <span>Livros Populares</span>

          <Link href="/">
            Ver todos
            <CaretRight size={16} />
          </Link>
        </Header>

        {popularBooks.map((book) => (
          <Card
            key={book.name}
            image={{ width: 64, height: 94, url: book.imageUrl }}
            author={book.author}
            name={book.name}
            rating={book.rating}
          />
        ))}
      </PopularBooks>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  // DADOS DO USUÁRIO LOGADO //
  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  // CARREGANDO AS AVALIAÇÕES MAIS RECENTES PREVIAMENTE //
  const { ratings } = await api
    .get(`/ratings`, {
      params: {
        take: 3,
      },
    })
    .then((res) => res.data)

  // CARREGANDO A ÚLTIMA AVALIAÇÃO FEITA PELO USUÁRIO //
  const { rating } = await api
    .get(`/ratings/user/${session?.user.id}/last-reading`)
    .then((res) => res.data)

  // CARREGANDO OS LIVROS MAIS POPULARES BASEADO NA QTD DE AVALIAÇÕES //
  const { popularBooks } = await api
    .get('/ratings/popular-books')
    .then((res) => res.data)

  return {
    props: {
      ratings,
      rating: rating || null,
      popularBooks,
    },
  }
}

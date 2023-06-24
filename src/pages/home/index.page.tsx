import { useSession } from 'next-auth/react'
import { GetServerSideProps } from 'next'
import { api } from '@/lib/axios'
import Link from 'next/link'

import { BookReview } from '@/components/BookCard'
import { Card } from '@/components/Card'
import { Comment, RatingType } from '@/components/Comment'
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
import { getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '../api/auth/[...nextauth].api'

interface HomeProps {
  ratings: RatingType[]
}

export default function Home({ ratings }: HomeProps) {
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
            </SectionContainer>
          )}

          {/* AVALIAÇÕES MAIS RECENTES */}
          <SectionContainer>
            <Header>
              <span>Avaliações mais recentes</span>
            </Header>

            {ratings.length > 0 &&
              ratings.map((rating) => (
                <Comment key={rating.id} rating={rating} />
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

        {/* <Card image={{ width: 64, height: 94, url: '' }} />

        <Card image={{ width: 64, height: 94, url: '' }} /> */}
      </PopularBooks>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // CARREGANDO AS AVALIAÇÕES MAIS RECENTES PREVIAMENTE //
  const { ratings } = await api.get('/ratings').then((res) => res.data)

  const data = await api
    .get(`/ratings/4383f783-6ce1-4f92-b1dd-7a7a693c4aef`)
    .then((res) => res.data)

  // TODO - Capturar a Sessão do Usuário //
  const session = await getServerSession(
    ctx.req,
    ctx.res,
    buildNextAuthOptions(ctx.req, ctx.res),
  )

  console.log(session)

  return {
    props: {
      ratings,
    },
  }
}

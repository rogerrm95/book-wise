import Link from 'next/link'
import { CaretRight, ChartLineUp } from '@phosphor-icons/react'

import { BookCard } from '@/components/BookCard'
import { Card } from '@/components/Card'
import { Comment } from '@/components/Comment'
import { Menu } from '@/components/Menu'
import { PageTitle } from '@/components/PageTitle'

import {
  Container,
  Main,
  Header,
  SectionContainer,
  PopularBooks,
  Content,
} from './styles'
import { useSession } from 'next-auth/react'

export default function Home() {
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

              <BookCard />
            </SectionContainer>
          )}

          {/* AVALIAÇÕES MAIS RECENTES */}
          <SectionContainer>
            <Header>
              <span>Avaliações mais recentes</span>
            </Header>

            <Comment />

            <Comment />
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

        <Card image={{ width: 64, height: 94 }} />

        <Card image={{ width: 64, height: 94 }} />
      </PopularBooks>
    </Container>
  )
}

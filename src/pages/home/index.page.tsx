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

export default function Home() {
  const isSigned = true

  return (
    <Container>
      <Menu />

      <Main>
        <PageTitle title="Início" Icon={ChartLineUp} />

        <Content>
          {/* ÚLTIMA LEITURA */}
          {isSigned && (
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

        <Card />

        <Card />
      </PopularBooks>
    </Container>
  )
}

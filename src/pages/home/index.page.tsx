import { CaretRight, ChartLineUp } from '@phosphor-icons/react'

import { Card } from '@/components/Card'
import { Comment } from '@/components/Comment'
import { Menu } from '@/components/Menu'

import {
  Container,
  Main,
  Header,
  MostRecentAvaliationList,
  PopularBooks,
  Content,
} from './styles'
import { PageTitle } from '@/components/PageTitle'
import Link from 'next/link'

export default function Home() {
  return (
    <Container>
      <Menu />

      <Main>
        <PageTitle title="Início" Icon={ChartLineUp} />

        <Content>
          <MostRecentAvaliationList>
            <Header>
              <span>Avaliações mais recentes</span>
            </Header>

            <Comment />

            <Comment />
          </MostRecentAvaliationList>

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
        </Content>
      </Main>
    </Container>
  )
}

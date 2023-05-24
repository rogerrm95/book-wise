import { ChartLineUp } from '@phosphor-icons/react'

import { Comment } from '@/components/Comment'
import { Menu } from '@/components/Menu'

import {
  Container,
  Main,
  Header,
  MostRecentAvaliationList,
  Title,
  PopularBooks,
} from './styles'

export default function Home() {
  return (
    <Container>
      <Menu />

      <Main>
        <Header>
          <ChartLineUp size={32} color="#50B2C0" weight="bold" />
          Início
        </Header>

        <Title>Avaliações mais recentes</Title>

        <MostRecentAvaliationList>
          <Comment />

          <Comment />
        </MostRecentAvaliationList>
      </Main>
      {/* LIVROS MAIS POPULARES */}
      <PopularBooks>CONTINUAR</PopularBooks>
    </Container>
  )
}

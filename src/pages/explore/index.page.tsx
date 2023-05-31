import { useState } from 'react'

import { Binoculars } from '@phosphor-icons/react'

import { Card } from '@/components/Card'
import { Menu } from '@/components/Menu'
import { PageTitle } from '@/components/PageTitle'
import { SearchInput } from '@/components/Forms/SearchInput'

import { Container, Main, Header, BookList, Categories, Tag } from './styles'

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('')

  return (
    <Container>
      <Menu />

      <Main>
        <Header>
          <PageTitle title="Explorar" Icon={Binoculars} />

          <SearchInput placeholder="Buscar livro ou autor" size="md" />
        </Header>

        <Categories>
          <Tag
            className={!selectedCategory ? 'active' : ''}
            onClick={() => setSelectedCategory('')}
          >
            Tudo
          </Tag>

          <Tag
            className={selectedCategory === 'Programação' ? 'active' : ''}
            onClick={() => setSelectedCategory('Programação')}
          >
            Programação
          </Tag>

          <Tag
            className={selectedCategory === 'Educação' ? 'active' : ''}
            onClick={() => setSelectedCategory('Educação')}
          >
            Educação
          </Tag>
        </Categories>

        <BookList>
          <Card image={{ width: 108, height: 152 }} />
          <Card image={{ width: 108, height: 152 }} />
          <Card image={{ width: 108, height: 152 }} />
          <Card image={{ width: 108, height: 152 }} />
          <Card image={{ width: 108, height: 152 }} />
        </BookList>
      </Main>
    </Container>
  )
}

import { useState } from 'react'
import { GetServerSideProps } from 'next'
import { api } from '@/lib/axios'

import { Card } from '@/components/Card'
import { Menu } from '@/components/Menu'
import { PageTitle } from '@/components/PageTitle'
import { SearchInput } from '@/components/Forms/SearchInput'

import { Binoculars, Spinner } from '@phosphor-icons/react'
import {
  Container,
  Main,
  Header,
  BookList,
  Categories,
  Tag,
  ReadMoreButton,
} from './styles'

type Books = {
  id: string
  name: string
  imageUrl: string
  author: string
}

interface ExploreProps {
  books: Books[]
  totalOfBooks: number
}

export default function Explore({ books, totalOfBooks }: ExploreProps) {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [booksList, setBooksList] = useState<Books[]>(books as Books[])

  // CARRENGADO DADOS DA API //
  const [isLoading, setIsLoadning] = useState(false)

  // FUNÇÃO - CARREGAR MAIS LIVROS //
  async function loadMoreBooks(skip: number) {
    setIsLoadning(true)
    const result = await api
      .get(`/books/skip/`, { params: { skip } })
      .then((res) => res.data.books)

    setBooksList((props) => {
      return [...props, ...result]
    })
    setIsLoadning(false)
  }

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
          {booksList &&
            booksList.map((book, index) => {
              return (
                <Card
                  key={book.id}
                  name={book.name}
                  author={book.author}
                  image={{ width: 108, height: 152, url: book.imageUrl }}
                />
              )
            })}
        </BookList>

        {totalOfBooks > booksList.length && (
          <ReadMoreButton
            onClick={() => loadMoreBooks(books.length)}
            disabled={isLoading}
          >
            {isLoading ? <Spinner size={24} weight="bold" /> : 'Ler mais'}
          </ReadMoreButton>
        )}
      </Main>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { books, total } = await api.get('/books').then((res) => res.data)

  return {
    props: {
      books,
      totalOfBooks: total,
    },
  }
}

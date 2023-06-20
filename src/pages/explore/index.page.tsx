import { useEffect, useState } from 'react'
import { GetServerSideProps } from 'next'
import { api } from '@/lib/axios'
import { categoriesList } from '@/utils/categoriesList'

import { Card } from '@/components/Card'
import { Menu } from '@/components/Menu'
import { PageTitle } from '@/components/PageTitle'
import { SearchInput } from '@/components/Forms/SearchInput'

import { Binoculars } from '@phosphor-icons/react'
import { Container, Main, Header, BookList, Categories, Tag } from './styles'

type Books = {
  id: string
  name: string
  imageUrl: string
  author: string
  categories: Array<string>
}

interface ExploreProps {
  books: Books[]
  totalOfBooks: number
}

export default function Explore({ books, totalOfBooks }: ExploreProps) {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [booksList, setBooksList] = useState<Books[]>(books as Books[])

  useEffect(() => {
    if (selectedCategory) {
      const newBook = books
        .map((book) => {
          return book.categories.includes(selectedCategory) ? book : null
        })
        .filter((book) => book) as Books[]

      setBooksList(newBook)
    } else {
      setBooksList(books)
    }
  }, [selectedCategory, books])

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

          {categoriesList.map((categoryItem) => (
            <Tag
              key={categoryItem}
              className={selectedCategory === categoryItem ? 'active' : ''}
              onClick={() => setSelectedCategory(categoryItem)}
            >
              {categoryItem}
            </Tag>
          ))}
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

// 1 - Avaliações - Alterar layout //
// 1 - Lidos ou não (Usuário conectado) //

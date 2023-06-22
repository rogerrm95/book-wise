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
import { useSession } from 'next-auth/react'

type Ratings = {
  id: string
  rating: number
  userId: string
}

type Books = {
  id: string
  name: string
  imageUrl: string
  author: string
  categories: Array<string>
  average: number
  ratings: Ratings[]
}

interface ExploreProps {
  books: Books[]
  totalOfBooks: number
}

export default function Explore({ books, totalOfBooks }: ExploreProps) {
  const [booksList, setBooksList] = useState<Books[]>(books as Books[])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [searchInputValue, setSearchInputValue] = useState('')

  const { data } = useSession()

  // EFEITO COLATERAL - SELECIONANDO UMA CATEGORIA, É APLICADO UM FILTRO COM BASE NELA //
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

    setSearchInputValue('')
  }, [selectedCategory, books])

  // FUNÇÃO - BUSCAR CORRESPONDÊNCIA //
  // FILTRAR POR NOME DE LIVRO OU NOME DE AUTOR //
  function onSearchingBookOrAuthor(text: string) {
    if (text.length > 0) {
      const formattedText = text.trim().toLocaleLowerCase()

      const filteredBookList = books.filter((book) => {
        return (
          (book.name.toLocaleLowerCase().includes(formattedText) ||
            book.author.toLocaleLowerCase().includes(formattedText)) &&
          book
        )
      })

      setBooksList(filteredBookList)
    } else {
      setBooksList(books)
    }

    setSearchInputValue(text)
    setSelectedCategory('')
  }

  return (
    <Container>
      <Menu />

      <Main>
        <Header>
          <PageTitle title="Explorar" Icon={Binoculars} />

          <SearchInput
            onSearchingChange={(e) => onSearchingBookOrAuthor(e)}
            value={searchInputValue}
            placeholder="Buscar livro ou autor"
            size="md"
          />
        </Header>

        {/* LISTA DE CATEGORIAS */}
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

        {/* LISTA DE LIVROS */}
        <BookList>
          {booksList &&
            booksList.map((book, index) => {
              return (
                <Card
                  key={book.id}
                  name={book.name}
                  author={book.author}
                  image={{ width: 108, height: 152, url: book.imageUrl }}
                  rating={book.average}
                  isRead={book.ratings.some(
                    (rate) => rate.userId === data?.user.id,
                  )}
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

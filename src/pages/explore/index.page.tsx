import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { GetServerSideProps } from 'next'
import { api } from '@/lib/axios'
import { categoriesList } from '@/utils/categoriesList'

import { BookModal } from '@/components/Modal/BookModal'
import { Card } from '@/components/Card'
import { Menu } from '@/components/Menu'
import { PageTitle } from '@/components/PageTitle'
import { SearchInput } from '@/components/Forms/SearchInput'

import { Binoculars } from '@phosphor-icons/react'
import { Container, Main, Header, BookList, Categories, Tag } from './styles'

type RatingType = {
  id: string
  rating: number
  userId: string
}

type BookType = {
  id: string
  name: string
  imageUrl: string
  author: string
  categories: Array<string>
  average: number
  totalPages: number
  ratings: RatingType[]
}

interface ExploreProps {
  books: BookType[]
  totalOfBooks: number
}

export default function Explore({ books, totalOfBooks }: ExploreProps) {
  const [booksList, setBooksList] = useState<BookType[]>(books as BookType[])
  const [booksFilteredList, setBooksFilteredList] = useState<BookType[]>(
    books as BookType[],
  )
  const [isSelectedABook, setIsSelectedABook] = useState(false)
  const [selectedBook, setSelectedBook] = useState({} as BookType)

  const [selectedCategory, setSelectedCategory] = useState('')
  const [searchInputValue, setSearchInputValue] = useState('')

  const { data } = useSession()

  // FUNÇÃO - SELECIONAR UMA CATEGORIA //
  // SELECIONANDO UMA CATEGORIA É APLICADO UM FILTRO RETORNANDO UM NOVO ARRAY //
  function onSelectAnyCategory(category: string) {
    setSearchInputValue('')

    if (category) {
      const newBook = books
        .map((book) => {
          return book.categories.includes(category) ? book : null
        })
        .filter((book) => book) as BookType[]

      setSelectedCategory(category)
      setBooksList(newBook)
    } else {
      setBooksList(books)
      setSelectedCategory(category)
    }
  }

  // FUNÇÃO - BUSCAR CORRESPONDÊNCIA //
  // FILTRAR POR NOME DE LIVRO OU NOME DE AUTOR //
  function onSearchingBookOrAuthor(text: string) {
    if (text.length > 0) {
      const formattedText = text.trim().toLocaleLowerCase()

      const filterList = booksList.filter((book) => {
        return (
          (book.name.toLocaleLowerCase().includes(formattedText) ||
            book.author.toLocaleLowerCase().includes(formattedText)) &&
          book
        )
      })

      setBooksFilteredList(filterList)
    } else {
      setBooksFilteredList(booksList)
    }

    setSearchInputValue(text)
  }

  function handleSelectedBook(book: BookType) {
    setSelectedBook(book)
    setIsSelectedABook(true)
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
            onClick={() => onSelectAnyCategory('')}
          >
            Tudo
          </Tag>

          {categoriesList.map((categoryItem) => (
            <Tag
              key={categoryItem}
              className={selectedCategory === categoryItem ? 'active' : ''}
              onClick={() => onSelectAnyCategory(categoryItem)}
            >
              {categoryItem}
            </Tag>
          ))}
        </Categories>

        {/* LISTA DE LIVROS */}
        {searchInputValue ? (
          <BookList>
            {booksList &&
              booksFilteredList.map((book) => {
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
                    onClick={() => handleSelectedBook(book)}
                  />
                )
              })}
          </BookList>
        ) : (
          <BookList>
            {booksList &&
              booksList.map((book) => {
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
                    onClick={() => handleSelectedBook(book)}
                  />
                )
              })}
          </BookList>
        )}
      </Main>

      {isSelectedABook && (
        <BookModal
          book={selectedBook}
          onOpenChange={setIsSelectedABook}
          open={isSelectedABook}
        />
      )}
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

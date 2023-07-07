import { Rating } from '../Rating'

import { LastBookReadContainer, BookImage, BookInfo } from './styles'

type BookType = {
  name: string
  author: string
  rating: number
  imageUrl: string
  description: string
}

interface LastBookReadProps {
  book: BookType
}

export function LastBookRead({ book }: LastBookReadProps) {
  return (
    <LastBookReadContainer>
      <BookImage
        width={108}
        height={152}
        src={book.imageUrl}
        alt=""
        title={book.name}
      />

      <BookInfo>
        <header>
          Há 2 dias
          <Rating rating={book.rating} />
        </header>

        <article>
          <p>{book.name}</p>
          <span>{book.author}</span>
        </article>

        <p>{book.description}</p>
      </BookInfo>
    </LastBookReadContainer>
  )
}

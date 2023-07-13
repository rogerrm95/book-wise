import { Rating } from '../Rating'

import { LastBookReadContainer, BookImage, BookInfo } from './styles'

type BookType = {
  name: string
  author: string
  rating: number
  imageUrl: string
  description: string
  createdAt: string
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
          <span>{book.createdAt}</span>
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

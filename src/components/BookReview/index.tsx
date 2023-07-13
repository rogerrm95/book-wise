import Link from 'next/link'

import { Avatar } from '../Avatar'
import { Rating } from '../Rating'

import {
  CardContainer,
  Header,
  User,
  Content,
  BookInfo,
  BookDescription,
  BookHeader,
  BookImage,
  EmptyResults,
} from './styles'

export type BookType = {
  bookId: string
  author: string
  name: string
  imageUrl: string
}

export type UserType = {
  userId: string
  name: string
  avatar: string
}

export type RatingType = {
  id: string
  rating: number
  description: string
  createdAt: string
  user: UserType
  book: BookType
}

interface BookReviewProps {
  rating: RatingType
}

export function BookReview({ rating }: BookReviewProps) {
  return (
    <CardContainer>
      {!rating ? (
        <EmptyResults>Sem avaliações cadastradas</EmptyResults>
      ) : (
        <>
          {' '}
          <Header>
            <Avatar
              avatarUrl={rating.user.avatar}
              username={rating.user.name}
            />
            <User>
              <Link href={`/profile/${rating.user.userId}`}>
                {rating.user.name}
              </Link>
              <span>{rating.createdAt}</span>
            </User>
            <Rating rating={rating.rating} />
          </Header>
          <Content>
            <BookImage
              src={rating.book.imageUrl}
              alt={rating.book.name}
              title={rating.book.name}
              width={108}
              height={152}
              quality={100}
            />

            <BookInfo>
              <BookHeader>
                <p>{rating.book.name}</p>
                <span>{rating.book.author}</span>
              </BookHeader>

              <BookDescription>{rating.description}</BookDescription>
            </BookInfo>
          </Content>
        </>
      )}
    </CardContainer>
  )
}

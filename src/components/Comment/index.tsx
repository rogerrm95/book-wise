import { Avatar } from '../Avatar'
import { Rating } from '../Rating'

import {
  CommentContainer,
  Header,
  User,
  Content,
  BookImage,
  BookInfo,
  BookHeader,
  BookDescription,
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
  book: BookType
  user: UserType
}

interface CommentProps {
  rating: RatingType
}

export function Comment({ rating }: CommentProps) {
  return (
    <CommentContainer>
      <Header>
        <Avatar avatarUrl={rating.user.avatar} username={rating.user.name} />
        <User>
          <p>{rating.user.name}</p>
          <span>Hoje</span>
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
    </CommentContainer>
  )
}

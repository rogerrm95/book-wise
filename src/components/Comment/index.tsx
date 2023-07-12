import Link from 'next/link'
import { Avatar } from '../Avatar'
import { Rating } from '../Rating'

import { CommentContainer, Header, User, Content } from './styles'

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
          <Link href={`/profile/${rating.user.userId}`}>
            {rating.user.name}
          </Link>
          <span>Hoje</span>
        </User>

        <Rating rating={rating.rating} />
      </Header>

      <Content>{rating.description}</Content>
    </CommentContainer>
  )
}

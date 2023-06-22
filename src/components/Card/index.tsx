import { Rating } from '../Rating'

import { CardContainer, BookImage, BookInfo, Tag } from './styles'

interface CardProps {
  name: string
  author: string
  image: {
    width: number
    height: number
    url: string
  }
  rating: number
  isRead?: boolean
}

export function Card({
  image,
  author,
  name,
  rating,
  isRead = false,
}: CardProps) {
  return (
    <CardContainer>
      <BookImage
        src={`${image.url}`}
        alt={name}
        title={name}
        width={image.width}
        height={image.height}
        quality={100}
      />
      <BookInfo>
        <p title={name}>{name}</p>

        <span>{author}</span>

        <Rating rating={rating} />
      </BookInfo>

      {isRead && <Tag>LIDO</Tag>}
    </CardContainer>
  )
}

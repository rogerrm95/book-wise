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
}

export function Card({ image, author, name, rating }: CardProps) {
  const isBookAlreadyReaded = true

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

      {isBookAlreadyReaded && <Tag>LIDO</Tag>}
    </CardContainer>
  )
}

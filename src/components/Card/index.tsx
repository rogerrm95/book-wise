import { HTMLAttributes } from 'react'
import { Rating } from '../Rating'

import { CardContainer, BookImage, BookInfo, Tag } from './styles'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  name: string
  author: string
  image: {
    width: number
    height: number
    url: string
  }
  rating: number
  amountRatings?: number
  isRead?: boolean
  disabled?: boolean
}

export function Card({
  image,
  author,
  name,
  rating,
  amountRatings,
  isRead = false,
  disabled = false,
  ...rest
}: CardProps) {
  return (
    <CardContainer status={disabled ? 'disabled' : 'default'} {...rest}>
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
        {amountRatings && <span>{`Avaliações: ${amountRatings}`}</span>}
      </BookInfo>

      {isRead && <Tag>LIDO</Tag>}
    </CardContainer>
  )
}

import Image from 'next/image'

import { CardContainer, InfoBox, Header, Description, Option } from './styles'
import { Rating } from '../Rating'

interface BookReviewProps {
  author: string
  name: string
  imageUrl: string
  review: string
}

export function BookReview({ author, imageUrl, name }: BookReviewProps) {
  return (
    <CardContainer>
      <Image
        src={imageUrl}
        alt={name}
        title={name}
        width={108}
        height={152}
        quality={75}
      />

      <InfoBox>
        <Header>
          <span>Há 2 dias</span>

          <Rating rating={3} />
        </Header>

        <Description>
          <p>{name}</p>
          <span>{author}</span>
        </Description>

        <Option>
          Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
          Penatibus id vestibulum imperdiet a at imperdiet lectu...
        </Option>
      </InfoBox>
    </CardContainer>
  )
}

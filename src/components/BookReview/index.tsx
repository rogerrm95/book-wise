import Image from 'next/image'

import { Rating } from '../Rating'

import { RatingType } from '../Comment'
import {
  CardContainer,
  InfoBox,
  Header,
  Description,
  Option,
  EmptyResults,
} from './styles'

interface BookReviewProps {
  rating: RatingType | null
}

export function BookReview({ rating }: BookReviewProps) {
  return (
    <CardContainer>
      {!rating ? (
        <EmptyResults>Sem avaliações cadastradas </EmptyResults>
      ) : (
        <>
          <Image
            src={rating.book.imageUrl}
            alt={rating.book.name}
            title={rating.book.name}
            width={108}
            height={152}
            quality={100}
          />

          <InfoBox>
            <Header>
              <span>Há 2 dias</span>

              <Rating rating={3} />
            </Header>

            <Description>
              <p>{rating.book.name}</p>
              <span>{rating.book.author}</span>
            </Description>

            <Option>{rating.description}</Option>
          </InfoBox>
        </>
      )}
    </CardContainer>
  )
}

import { Star } from '@phosphor-icons/react'
import { RatingContainer } from './styles'

interface RatingProps {
  rating: number
  sizeIcons?: number
  onRating?: (rate: number) => void
}

// Variável Auxiliar - Quantidade de Estrelas //
const AMOUNT_STARS = 5

export function Rating({
  rating,
  sizeIcons = 16,
  onRating = () => {},
}: RatingProps) {
  const starsFullAmount = Array(rating).fill(1)
  const starsEmptyAmount =
    AMOUNT_STARS - rating > 0 ? Array(AMOUNT_STARS - rating).fill(0) : null

  return (
    <RatingContainer>
      {starsFullAmount.map((_, index) => (
        <Star size={sizeIcons} key={index} color="#8381D9" weight="fill" />
      ))}

      {starsEmptyAmount &&
        starsEmptyAmount.map((_, index) => (
          <Star size={sizeIcons} key={index} color="#8381D9" />
        ))}
    </RatingContainer>
  )
}

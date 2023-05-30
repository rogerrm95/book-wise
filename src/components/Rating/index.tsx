import { Star } from '@phosphor-icons/react'
import { RatingContainer } from './styles'

interface RatingProps {
  avaliationNumber: number
  sizeIcons?: number
}

export function Rating({ avaliationNumber, sizeIcons = 16 }: RatingProps) {
  const starsFullAmount = new Array(avaliationNumber).fill(1)
  const starsEmptyAmount =
    5 - avaliationNumber !== 0 ? new Array(5 - avaliationNumber).fill(0) : null

  return (
    <RatingContainer>
      {starsFullAmount.map((_, index) => (
        <Star size={sizeIcons} key={index} color="#8381D9" weight="fill" />
      ))}

      {starsEmptyAmount &&
        starsEmptyAmount.map((_, index) => (
          <Star size={sizeIcons} key={index} color="#8381D9" />
        ))}

      {/* <Star size={24} key={index} /> */}
    </RatingContainer>
  )
}

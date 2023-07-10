import { useState } from 'react'

import { Star } from '@phosphor-icons/react'

import { RatingContainer } from './styles'

interface RatingProps {
  sizeIcons?: number
  onRating?: (rate: number) => void
}

// Variável Auxiliar - Quantidade de Estrelas //
const AMOUNT_STARS = 5

export function RatingButton({
  sizeIcons = 16,
  onRating = () => {},
}: RatingProps) {
  const [rate, setRate] = useState(0)

  const starsFullAmount = Array(rate).fill(1)
  const starsEmptyAmount =
    AMOUNT_STARS - rate > 0 ? Array(AMOUNT_STARS - rate).fill(0) : []

  const fullStars = [...starsFullAmount, ...starsEmptyAmount]

  // FUNÇÃO - CAPTURAR A QUANTIDADE DE ESTRELAS MARCADAS //
  function handleGetAmountOfStars(stars: number) {
    if (stars === rate) {
      const newRate = stars - 1

      onRating(newRate)
      setRate(newRate)
    } else {
      setRate(stars)
      onRating(stars)
    }
  }

  return (
    <RatingContainer>
      {fullStars.map((number, index) => (
        <Star
          size={sizeIcons}
          key={index}
          color="#8381D9"
          weight={number !== 0 ? 'fill' : 'regular'}
          onClick={() => handleGetAmountOfStars(index + 1)}
        />
      ))}
    </RatingContainer>
  )
}

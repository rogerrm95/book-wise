import { styled } from '@stitches/react'

export const RatingContainer = styled('button', {
  display: 'flex',
  gap: '$1',

  cursor: 'pointer',

  '& svg:hover': {
    transform: 'scale(1.25)',
  },
})

import { styled } from '@stitches/react'

export const RatingContainer = styled('div', {
  display: 'flex',
  gap: '$1',

  variants: {
    position: {
      default: {
        justifyContent: 'flex-start',
      },
      end: {
        justifyContent: 'flex-end',
      },
      center: {
        justifyContent: 'center',
      },
    },
  },
})

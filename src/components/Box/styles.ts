import { styled } from '@stitches/react'

export const BoxContainer = styled('div', {
  width: '100%',

  padding: '$6 $5',
  borderRadius: '$md',

  variants: {
    bgColor: {
      light: {
        backgroundColor: '$gray600',
      },
      dark: {
        backgroundColor: '$gray700',
      },
    },
    textSize: {
      sm: {
        fontSize: '$sm',
      },
      md: {
        fontSize: '$md',
      },
      lg: {
        fontSize: '$lg',
      },
    },
  },
})

import { styled } from '@stitches/react'

export const AvatarContainer = styled('img', {
  borderRadius: '$full',

  variants: {
    size: {
      sm: {
        width: '1.5rem',
      },
      md: {
        width: '2rem',
      },
      lg: {
        width: '2.5rem',
      },
    },
  },
})

import { styled } from '@stitches/react'

export const AvatarContainer = styled('img', {
  borderRadius: '$full',
  objectFit: 'contain',
  border: '1px solid transparent',
  background: '$gradient-vertical',

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
      xl: {
        width: '4.5rem',
      },
    },
  },
})

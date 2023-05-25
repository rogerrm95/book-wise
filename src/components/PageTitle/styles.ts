import { styled } from '@stitches/react'

export const PageTitleContainer = styled('header', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  fontWeight: '$bold',
  fontSize: '$2xl',
  color: '$gray100',

  h2: {
    fontWeight: '$bold',
    fontSize: '$2xl',
  },
})

import { styled } from '@stitches/react'

export const CommentContainer = styled('div', {
  padding: '1.5rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '$5',

  backgroundColor: '$gray700',
  borderRadius: '$md',
})

export const Header = styled('header', {
  display: 'grid',
  gridTemplateColumns: '40px 1fr 96px',
  gap: '$4',
})

export const User = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  // LINK - NEXT //
  a: {
    cursor: 'pointer',
    transition: 'all 0.3s',

    '&:hover': {
      color: '$purple100',
    },
  },

  span: {
    color: '$gray400',
    fontSize: '$sm',

    '&::first-letter': {
      textTransform: 'uppercase',
    },
  },
})

export const Content = styled('div', {
  fontSize: '$sm',
  color: '$gray300',
  lineHeight: '$tall',
})

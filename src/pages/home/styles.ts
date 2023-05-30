import { styled } from '@stitches/react'

export const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: '232px 2fr 1fr',

  gap: '5rem',
  padding: '$5',

  height: '100vh',
  maxWidth: '1440px',
  margin: 'auto',
})

export const Main = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',

  paddingTop: '3rem',
  paddingRight: '1rem',
  marginBottom: '$10',
})

export const Content = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
})

export const SectionContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
})

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$3',

  span: {
    fontSize: '$sm',
    color: '$gray100',
  },

  a: {
    display: 'flex',
    alignItems: 'center',
    gap: '$2',

    cursor: 'pointer',
    color: '$purple100',
    fontSize: '$sm',
    fontWeight: '$bold',

    transition: 'all 0.3s',

    '&:hover': {
      opacity: 0.75,
    },
  },
})

export const PopularBooks = styled(SectionContainer, {
  paddingTop: '5rem',
  marginTop: '$10',
})

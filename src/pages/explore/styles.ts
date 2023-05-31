import { styled } from '@stitches/react'

export const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: '232px 1fr',

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

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '$10',
})

export const Categories = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  flexWrap: 'wrap',
})

export const Tag = styled('span', {
  padding: '$1 $4',
  borderRadius: '$full',

  color: '$purple100',
  backgroundColor: 'transparent',
  border: '1px solid $purple100',
  cursor: 'pointer',
  transition: 'all 0.3s',

  '&:hover': {
    backgroundColor: '$purple100',
    color: '$gray100',
  },

  '&.active': {
    color: '$gray100',
    backgroundColor: '$purple200',
    borderColor: '$purple200',

    '&:hover': {
      borderColor: '$gray400',
    },
  },
})

export const BookList = styled('div', {
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, 318px)',
  gap: '$5',
  marginBottom: '$4',

  '@media(max-width:992px)': {
    gridTemplateColumns: 'repeat(auto-fit, 100%)',
  },
})

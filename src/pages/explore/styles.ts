import { keyframes, styled } from '@stitches/react'

export const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: '232px 1fr',

  gap: '5rem',
  padding: '$5',

  height: '100vh',
  maxWidth: '1440px',
  margin: 'auto',

  '@media(max-width: 992px)': {
    display: 'flex',
    flexDirection: 'column',

    gap: '$4',
  },
})

export const Main = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',

  paddingTop: '3rem',
  paddingRight: '1rem',
  paddingBottom: '30px',

  position: 'relative',
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '$10',

  // MOBILE //
  '@media(max-width: 600px)': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$4',
  },
})

export const Categories = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  flexWrap: 'wrap',

  // LAPTOP OR LESS //
  '@media(max-width: 992px)': {
    display: 'none',
  },
})

export const SelectCategory = styled('div', {
  display: 'none',

  // LAPTOP OR LESS //
  '@media(max-width: 992px)': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$3',
    flexWrap: 'wrap',

    '& > span': {
      display: 'flex',
      alignItems: 'center',
      gap: '$2',

      color: '$gray300',
    },
  },
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

  '@media(max-width:992px)': {
    gridTemplateColumns: 'repeat(auto-fit, 100%)',
  },
})

const loadingSpinner = keyframes({
  from: {
    transform: 'rotate(0deg)',
  },
  to: {
    transform: 'rotate(359deg)',
  },
})

export const ReadMoreButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$3',

  alignSelf: 'center',

  color: '$purple100',
  fontWeight: '$bold',
  fontSize: '$sm',
  border: '1px solid $colors$purple100',
  borderRadius: '$sm',
  maxWidth: '96px',

  cursor: 'pointer',
  transition: 'all 0.3s',

  '&:hover': {
    opacity: 0.7,
  },

  svg: {
    animation: `${loadingSpinner} 2.5s infinite linear`,
  },
})

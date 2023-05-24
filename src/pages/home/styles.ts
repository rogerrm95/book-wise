import { styled } from '@stitches/react'

export const Container = styled('div', {
  display: 'grid',
  gridTemplateColumns: '232px 2fr 1fr',
  gap: '$8',
  padding: '$5',

  height: '100vh',
})

export const Main = styled('main', {
  paddingTop: '3rem',
  paddingRight: '1rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  overflowY: 'auto',
})

export const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  fontWeight: '$bold',
  fontSize: '$2xl',
  color: '$gray100',
})

export const Title = styled('span', {
  fontSize: '$sm',
  color: '$gray100',
  marginTop: '$6',
})

export const MostRecentAvaliationList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
})

// CONTINUAR //
export const PopularBooks = styled('div', {})

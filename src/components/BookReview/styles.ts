import Image from 'next/image'
import { styled } from '@stitches/react'

export const CardContainer = styled('div', {
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
  alignItems: 'center',
  gap: '$4',
})

export const User = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  span: {
    color: '$gray400',
    fontSize: '$sm',
  },
})

export const Content = styled('div', {
  display: 'flex',
  gap: '$5',
})

export const BookImage = styled(Image, {
  borderRadius: '$sm',
})

export const BookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',
})

export const BookHeader = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  p: {
    fontWeight: '$bold',
  },

  span: {
    fontSize: '$sm',
    color: '$gray400',
  },
})

export const BookDescription = styled('p', {
  color: '$gray300',
  fontSize: '$sm',

  overflow: 'hidden',
  display: '-webkit-box',
  '-webkit-box-orient': 'vertical',
  '-webkit-line-clamp': 3,
  whiteSpace: 'pre-wrap',
})

export const EmptyResults = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',

  width: '100%',

  color: '$gray400',
  fontSize: '$sm',
})

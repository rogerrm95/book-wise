import { styled } from '@stitches/react'
import Image from 'next/image'

export const CommentContainer = styled('div', {
  padding: '$6',

  display: 'flex',
  flexDirection: 'column',
  gap: '$8',

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
  justifyContent: 'space-between',

  span: {
    color: '$gray400',
    fontSize: '$sm',
  },
})

export const Rating = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '$1',
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

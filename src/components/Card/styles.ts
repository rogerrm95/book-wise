import { styled } from '@stitches/react'
import Image from 'next/image'

export const CardContainer = styled('div', {
  padding: '1.125rem 1.25rem',

  display: 'flex',
  gap: '$10',

  backgroundColor: '$gray700',
  borderRadius: '$md',
})

export const BookImage = styled(Image, {
  borderRadius: '$sm',
})

export const BookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  p: {
    fontWeight: '$bold',
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 2,
    whiteSpace: 'pre-wrap',
  },

  span: {
    fontSize: '$sm',
    color: '$gray400',
  },
})

export const BookRating = styled('div', {
  display: 'flex',
  gap: '$1',

  marginTop: 'auto',
})

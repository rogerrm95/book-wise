import { styled } from '@stitches/react'

import Image from 'next/image'

export const LastBookReadContainer = styled('div', {
  display: 'flex',
  gap: '$6',
  padding: '$6 $5',

  borderRadius: '$md',
  backgroundColor: '$gray600',

  '& > div:last-child': {
    marginLeft: 'auto',
  },
})

export const BookImage = styled(Image, {
  borderRadius: '$sm',
  objectFit: 'contain',
})

export const BookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  width: '100%',

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '$3',

    span: {
      color: '$gray300',
      fontSize: '$sm',

      '&::first-letter': {
        textTransform: 'uppercase',
      },
    },
  },

  article: {
    display: 'block',

    p: {
      fontWeight: '$bold',
    },

    span: {
      color: '$gray400',
      fontSize: '$sm',
    },

    'p, span': {
      overflow: 'hidden',
      display: '-webkit-box',
      '-webkit-box-orient': 'vertical',
      '-webkit-line-clamp': 1,
      whiteSpace: 'pre-wrap',
    },
  },

  '& > p': {
    marginTop: '$3',
    fontSize: '$sm',
    color: '$gray400',
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 3,
    whiteSpace: 'pre-wrap',
  },
})

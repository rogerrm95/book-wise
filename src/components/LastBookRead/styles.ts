import { styled } from '@stitches/react'
import { RatingContainer } from '../Rating/styles'

import Image from 'next/image'

export const LastBookReadContainer = styled('div', {
  backgroundColor: '$gray600',

  display: 'flex',
  gap: '$6',
  padding: '$6 $5',

  borderRadius: '$md',
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
    color: '$gray300',

    [`${RatingContainer}`]: {
      marginLeft: 'auto',
    },
  },

  article: {
    display: 'block',

    p: {
      fontWeight: '$bold',
    },

    span: {
      color: '$gray400',
    },
  },

  '& > p': {
    marginTop: '$3',
    fontSize: '$sm',
    color: '$gray400',
    // LIMITAÇÃO DE CARACTERES VISÍVEIS //
  },
})

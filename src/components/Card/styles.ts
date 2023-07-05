import { styled } from '@stitches/react'
import Image from 'next/image'
import { RatingContainer } from '../Rating/styles'

export const CardContainer = styled('div', {
  display: 'flex',
  gap: '$5',
  padding: '1.125rem 1.25rem',
  position: 'relative',
  overflow: 'hidden',

  backgroundColor: '$gray700',

  variants: {
    status: {
      default: {
        border: '1px solid $gray700',
        borderRadius: '$md',

        transition: 'all 0.3s',
        cursor: 'pointer',

        '&:hover': {
          borderColor: '$gray600',
        },
      },
      disabled: {
        cursor: 'default',
        borderColor: '$gray700',

        '& span:last-child': {
          marginTop: '0.25rem',
        },
      },
    },
  },
})

export const BookImage = styled(Image, {
  borderRadius: '$sm',
})

export const BookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',

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

  [`${RatingContainer}`]: {
    marginTop: 'auto',
  },
})

export const Tag = styled('span', {
  backgroundColor: '$green300',
  color: '$green100',
  padding: '$1 $1',
  borderBottomLeftRadius: '$sm',

  textAlign: 'center',
  fontSize: '$xs',

  position: 'absolute',
  top: 0,
  right: 0,
})

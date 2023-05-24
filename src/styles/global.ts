import { globalCss } from '@stitches/react'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  body: {
    backgroundColor: '$gray800',
    color: '$gray100',
    fontFamily: '$default',
    '-webkit-font-smoothing': 'antialiased',
  },

  'button, a': {
    all: 'unset',
  },

  /* width */
  '::-webkit-scrollbar': {
    width: '8px',
    borderRadius: '999px',
  },

  /* Track */
  '::-webkit-scrollbar-track': {
    background: '$gray700',
  },

  /* Handle */
  '::-webkit-scrollbar-thumb': {
    background: '$gray600',
  },

  /* Handle on hover */
  '::-webkit-scrollbar-thumb:hover': {
    background: '$purple200',
  },
})

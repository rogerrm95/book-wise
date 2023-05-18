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
})
